import React from 'react';

export function SectionHeading({ children, level = 2, italic = false }) {
  const Tag = 'h' + level;
  return React.createElement(Tag, {
    style: {
      fontFamily: italic ? 'var(--font-serif)' : 'var(--font-display)',
      fontStyle: italic ? 'italic' : 'normal',
      fontWeight: italic ? 400 : 700,
      color: 'var(--text-primary)',
      fontSize: 'var(--text-2xl)',
      lineHeight: 'var(--leading-snug)',
      margin: 0,
    },
  }, children);
}
