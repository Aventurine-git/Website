import React from 'react';
export interface ChipProps {
  children: React.ReactNode;
  /** CSS color value (or var(--av-*) token) for the leading dot. */
  dotColor?: string;
}
