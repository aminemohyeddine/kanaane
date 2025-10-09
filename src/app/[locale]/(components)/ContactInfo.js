'use client';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';
const Map = dynamic(() => import('../(components)/Map'), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

const ContactInfo = () => {
  const t = useTranslations('locationPage');

  return (
    <div className="w-full rounded-xl p-6 dark:text-gray-100 space-y-4 bg-transparent">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 dark:text-white max-w-lg text-center">
          {t('contactAndLocation')}
        </h2>

        <div className="w-fit flex mb-5 items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="20"
            height="20"
            viewBox="0 0 256 256"
            className="stroke-none fill-none opacity-100"
          >
            <g transform="translate(1.4 1.4) scale(2.81 2.81)">
              <line
                x1="0"
                y1="-23.9635"
                x2="0"
                y2="23.9635"
                stroke="none"
                strokeWidth={1}
                fill="rgb(0,0,0)"
                opacity={1}
              />
              <path
                d="M 45 90 c -0.558 0 -1.011 -0.452 -1.011 -1.011 V 41.062 c 0 -0.558 0.453 -1.011 1.011 -1.011 s 1.011 0.453 1.011 1.011 v 47.927 C 46.011 89.548 45.558 90 45 90 z"
                fill="rgb(102,103,107)"
                opacity={1}
              />
              <circle
                cx="45.001"
                cy="20.531"
                r="20.531"
                fill="rgb(242,63,56)"
                opacity={1}
              />
              <circle
                cx="52.076"
                cy="13.456"
                r="5.056"
                fill="rgb(255,158,154)"
                opacity={1}
              />
            </g>
          </svg>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={
              'https://www.google.com/maps/place/Cl%C3%A8s+kanaane/@33.5677653,-7.5560074,40m/data=!3m1!1e3!4m6!3m5!1s0xda7cd006f791bc1:0xb360329585592f8f!8m2!3d33.5677686!4d-7.5559371!16s%2Fg%2F11wqcww8yg?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D'
            }
          >
            <p className="text-blue-600 hover:underline hover:text-blue-800 transition font-abchanel cursor-pointer">
              {t('location')}
            </p>
          </Link>
        </div>

        <div className="w-full mb-7">
          <Map />
        </div>

        <Link
          href="mailto:kanaaneauto@gmail.com"
          className="flex items-center text-blue-600 hover:underline hover:text-blue-800 transition mb-3 cursor-pointer"
        >
          <svg
            className="mr-3"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="20"
            height="20"
            viewBox="0 0 256 256"
          >
            <g transform="translate(1.4 1.4) scale(2.81 2.81)">
              <path
                d="M 6.136 78.759 h 14.318 V 43.986 L 0 28.645 v 43.977 C 0 76.018 2.751 78.759 6.136 78.759"
                fill="rgb(66,133,244)"
              />
              <path
                d="M 69.545 78.759 h 14.318 c 3.395 0 6.136 -2.751 6.136 -6.136 V 28.645 L 69.545 43.986"
                fill="rgb(52,168,83)"
              />
              <path
                d="M 69.545 17.395 v 26.591 L 90 28.645 v -8.182 c 0 -7.589 -8.662 -11.915 -14.727 -7.364"
                fill="rgb(251,188,4)"
              />
              <path
                d="M 20.455 43.986 V 17.395 L 45 35.804 l 24.545 -18.409 v 26.591 L 45 62.395"
                fill="rgb(234,67,53)"
              />
              <path
                d="M 0 20.463 v 8.182 l 20.455 15.341 V 17.395 L 14.727 13.1 C 8.652 8.548 0 12.875 0 20.463"
                fill="rgb(197,34,31)"
              />
            </g>
          </svg>
          <p className="font-abchanel cursor-pointer">
            kanaaneauto@gmail.com
          </p>
        </Link>

        <Link
          href="tel:+212612345678"
          className="flex items-center gap-3 text-blue-600 hover:underline hover:text-blue-800 transition cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="20"
            height="20"
            viewBox="0 0 256 256"
          >
            <g transform="translate(1.4 1.4) scale(2.81 2.81)">
              <path
                d="M 45.001 20.968 h 12.027 c 1.332 0 2.515 0.85 2.94 2.113 l 3.223 9.579 c 0.333 0.991 1.144 1.748 2.156 2.012 L 81.76 38.96 c 1.511 0.395 3.08 -0.396 3.663 -1.845 l 4.069 -10.131 c 0.48 -1.195 0.642 -2.506 0.394 -3.77 c -4.718 -24.049 -85.051 -24.049 -89.77 0 c -0.248 1.264 -0.086 2.575 0.394 3.77 l 4.069 10.131 c 0.582 1.45 2.151 2.24 3.663 1.845 l 16.413 -4.289 c 1.012 -0.264 1.822 -1.021 2.156 -2.012 l 3.223 -9.579 c 0.425 -1.262 1.608 -2.113 2.94 -2.113 h 12.027 H 45.001 z"
                fill="rgb(214,0,0)"
                strokeLinecap="round"
              />
              <path
                d="M 45.141 84.823 H 81.5 c 3.508 0 6.172 -3.156 5.585 -6.614 l -4.607 -27.103 c -0.487 -2.866 -2.588 -5.191 -5.391 -5.965 L 58.09 39.895 c -0.836 -0.218 -1.506 -0.843 -1.781 -1.663 l -2.663 -7.915 c -0.351 -1.043 -1.329 -1.746 -2.429 -1.746 h -6.075 h -0.001 h -6.075 c -1.101 0 -2.078 0.703 -2.429 1.746 l -2.663 7.915 c -0.276 0.819 -0.945 1.444 -1.781 1.663 l -18.996 5.246 c -2.802 0.774 -4.903 3.099 -5.391 5.965 L 3.199 78.209 c -0.588 3.458 2.077 6.614 5.585 6.614 H 45.141 z"
                fill="rgb(214,0,0)"
                strokeLinecap="round"
              />
              <path
                d="M 45 80.635 c -10.827 0 -19.635 -8.808 -19.635 -19.635 S 34.173 41.365 45 41.365 S 64.635 50.173 64.635 61 S 55.827 80.635 45 80.635 z M 45 45.551 c -8.519 0 -15.449 6.931 -15.449 15.449 c 0 8.519 6.931 15.449 15.449 15.449 c 8.519 0 15.449 -6.93 15.449 -15.449 C 60.449 52.482 53.519 45.551 45 45.551 z"
                fill="rgb(255,255,255)"
                strokeLinecap="round"
              />
              <circle
                cx="55.863"
                cy="61.003"
                r="2.093"
                fill="rgb(255,255,255)"
              />
              <circle
                cx="34.133"
                cy="61.003"
                r="2.093"
                fill="rgb(255,255,255)"
              />
              <circle
                cx="45.003"
                cy="50.133"
                r="2.093"
                fill="rgb(255,255,255)"
              />
              <circle
                cx="45.003"
                cy="71.863"
                r="2.093"
                fill="rgb(255,255,255)"
              />
              <circle
                cx="52.683"
                cy="53.313"
                r="2.093"
                fill="rgb(255,255,255)"
              />
              <circle
                cx="37.313"
                cy="68.683"
                r="2.093"
                fill="rgb(255,255,255)"
              />
              <circle
                cx="37.313"
                cy="53.313"
                r="2.093"
                fill="rgb(255,255,255)"
              />
              <circle
                cx="52.683"
                cy="68.683"
                r="2.093"
                fill="rgb(255,255,255)"
              />
              <circle
                cx="45.004"
                cy="61.004"
                r="4.944"
                fill="rgb(255,255,255)"
              />
            </g>
          </svg>
          <p className="font-abchanel">+212 6 12 34 56 78</p>
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
