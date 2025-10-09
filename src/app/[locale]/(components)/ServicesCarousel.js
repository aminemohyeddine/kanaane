'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './servicesCarousel.scss';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function ServicesCarousel() {
  const [isMobile, setIsMobile] = useState(false);
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < breakpoint);
  };
  const breakpoint = 768;
  useEffect(() => {
    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, [breakpoint]);

  const t = useTranslations('HomePage');

  const services = [
    {
      key: 'electronicAuto',
      color: 'text-teal-600 dark:text-teal-400',
      title: t('services.electronicAuto.title'),
      desc: t('services.electronicAuto.desc'),
      imageUrl: '/images/electro.webp',
    },
    {
      key: 'bcmBci',
      color: 'text-yellow-800 dark:text-yellow-600',
      title: t('services.bcmBci.title'),
      desc: t('services.bcmBci.desc'),
      imageUrl: '/images/bcmbci.jpg',
    },
    {
      key: 'fap',
      color: 'text-indigo-600 dark:text-indigo-400',
      title: t('services.fap.title'),
      desc: t('services.fap.desc'),
      imageUrl: '/images/fap.png',
    },
    {
      key: 'adblue',
      color: 'text-cyan-600 dark:text-cyan-400',
      title: t('services.adblue.title'),
      desc: t('services.adblue.desc'),
      imageUrl: '/images/adblue.jpg',
    },
    {
      key: 'calculateurAuto',
      color: 'text-blue-800 dark:text-blue-600',
      title: t('services.calculateurAuto.title'),
      desc: t('services.calculateurAuto.desc'),
      imageUrl: '/images/calculateurauto.jpg',
    },
    {
      key: 'vents',
      color: 'text-lime-600 dark:text-lime-400',
      title: t('services.vents.title'),
      desc: t('services.vents.desc'),
      imageUrl: '/images/aer.webp',
    },
    {
      key: 'boitierElectroniqueOccasion',
      color: 'text-rose-600 dark:text-rose-400',
      title: t('services.boitierElectroniqueOccasion.title'),
      desc: t('services.boitierElectroniqueOccasion.desc'),
      imageUrl: '/images/boitier.jpg',
    },
    {
      key: 'ech',
      color: 'text-green-800 dark:text-green-600',
      title: t('services.ech.title'),
      desc: t('services.ech.desc'),
      imageUrl: '/images/gaz-ech.jpg',
    },
    {
      key: 'crashAirbag',
      color: 'text-orange-600 dark:text-orange-400',
      title: t('services.crashAirbag.title'),
      desc: t('services.crashAirbag.desc'),
      imageUrl: '/images/airbag.jpg',
    },

    {
      key: 'centraliseVoiture',
      color: 'text-fuchsia-600 dark:text-fuchsia-400',
      title: t('services.centraliseVoiture.title'),
      desc: t('services.centraliseVoiture.desc'),
      imageUrl: '/images/centralise.jpg',
    },

    {
      key: 'carplay',
      color: 'text-purple-600 dark:text-purple-400',
      title: t('services.carplay.title'),
      desc: t('services.carplay.desc'),
      imageUrl: '/images/carplay.avif',
    },

    {
      key: 'camera',
      color: 'text-yellow-600 dark:text-yellow-400',
      title: t('services.camera.title'),
      desc: t('services.camera.desc'),
      imageUrl: '/images/camera-surveillance-voiture.jpg',
    },
  ];

  const [swiperRef, setSwiperRef] = useState(null);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`),
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  return (
    <div className="relative isolate overflow-hidden rounded-2xl shadow-xl p-5 md:p-32 text-gray-800 dark:text-gray-200">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100 via-white to-green-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 opacity-80 backdrop-blur-md rounded-2xl" />

      <h2 className="text-3xl font-bold mb-14 text-center text-gray-900 dark:text-white font-abchanel">
        {t('servicesTitle')}
      </h2>

      <h3 className="mb-4 text-lg font-abchanel text-center">
        {t('servicesIntro')}
      </h3>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={isMobile ? 1 : 3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        virtual
      >
        {services.map((serviceSlide, index) => (
          <SwiperSlide key={serviceSlide.key} virtualIndex={index}>
            <div
              style={{
                backgroundImage: `url(${serviceSlide.imageUrl})`,
                backgroundPosition: '',
              }}
              className={`h-full w-full flex content-end flex-col justify-end text-white bg-cover`}
            >
              <div className="bg-black/60 min-h-20 flex items-center justify-center py-2">
                <h2 className={`block font-abchanel text-[22px] md:text-2xl`}>
                  {serviceSlide.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-8 text-center mb-10">
        <Link
          href="nos-services"
          className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          {t('buttonText')}
        </Link>
      </div>
    </div>
  );
}
