import React from 'react';
export interface CardProps {
  children: React.ReactNode;
  /** Inline padding value or spacing token, e.g. "var(--space-6)". */
  padding?: string;
  elevation?: 'sm' | 'md' | 'lg';
}
