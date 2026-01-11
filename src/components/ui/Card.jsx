import React from 'react';

const Card = ({ 
  children, 
  variant = 'white', 
  className = '',
  padding = 'md'
}) => {
  const baseStyles = "rounded-[var(--radius-card)] overflow-hidden transition-all duration-500 hover:shadow-xl";
  
  const variants = {
    white: "bg-[var(--bg-core)] border border-[var(--border-light)] text-[var(--text-primary)]",
    black: "bg-[var(--bg-inverse)] text-[var(--text-inverse)]",
    glass: "bg-[var(--bg-glass)] backdrop-blur-md border border-white/20 text-[var(--text-primary)]"
  };

  const paddings = {
    none: "",
    sm: "p-6",
    md: "p-8",
    lg: "p-12"
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
