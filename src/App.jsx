import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeToggle from './components/ThemeToggle';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import PublicationsPage from './pages/PublicationsPage';
import { portfolioData } from './data/portfolio';

function App() {
  return (
    <Router>
      <div className="container" style={{ position: 'relative' }}>
        <ThemeToggle />

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<PublicationsPage />} />
        </Routes>

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
    </Router>
  );
}

export default App;
