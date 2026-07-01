import React from 'react';

const elevations = {
  sm: 'var(--shadow-sm)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)',
};

export function Card({ children, padding = 'var(--space-6)', elevation = 'md' }) {
  return (
    <div style={{
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: elevations[elevation] || elevations.md,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
    }}>
      {children}
    </div>
  );
}
