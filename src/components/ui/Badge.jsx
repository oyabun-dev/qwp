import React from 'react';

const Badge = ({ children, className = '' }) => {
  return (
    <span className={`inline-block px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-md border border-current mb-4 ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
