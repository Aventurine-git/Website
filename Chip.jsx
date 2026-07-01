import React from 'react';

export function Chip({ children, dotColor = 'var(--av-green)' }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 20px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      background: 'linear-gradient(var(--surface-card), var(--surface-card)) padding-box, var(--gradient-opal) border-box',
      border: '1.5px solid transparent',
      boxShadow: 'var(--shadow-sm)',
    }}>
      <span style={{ width: 10, height: 10, borderRadius: '50%', background: dotColor, flexShrink: 0 }} />
      {children}
    </span>
  );
}
