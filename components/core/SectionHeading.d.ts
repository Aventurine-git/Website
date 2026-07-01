import React from 'react';
export interface SectionHeadingProps {
  children: React.ReactNode;
  /** Heading level 1-6, controls semantic tag only (size is fixed at text-2xl). */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Use the italic serif accent face instead of the bold display face. */
  italic?: boolean;
}
