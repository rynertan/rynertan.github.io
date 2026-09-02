/**
 * Utility to parse standard BibTeX text into publication objects.
 * Works seamlessly with standard BibTeX exports from arXiv, Google Scholar, DBLP, Zotero, etc.
 */
export function parseBibtex(bibText) {
  if (!bibText) return [];

  // Match each entry starting with @entryType{key, ... }
  const entryRegex = /@([a-zA-Z]+)\s*\{\s*([^,]+),([\s\S]*?)\n\}/g;
  const publications = [];

  let match;
  while ((match = entryRegex.exec(bibText)) !== null) {
    const type = match[1].toLowerCase();
    const id = match[2].trim();
    const body = match[3];
    const rawBibtex = match[0].trim();

    const fields = {};

    // Match key = {value} or key = "value" or key = value
    const fieldRegex = /([a-zA-Z_]+)\s*=\s*(?:\{([\s\S]*?)\}|"([\s\S]*?)"|([^,\}\n]+))/g;
    let fieldMatch;
    while ((fieldMatch = fieldRegex.exec(body)) !== null) {
      const key = fieldMatch[1].toLowerCase();
      const value = (fieldMatch[2] !== undefined ? fieldMatch[2] :
                     fieldMatch[3] !== undefined ? fieldMatch[3] : fieldMatch[4]).trim();
      fields[key] = value;
    }

    // Clean title: remove protecting curly braces e.g. {GlobeAudio} -> GlobeAudio
    let title = fields.title || '';
    title = title.replace(/^\{|\}$/g, '').replace(/\{([^{}]+)\}/g, '$1');

    // Format authors: convert BibTeX "and" separator to ", "
    let authors = fields.author || fields.authors || '';
    if (authors) {
      authors = authors.split(/\s+and\s+/i).map(a => a.trim()).join(', ');
    }

    // Extract eprint / arXiv ID if available
    let arxivId = fields.eprint || fields.arxiv || '';
    if (arxivId) {
      arxivId = arxivId.replace(/^arXiv:\s*/i, '').trim();
    } else if (fields.url && fields.url.includes('arxiv.org/abs/')) {
      const arxivMatch = fields.url.match(/arxiv\.org\/abs\/([^\s#?]+)/);
      if (arxivMatch) arxivId = arxivMatch[1];
    } else if (fields.url && fields.url.includes('arxiv.org/pdf/')) {
      const arxivMatch = fields.url.match(/arxiv\.org\/pdf\/([^\s#?]+?)(?:\.pdf)?$/);
      if (arxivMatch) arxivId = arxivMatch[1];
    }

    // Format venue: support multiple venues separated by ';' or newline
    let venue = fields.venue || fields.booktitle || fields.journal || '';
    if (!venue && arxivId) {
      venue = `arXiv:${arxivId}`;
    }
    if (typeof venue === 'string') {
      if (venue.includes(';')) {
        venue = venue.split(';').map(v => v.trim()).filter(Boolean);
      } else if (venue.includes('\n')) {
        venue = venue.split('\n').map(v => v.trim()).filter(Boolean);
      }
    }

    // Format links
    let url_arxiv = fields.url_arxiv || fields.arxiv || '';
    if (!url_arxiv && arxivId) {
      url_arxiv = `https://arxiv.org/abs/${arxivId}`;
    } else if (!url_arxiv && fields.url && fields.url.includes('arxiv.org/abs/')) {
      url_arxiv = fields.url;
    } else if (url_arxiv && !url_arxiv.startsWith('http')) {
      url_arxiv = `https://arxiv.org/abs/${url_arxiv}`;
    }

    let url_pdf = fields.url_pdf || fields.pdf || '';
    if (!url_pdf && arxivId) {
      url_pdf = `https://arxiv.org/pdf/${arxivId}.pdf`;
    } else if (!url_pdf && fields.url && (fields.url.endsWith('.pdf') || fields.url.includes('/pdf/'))) {
      url_pdf = fields.url;
    }

    let url_project = fields.url_project || fields.project || fields.website || '';
    if (!url_project && fields.url && !fields.url.includes('arxiv.org') && !fields.url.endsWith('.pdf')) {
      url_project = fields.url;
    }

    publications.push({
      id,
      type,
      title,
      authors,
      venue,
      year: fields.year || '',
      image: fields.image || null,
      url_pdf,
      url_arxiv,
      url_project,
      bibtex: rawBibtex
    });
  }

  return publications;
}
