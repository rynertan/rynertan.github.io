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
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.85rem',
        fontFamily: 'var(--font-mono)'
      }}>
        <p>© {new Date().getFullYear()} {portfolioData.name}</p>
      </footer>
    </div>
  );
}

export default App;
