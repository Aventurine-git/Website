import React, { useState } from 'react';

export function SocialLink({ href = '#', label, icon, target = '_blank' }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 20px',
        borderRadius: 'var(--radius-pill)',
        fontSize: 'var(--text-sm)',
        fontWeight: 500,
        fontFamily: 'var(--font-body)',
        color: 'var(--text-primary)',
        textDecoration: 'none',
        background: 'linear-gradient(var(--surface-card), var(--surface-card)) padding-box, var(--gradient-opal) border-box',
        border: '1.5px solid transparent',
        transform: hover ? 'translateY(-2px)' : 'none',
        boxShadow: hover ? '0 6px 30px rgba(159,150,184,0.4)' : 'none',
        transition: 'transform 180ms cubic-bezier(0.34,1.2,0.64,1), box-shadow 180ms cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      <span style={{ width: 18, height: 18, display: 'inline-flex', flexShrink: 0 }}>{icon}</span>
      {label}
    </a>
  );
}
