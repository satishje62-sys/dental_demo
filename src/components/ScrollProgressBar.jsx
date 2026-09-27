import React, { useState, useEffect } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const currentProgress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[3.5px] z-[120] pointer-events-none bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-teal-400 via-sky-500 to-blue-600 transition-all duration-100 ease-out relative"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Glow bead at the leading edge */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-sky-300 dark:bg-white rounded-full shadow-[0_0_12px_3px_rgba(56,189,248,0.9)] opacity-90 transition-opacity"
          style={{ display: scrollProgress > 0.5 ? 'block' : 'none' }}
        />
      </div>
    </div>
  );
}
