import React, { useState } from 'react';
import { BookOpen, FileText, Code, Check } from 'lucide-react';

const PublicationItem = ({ pub }) => {
  const [showBibtex, setShowBibtex] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(pub.bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatAuthors = (authors) => {
    if (!authors) return null;
    
    const parts = authors.split(/,\s*/);
    return parts.map((author, index) => {
      const isMe = author.includes('Ryner Tan');
      
      return (
        <React.Fragment key={index}>
          <span style={{ 
            fontWeight: isMe ? 700 : 400,
            color: isMe ? 'var(--text-primary)' : 'inherit'
          }}>
            {author}
          </span>
          {index < parts.length - 1 && ', '}
        </React.Fragment>
      );
    });
  };

  return (
    <div style={{ marginBottom: '2.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
      {pub.image && (
        <img 
          src={pub.image} 
          alt={pub.title} 
          style={{ 
            width: '180px', 
            height: '110px', 
            objectFit: 'cover', 
            borderRadius: '6px', 
            border: '1px solid var(--border)', 
            flexShrink: 0,
            backgroundColor: 'var(--card-bg)'
          }}
        />
      )}
      <div style={{ flex: 1 }}>
        <h4 style={{ 
          fontSize: '1.05rem', 
          fontWeight: 600, 
          margin: '0 0 0.35rem 0',
          color: 'var(--text-primary)'
        }}>
          {pub.title}
        </h4>
        <p style={{ margin: '0 0 0.25rem 0', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          {formatAuthors(pub.authors)}
        </p>
        <p style={{ margin: '0 0 0.75rem 0', color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic' }}>
          {pub.venue} {pub.year && `(${pub.year})`}
        </p>
      
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {pub.url_pdf && pub.url_pdf !== '#' && (
            <a href={pub.url_pdf} target="_blank" rel="noopener noreferrer" className="pub-link">
              <FileText size={14} /> PDF
            </a>
          )}
          {pub.url_arxiv && pub.url_arxiv !== '#' && (
            <a href={pub.url_arxiv} target="_blank" rel="noopener noreferrer" className="pub-link">
              <BookOpen size={14} /> arXiv
            </a>
          )}
          {pub.url_project && pub.url_project !== '#' && (
            <a href={pub.url_project} target="_blank" rel="noopener noreferrer" className="pub-link">
              <Code size={14} /> Project
            </a>
          )}
          {pub.bibtex && (
            <button 
              onClick={() => setShowBibtex(!showBibtex)}
              className="pub-link"
            >
              BibTeX
            </button>
          )}
        </div>

        {showBibtex && (
          <div style={{ 
            marginTop: '1rem', 
            padding: '1rem', 
            backgroundColor: 'var(--card-bg)', 
            border: '1px solid var(--border)',
            borderRadius: '6px',
            position: 'relative'
          }}>
            <button 
              onClick={handleCopy}
              style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                padding: '0.25rem 0.5rem',
                fontSize: '0.8rem',
                backgroundColor: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                color: 'var(--text-secondary)'
              }}
            >
              {copied ? <Check size={12} /> : null}
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <pre style={{ 
              margin: 0, 
              fontSize: '0.85rem', 
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
              color: 'var(--text-secondary)'
            }}>
              {pub.bibtex}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

const Publications = ({ items }) => {
  return (
    <section className="animate-fade-in stagger-4" style={{ marginBottom: '3rem' }}>
      <h3 className="section-title">Publications</h3>
      <div>
        {items.map((pub) => (
          <PublicationItem key={pub.id} pub={pub} />
        ))}
      </div>
    </section>
  );
};

export default Publications;
