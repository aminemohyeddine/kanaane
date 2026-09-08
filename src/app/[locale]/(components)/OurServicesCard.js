'use client';
import React, { useEffect, useState } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import ImageTitleDescCard from './imageTitleDescCard';

// Stable object so the observer effect doesn't re-subscribe on every render.
const OBSERVER_OPTIONS = { threshold: 0.05 };

function ServiceCard({ card }) {
  const [ref, isVisible] = useOnScreen(OBSERVER_OPTIONS);
  // Once a card has been seen it stays visible.
  const [seenOnce, setSeenOnce] = useState(false);

  useEffect(() => {
    if (isVisible && !seenOnce) {
      setSeenOnce(true);
    }
  }, [isVisible, seenOnce]);

  const shouldShow = seenOnce || isVisible;

  return (
    <div
      className={`max-w-80 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transition-opacity duration-700 ${
        shouldShow ? 'opacity-100' : 'opacity-0'
      } `}
    >
      <ImageTitleDescCard
        isAlwaysVisible={true}
        shouldShow={shouldShow}
        ref={ref}
        card={card}
      />
    </div>
  );
}

export default function ServicesCards({ cards }) {
  return (
    <div className="flex flex-wrap items-stretch gap-10 mt-5 px-3 md:px-8 mb-12 justify-center">
      {cards.map((card, idx) => (
        <ServiceCard key={idx + card.title} card={card} />
      ))}
    </div>
  );
}
