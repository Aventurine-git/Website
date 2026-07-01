import React from 'react';

export function Eyebrow({ children, color = 'var(--av-magenta-deep)' }) {
  return (
    <div style={{
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      fontWeight: 600,
      fontFamily: 'var(--font-body)',
      color,
    }}>
      {children}
    </div>
  );
}
