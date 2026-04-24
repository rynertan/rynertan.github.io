import React from 'react';
import Publications from '../components/Publications';
import { portfolioData } from '../data/portfolio';

const PublicationsPage = () => {
  return (
    <div className="animate-fade-in stagger-2">
      <h1 style={{ 
        fontSize: '2rem', 
        fontWeight: 700, 
        marginBottom: '2rem',
        letterSpacing: '-0.03em' 
      }}>
        Research Publications
      </h1>
      <main>
        <Publications items={portfolioData.publications} />
      </main>
    </div>
  );
};

export default PublicationsPage;
