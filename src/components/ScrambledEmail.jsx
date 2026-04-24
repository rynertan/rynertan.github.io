import React, { useState } from 'react';

const ScrambledEmail = ({ email }) => {
  const [items, setItems] = useState(() => {
    const chars = email.split('').map((char, index) => ({ char, targetIndex: index }));

    for (let i = chars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    return chars;
  });
  const [status, setStatus] = useState('scrambled');

  const handleSort = async () => {
    if (status !== 'scrambled') return;
    setStatus('sorting');

    let currentItems = [...items];
    const delay = (ms) => new Promise(res => setTimeout(res, ms));

    let n = currentItems.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (currentItems[i].targetIndex > currentItems[i + 1].targetIndex) {
          let temp = currentItems[i];
          currentItems[i] = currentItems[i + 1];
          currentItems[i + 1] = temp;
          swapped = true;

          setItems([...currentItems]);
          await delay(15);
        }
      }
      n--;
    } while (swapped);

    setStatus('done');
  };

  return (
    <div
      onClick={handleSort}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.9rem',
        color: status === 'done' ? 'var(--text-primary)' : 'var(--text-muted)',
        cursor: status === 'scrambled' ? 'pointer' : 'text',
        userSelect: 'text',
        display: 'inline-flex',
        flexWrap: 'wrap',
        marginBottom: '1.5rem',
        transition: 'color 0.3s ease',
      }}
      title={status === 'scrambled' ? "Click to reveal email" : ""}
    >
      {items.map((item) => (
        <span key={item.targetIndex}>
          {item.char}
        </span>
      ))}
    </div>
  );
};

export default ScrambledEmail;
