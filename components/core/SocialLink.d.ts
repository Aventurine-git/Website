import React from 'react';
export interface SocialLinkProps {
  href?: string;
  /** Platform name shown as the label. */
  label: string;
  /** An inline SVG icon element (18x18). */
  icon?: React.ReactNode;
  target?: string;
}
