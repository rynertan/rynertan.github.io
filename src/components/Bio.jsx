import React from 'react';

const Bio = ({ text, image = '/dp.jpg' }) => {
  const parseMarkdownLinks = (text) => {
    const parts = text.split(/(\[.*?\]\(.*?\))/g);
    return parts.map((part, i) => {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        return (
          <a 
            key={i} 
            href={match[2]} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: 'var(--text-primary)', 
              textDecoration: 'underline',
              textDecorationColor: 'var(--border)',
              textUnderlineOffset: '4px',
              transition: 'all 0.2s ease',
              fontWeight: 500 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecorationColor = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecorationColor = 'var(--border)';
            }}
          >
            {match[1]}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <section className="animate-fade-in stagger-2" style={{ marginBottom: '3rem' }}>
      <h3 className="section-title">Bio</h3>
      <div style={{ maxWidth: '100%' }}>
        {image && (
          <img 
            src={image} 
            alt="Ryner Tan" 
            className="bio-photo" 
          />
        )}
        {text.split('\n').map((paragraph, idx) => 
          paragraph.trim() ? (
            <p key={idx} style={{ 
              fontSize: '1.0625rem', 
              lineHeight: '1.55', 
              color: 'var(--text-primary)',
              marginBottom: '1.25rem'
            }}>
              {parseMarkdownLinks(paragraph)}
            </p>
          ) : null
        )}
        <div style={{ clear: 'both' }} />
      </div>
    </section>
  );
};

export default Bio;
