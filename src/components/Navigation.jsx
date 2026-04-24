import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
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
      <NavLink 
        to="/" 
        end
        style={({ isActive }) => ({
          textDecoration: 'none',
          color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
          fontWeight: isActive ? 600 : 400,
          textTransform: 'lowercase',
          letterSpacing: '0.02em',
          fontSize: '0.95rem',
          transition: 'color 0.2s ease'
        })}
      >
        home
      </NavLink>
      <NavLink 
        to="/publications" 
        style={({ isActive }) => ({
          textDecoration: 'none',
          color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
          fontWeight: isActive ? 600 : 400,
          textTransform: 'lowercase',
          letterSpacing: '0.02em',
          fontSize: '0.95rem',
          transition: 'color 0.2s ease'
        })}
      >
        publications
      </NavLink>
    </nav>
  );
};

export default Navigation;
