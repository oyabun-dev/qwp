import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (assets, fonts)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
            key="preloader"
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="flex flex-col items-center gap-6"
            >
                <img 
                    src="/assets/uploaded_image_1768079097049.jpg" 
                    alt="Quraysh Logo" 
                    className="w-32 md:w-48 object-contain"
                />
                
                <div className="overflow-hidden">
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                         <p className="text-[var(--text-primary)] text-xs uppercase tracking-[0.3em] font-light">Holding</p>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
