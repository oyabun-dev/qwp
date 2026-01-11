import React from 'react';
import { ArrowRight } from 'lucide-react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon = true,
  onClick 
}) => {
  const baseStyles = "inline-flex items-center gap-2 rounded-full font-medium transition-all duration-300 cursor-pointer active:scale-95";
  
  const variants = {
    primary: "bg-[var(--bg-inverse)] text-[var(--text-inverse)] hover:opacity-90",
    brand: "bg-[var(--color-brand)] text-white hover:bg-gray-800 hover:text-white", 
    secondary: "bg-[var(--bg-core)] text-[var(--text-primary)] border border-[var(--border-medium)] hover:bg-[var(--bg-subtle)] hover:border-[var(--text-primary)]",
    ghost: "bg-transparent text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
      {icon && variant !== 'ghost' && (
        <span className="bg-white/20 rounded-full p-1 ml-1 group-hover:bg-white/30 transition-colors">
            <ArrowRight size={16} strokeWidth={2.5} />
        </span>
      )}
    </button>
  );
};

export default Button;
