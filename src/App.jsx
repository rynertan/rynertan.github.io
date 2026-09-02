import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import { portfolioData } from './data/portfolio';

function App() {
  return (
    <div className="container" style={{ position: 'relative' }}>
      <ThemeToggle />

      <Navigation />

      <Home />

      <footer style={{
        marginTop: '5rem',
        paddingTop: '2rem',
        paddingBottom: '6rem',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.4rem',
        color: 'var(--text-muted)',
        fontSize: '0.85rem',
        fontFamily: 'var(--font-mono)'
      }}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} {portfolioData.name}</p>
        {portfolioData.lastUpdated && (
          <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.85 }}>Last updated: {portfolioData.lastUpdated}</p>
        )}
      </footer>
    </div>
  );
}

export default App;
