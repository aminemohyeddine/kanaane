'use client';
import React, { useEffect, useRef, useState } from 'react';
import { FaCar, FaKey, FaCog } from 'react-icons/fa';

const ICONS = [FaCar, FaKey, FaCog];

export default function IconBackground() {
  const containerRef = useRef(null);
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const generateIcons = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      const area = width * height;

      // Adjust density and apply min/max limits
      const density = 1 / 40000; // Fewer icons
      const minIcons = 5;
      const maxIcons = 100;
      const count = Math.min(
        maxIcons,
        Math.max(minIcons, Math.floor(area * density)),
      );

      const newIcons = Array.from({ length: count }).map((_, i) => {
        const Icon = ICONS[i % ICONS.length];
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const rotation = Math.random() * 360;

        return (
          <Icon
            key={i}
            className="text-2xl md:text-3xl lg:text-4xl absolute opacity-10"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              transform: `rotate(${rotation}deg)`,
              color:
                i % 3 === 0 ? '#3B82F6' : i % 3 === 1 ? '#9CA3AF' : '#A8A29E',
            }}
          />
        );
      });

      setIcons(newIcons);
    };

    generateIcons();

    window.addEventListener('resize', generateIcons);
    return () => window.removeEventListener('resize', generateIcons);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none"
    >
      {icons}
    </div>
  );
}
