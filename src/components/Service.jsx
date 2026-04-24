import React from 'react';

const Service = ({ items }) => {
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
    <section className="animate-fade-in stagger-4" style={{ marginBottom: '3rem' }}>
      <h3 className="section-title">Service</h3>
      <ul style={{ 
        listStyleType: 'none', 
        padding: 0, 
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }}>
        {items.map((item, idx) => (
          <li key={idx} style={{ 
            fontSize: '1rem', 
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem'
          }}>
            <span style={{ color: 'var(--text-muted)', userSelect: 'none' }}>•</span>
            <span>{parseMarkdownLinks(item)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Service;
