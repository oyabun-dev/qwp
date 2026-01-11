import React from 'react';

const Badge = ({ children, className = '' }) => {
  return (
    <span className={`
      inline-block 
      text-xs font-semibold tracking-widest uppercase 
      px-3 py-1 
      rounded-full 
      border border-[var(--border-medium)]
      bg-[var(--bg-subtle)] text-[var(--text-secondary)]
      ${className.includes('brand') ? 'border-[var(--color-brand)] text-[var(--color-brand)]' : ''}
      ${className}
    `}>
      {children}
    </span>
  );
};

export default Badge;
