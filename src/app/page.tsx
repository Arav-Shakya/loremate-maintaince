

'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.body.style.setProperty('--x', `${e.clientX}px`);
      document.body.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      flexDirection: 'column'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>We Are Under Maintenance</h1>
            <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>We&apos;ll be back soon. Thanks for your patience!</p>
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
        <a
          href="https://www.reddit.com/r/LoreMateAI/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'transparent',
            border: '1px solid white',
            color: 'white',
            padding: '0.5rem 1rem',
            textDecoration: 'none',
            borderRadius: '5px',
            transition: 'background 0.3s ease'
          }}
          onMouseOver={e => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
          onMouseOut={e => (e.currentTarget.style.background = 'transparent')}
        >
          REDDIT
        </a>
        <a
          href="https://discord.gg/loremateai"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'transparent',
            border: '1px solid white',
            color: 'white',
            padding: '0.5rem 1rem',
            textDecoration: 'none',
            borderRadius: '5px',
            transition: 'background 0.3s ease'
          }}
          onMouseOver={e => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
          onMouseOut={e => (e.currentTarget.style.background = 'transparent')}
        >
          DISCORD
        </a>
      </div>
    </main>
  );
}
