import React from 'react';
export interface EyebrowProps {
  children: React.ReactNode;
  /** CSS color value (or var(--av-*-deep) token). Defaults to deep magenta. */
  color?: string;
}
