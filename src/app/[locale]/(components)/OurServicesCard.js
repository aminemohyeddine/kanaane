'use client';
import React, { useState } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import ImageTitleDescCard from './imageTitleDescCard';

export default function ServicesCards({ cards }) {
  // We'll keep track for each card if it was visible at least once
  const [visibleOnce, setVisibleOnce] = useState(() =>
    new Array(cards.length).fill(false),
  );

  return (
    <div className="flex flex-wrap items-stretch gap-10 mt-5 px-3 md:px-8 mb-12 justify-center">
      {cards.map((card, idx) => {
        const [ref, isVisible] = useOnScreen({ threshold: 0.05 });

        // If it’s visible now, mark as visible once
        if (isVisible && !visibleOnce[idx]) {
          // Update state only if changed to avoid infinite loops
          setVisibleOnce((prev) => {
            const copy = [...prev];
            copy[idx] = true;
            return copy;
          });
        }

        const shouldShow = visibleOnce[idx] || isVisible;

        return (
          <div
            key={idx}
            className={`max-w-80 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transition-opacity duration-700 ${
              shouldShow ? 'opacity-100' : 'opacity-0'
            } `}
          >
            <ImageTitleDescCard
              isAlwaysVisible={true}
              shouldShow={shouldShow}
              ref={ref}
              key={idx + card.title}
              card={card}
            />
          </div>
        );
      })}
    </div>
  );
}
