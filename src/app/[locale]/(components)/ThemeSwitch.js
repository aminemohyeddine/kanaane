'use client';
import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitch = ({ isMobile }) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) <div className="w-10 h-10"></div>;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className={`${
        isMobile ? 'absolute bottom-4 right-2' : 'relative top-[-5px]'
      } w-10 h-10 flex items-center justify-center transition-transform duration-500 cursor-pointer`}
    >
      <Sun
        className={`
          absolute transition-all duration-500 ease-in-out
          w-6 h-6
          ${
            resolvedTheme === 'dark'
              ? 'opacity-0 scale-75 rotate-45'
              : 'opacity-100 scale-100 rotate-0'
          }
          text-yellow-400
        `}
      />

      <Moon
        className={`
          absolute transition-all duration-500 ease-in-out
          w-6 h-6
          ${
            resolvedTheme === 'dark'
              ? 'opacity-100 scale-100 rotate-0'
              : 'opacity-0 scale-75 -rotate-45'
          }
          text-blue-300
        `}
      />
    </button>
  );
};

export default ThemeSwitch;
