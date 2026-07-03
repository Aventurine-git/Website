import React from 'react';

const baseStyle = {
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  fontSize: 'var(--text-sm)',
  borderRadius: 'var(--radius-pill)',
  padding: '12px 26px',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  border: '1.5px solid transparent',
  transition: 'transform 180ms cubic-bezier(0.34,1.2,0.64,1), box-shadow 180ms cubic-bezier(0.4,0,0.2,1)',
};

const variantStyles = {
  primary: {
    background: 'var(--av-green)',
    color: '#1e2e20',
  },
  secondary: {
    background: 'linear-gradient(var(--surface-card), var(--surface-card)) padding-box, var(--gradient-opal) border-box',
    color: 'var(--text-primary)',
    boxShadow: 'var(--shadow-sm)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1.5px solid var(--border-soft)',
  },
};

const sizeStyles = {
  sm: { padding: '8px 18px', fontSize: 'var(--text-xs)' },
  md: {},
  lg: { padding: '16px 32px', fontSize: 'var(--text-md)' },
};

export function Button({ children, variant = 'primary', size = 'md', disabled = false, onClick }) {
  const style = {
    ...baseStyle,
    ...(variantStyles[variant] || variantStyles.primary),
    ...(sizeStyles[size] || {}),
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
  };
  return (
    <button style={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
