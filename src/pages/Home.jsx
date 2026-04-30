import React from 'react';
import Header from '../components/Header';
import Bio from '../components/Bio';
import News from '../components/News';
import Service from '../components/Service';
import Publications from '../components/Publications';
import { portfolioData } from '../data/portfolio';

const Home = () => {
  return (
    <div id="home" className="animate-fade-in stagger-2">
      <Header 
        name={portfolioData.name}
        title={portfolioData.title}
        affiliations={portfolioData.affiliations}
        links={portfolioData.links}
      />
      <main>
        <Bio text={portfolioData.bio} />
        {portfolioData.news && portfolioData.news.length > 0 && (
          <News items={portfolioData.news} />
        )}
        {portfolioData.services && portfolioData.services.length > 0 && (
          <Service items={portfolioData.services} />
        )}
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '3rem 0 2rem 0' }} />
        <section id="publications">
          <Publications items={portfolioData.publications} />
        </section>
      </main>
    </div>
  );
};

export default Home;
