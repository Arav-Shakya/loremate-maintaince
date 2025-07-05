'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

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
      {/* Dropper Card */}
      <DropperCard />
    </main>
  );
}

function DropperCard() {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState('/grass.png');
  const images = ['/grass.png', '/job.png', '/world.png', '/dance.png', '/bruh.png', '/aura.png', '/freedom.png'];

  const handleToggle = () => {
    if (!open) {
      // Pick a random image when opening
      const random = images[Math.floor(Math.random() * images.length)];
      setImg(random);
    }
    setOpen(v => !v);
  };

  return (
    <div style={{
      margin: '2rem auto 0',
      width: 'fit-content',
      minWidth: 340,
      maxWidth: 420,
      background: 'rgba(30,30,30,0.95)',
      border: '1px solid #444',
      borderRadius: 12,
      boxShadow: '0 4px 24px 0 rgba(0,0,0,0.25)',
      transition: 'box-shadow 0.2s',
      color: 'white',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 1.5rem',
        cursor: 'pointer',
        fontWeight: 500,
        fontSize: '1.1rem',
        letterSpacing: 0.1,
        userSelect: 'none',
      }}
        onClick={handleToggle}
      >
        <span>Loremate is down what should I DO?</span>
        <span style={{
          display: 'flex',
          alignItems: 'center',
          transition: 'transform 0.3s',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        }}>
          {/* Chevron Down SVG */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      <div style={{
        maxHeight: open ? 220 : 0,
        transition: 'max-height 0.4s cubic-bezier(.4,2,.6,1)',
        overflow: 'hidden',
        background: 'rgba(40,40,40,0.98)',
        borderTop: open ? '1px solid #333' : 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {open && (
          <div style={{ padding: '1.2rem 0' }}>
            <Image src={img} alt="Random" width={320} height={120} style={{ borderRadius: 8, boxShadow: '0 2px 12px 0 rgba(0,0,0,0.18)' }} />
          </div>
        )}
      </div>
    </div>
  );
}
