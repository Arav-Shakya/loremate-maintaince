

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
    </main>
  );
}
