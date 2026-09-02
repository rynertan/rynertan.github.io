import React from 'react';

const News = ({ items }) => {
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
    <section className="animate-fade-in stagger-3" style={{ marginBottom: '3rem' }}>
      <h3 className="section-title">Updates</h3>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {items.map((item, idx) => (
          <li 
            key={idx} 
            style={{ 
              display: 'flex', 
              gap: '1.5rem', 
              marginBottom: '1rem',
              fontSize: '0.95rem'
            }}
          >
            <span style={{ 
              color: 'var(--text-muted)', 
              fontWeight: 500,
              minWidth: '80px'
            }}>
              {item.date}
            </span>
            <span style={{ color: 'var(--text-secondary)' }}>
              {parseMarkdownLinks(item.text)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default News;
