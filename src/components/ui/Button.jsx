import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-lg";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-100",
    brand: "bg-[#DFB275] text-white hover:bg-[#cfa56d]",
    outline: "border border-white/20 text-white hover:bg-white/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
