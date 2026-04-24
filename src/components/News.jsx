import React from 'react';

const News = ({ items }) => {
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
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default News;
