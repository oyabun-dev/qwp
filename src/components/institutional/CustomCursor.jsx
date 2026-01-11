import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);
    
    // Add hover listeners to all clickable elements
    const clickables = document.querySelectorAll('a, button, .cursor-pointer');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clickables.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
        {/* Main Dot */}
        <motion.div
            className="fixed top-0 left-0 w-3 h-3 rounded-full bg-[var(--text-primary)] pointer-events-none z-[9999] hidden md:block"
            animate={{
                x: mousePosition.x - 6,
                y: mousePosition.y - 6,
                scale: isHovering ? 0.5 : 1
            }}
            transition={{ type: "spring", mass: 0.1 }}
        />
        
        {/* Outer Ring */}
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[var(--text-accent)] pointer-events-none z-[9998] hidden md:block"
            animate={{
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
                scale: isHovering ? 1.5 : 1,
                borderColor: isHovering ? 'var(--text-accent)' : 'rgba(0,0,0,0.1)'
            }}
            transition={{ type: "spring", mass: 0.2, stiffness: 100, damping: 15 }}
        />
    </>
  );
};

export default CustomCursor;
