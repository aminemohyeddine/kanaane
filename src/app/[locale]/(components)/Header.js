'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import ThemeSwitch from './ThemeSwitch';
import './header.scss';
import LanguagePicker from './LanguagePicker';

const Header = () => {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('header');
  const isArabic = locale === 'ar';

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 639) {
        setIsOpen(false);
      }
    };

    // Call once on mount to handle initial width
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeOverlay = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="w-full h-20 z-[100000] flex justify-between items-center bg-white dark:bg-[#111827] text-white uppercase md:px-10 px-5">
        <Link
          href={'/'}
          className={`text-[15px] lg:text-[22px] font-abchanel tracking-wide  text-black dark:text-white cursor-pointer`}
        >
          {t('title')}
        </Link>

        <div className="hidden sm:flex relative">
          {['accueil', 'nos-services', 'contact', 'location'].map(
            (item, key) => (
              <Link
                key={key}
                href={`/${locale}/${item !== 'accueil' ? item : ''}`}
                className={`
              ${isArabic ? 'text-[16px]' : 'text-[12px]'}
              font-abchanel ml-5  font-semibold tracking-wide px-1 py-0.5
              text-black dark:text-white
              transition-all duration-300 ease-in-out
              hover:-translate-y-1
              shadow-[inset_0_-10px_0px_rgba(0,0,0,0.05)]
              dark:shadow-[inset_0_-10px_0px_rgba(255,255,255,0.1)]
              hover:shadow-[inset_0_-34px_0px_rgba(0,0,0,0.2)]
              dark:hover:shadow-[inset_0_-34px_0px_rgba(255,255,255,0.2)]
            `}
              >
                {t(item)}
              </Link>
            ),
          )}
          <LanguagePicker isArabic={isArabic} isMobile={false} />
          <ThemeSwitch isMobile={false} />
        </div>

        <button onClick={() => setIsOpen(true)} className="block sm:hidden">
          <svg
            className="h-9 w-9 cursor-pointer text-[#9197AE] dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor">
              <circle cx="4" cy="12" r="1"></circle>
              <rect x="7" y="11" width="14" height="2" rx=".94" ry=".94"></rect>
              <rect x="3" y="16" width="18" height="2" rx=".94" ry=".94"></rect>
              <rect x="3" y="6" width="18" height="2" rx=".94" ry=".94"></rect>
            </g>
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-80 bg-opacity-50 z-[100000]"
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-[#01021c] z-[100000] transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-5 bg-white text-black shadow-md dark:bg-gray-900 dark:text-white">
          <span className="font-bold text-lg font-abchanel">{t('menu')}</span>

          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl cursor-pointer text-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
              className="dark:stroke-white dark:fill-white"
            >
              <path d="M 40.783203 7.2714844 A 2.0002 2.0002 0 0 0 39.386719 7.8867188 L 25.050781 22.222656 L 10.714844 7.8867188 A 2.0002 2.0002 0 0 0 9.2792969 7.2792969 A 2.0002 2.0002 0 0 0 7.8867188 10.714844 L 22.222656 25.050781 L 7.8867188 39.386719 A 2.0002 2.0002 0 1 0 10.714844 42.214844 L 25.050781 27.878906 L 39.386719 42.214844 A 2.0002 2.0002 0 1 0 42.214844 39.386719 L 27.878906 25.050781 L 42.214844 10.714844 A 2.0002 2.0002 0 0 0 40.783203 7.2714844 z"></path>
            </svg>
          </button>
        </div>
        <div className="p-5">
          <Link
            href={`/${locale}/`}
            className="font-bold text-lg font-abchanel pb-3 block"
            onClick={() => setIsOpen(false)}
          >
            {t('accueil')}
          </Link>
          <Link
            href={`/${locale}/nos-services`}
            className="font-bold text-lg font-abchanel pb-3 block"
            onClick={() => setIsOpen(false)}
          >
            {t('nos-services')}
          </Link>
          <Link
            href={`/${locale}/location`}
            className="font-bold text-lg font-abchanel pb-3 block"
            onClick={() => setIsOpen(false)}
          >
            {t('location')}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="font-bold text-lg font-abchanel pb-3 block"
            onClick={() => setIsOpen(false)}
          >
            {t('contact')}
          </Link>
        </div>

        <LanguagePicker isArabic={isArabic} isMobile={true} />
        <ThemeSwitch isMobile={true} />
      </div>
    </>
  );
};

export default Header;
