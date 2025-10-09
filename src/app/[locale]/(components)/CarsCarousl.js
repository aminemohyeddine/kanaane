'use client';

import Image from 'next/image';
import React from 'react';
import { useLocale } from 'next-intl';

const brands = [
  { src: '/icons/Audi-Logo.wine.svg', alt: 'Audi logo' },
  { src: '/icons/BMW-Logo.wine.svg', alt: 'BMW logo' },
  { src: '/icons/Citroen-Logo.wine.svg', alt: 'Citroen logo' },
  { src: '/icons/dacia-2021-logo.svg', alt: 'dacia logo' },
  { src: '/icons/Fiat_Automobiles-Logo.wine.svg', alt: 'Fiat logo' },
  { src: '/icons/Ford_of_Britain-Logo.wine.svg', alt: 'Ford logo' },
  { src: '/icons/Jeep-Logo.wine.svg', alt: 'Jeep logo' },
  { src: '/icons/Kia_Motors-Logo.wine.svg', alt: 'Kia logo' },
  {
    src: '/icons/Mercedes-Benz_U.S._International-Logo.wine.svg',
    alt: 'Mercedes logo',
  },
  { src: '/icons/Mini_(marque)-Logo.wine.svg', alt: 'Mini logo' },
  {
    src: '/icons/Nissan_Motor_India_Private_Limited-Logo.wine.svg',
    alt: 'Nissan logo',
  },
  { src: '/icons/Opel-Logo.wine.svg', alt: 'Opel logo' },
  { src: '/icons/peugeot-10.svg', alt: 'peugeot logo' },
  { src: '/icons/renault-7.svg', alt: 'renault logo' },
  { src: '/icons/Rolls-Royce_Motor_Cars-Logo.wine.svg', alt: 'Rolls logo' },
  {
    src: '/icons/Suzuki_Motorcycle_India_Limited-Logo.wine.svg',
    alt: 'Suzuki logo',
  },
  { src: '/icons/volkswagen-10.svg', alt: 'volkswagen logo' },
];

export default function CarBrandCarousel() {
  const locale = useLocale();
  const allBrands = [...brands, ...brands, ...brands];
  const translateXTarget = locale === 'fr' ? '-50%' : '50%';

  return (
    <div className="overflow-hidden w-full py-4 pt-5 pb-5 bg-white">
      <div className="flex gap-[3rem] w-max animate-scroll">
        {allBrands.map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-32 h-20 flex items-center justify-center"
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              width={100}
              height={50}
              className="object-contain transition duration-300 !h-full"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(${translateXTarget});
          }
        }
      `}</style>
    </div>
  );
}
