import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGooglescholar } from 'react-icons/si';
import ScrambledEmail from './ScrambledEmail';

const Header = ({ name, links }) => {
  const emailLink = links.find(l => l.name.toLowerCase().includes('email'));
  const rawEmail = emailLink ? emailLink.url.replace('mailto:', '') : '';

  return (
    <header className="animate-fade-in stagger-1" style={{ marginBottom: '2.5rem' }}>
      <h1 style={{ fontSize: '1.85rem', fontWeight: 600, margin: '0 0 0.25rem 0', letterSpacing: '0' }}>
        {name}
      </h1>

      {rawEmail && <ScrambledEmail key={rawEmail} email={rawEmail} />}

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', fontSize: '0.95rem' }}>
        {links.filter(l => !l.name.toLowerCase().includes('email')).map((link, idx, arr) => {
          let shortName = link.name.toLowerCase();
          if (shortName.includes('scholar')) shortName = 'scholar';
          if (shortName.includes('twitter') || shortName.includes('x')) shortName = 'x';

          return (
            <React.Fragment key={idx}>
              <a
                href={link.url}
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
                {shortName}
              </a>
              {idx < arr.length - 1 && (
                <span style={{ color: 'var(--border)', userSelect: 'none' }}>/</span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
