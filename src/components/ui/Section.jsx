import React from 'react';

const Section = ({ children, className = '', id = '' }) => {
  return (
    <section id={id} className={`w-full py-20 px-6 md:px-12 lg:px-24 mx-auto max-w-screen-2xl ${className}`}>
      {children}
    </section>
  );
};

export default Section;
