import React from 'react';

const Section = ({ 
  children, 
  className = '', 
  id = '',
  width = 'wide' // 'wide' | 'narrow' | 'full'
}) => {
  const maxWidths = {
    wide: "max-w-[1440px]",
    narrow: "max-w-[1024px]",
    full: "max-w-full"
  };

  return (
    <section id={id} className={`py-[var(--space-section)] ${className}`}>
      <div className={`${maxWidths[width]} mx-auto px-6 md:px-10`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
