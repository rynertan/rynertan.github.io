import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const pubSection = document.getElementById('publications');
      if (pubSection) {
        const rect = pubSection.getBoundingClientRect();
        const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
        
        if (rect.top <= window.innerHeight / 2 || isAtBottom) {
          setActiveSection('publications');
        } else {
          setActiveSection('home');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const getLinkStyle = (id) => {
    const isActive = activeSection === id;
    return {
      textDecoration: 'none',
      color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
      fontWeight: isActive ? 600 : 400,
      textTransform: 'lowercase',
      letterSpacing: '0.02em',
      fontSize: '0.95rem',
      transition: 'color 0.2s ease',
      cursor: 'pointer'
    };
  };

  return (
    <nav style={{ 
      position: 'fixed',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex', 
      gap: '2rem',
      padding: '0.75rem 1.5rem',
      backgroundColor: 'var(--card-bg)',
      border: '1px solid var(--border)',
      borderRadius: '999px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      zIndex: 100,
      opacity: 0.95,
      transition: 'all 0.3s ease'
    }}>
      <a 
        href="#home"
        onClick={(e) => scrollToSection(e, 'home')}
        style={getLinkStyle('home')}
      >
        home
      </a>
      <a 
        href="#publications"
        onClick={(e) => scrollToSection(e, 'publications')}
        style={getLinkStyle('publications')}
      >
        publications
      </a>
    </nav>
  );
};

export default Navigation;
