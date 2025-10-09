'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const languages = [
  { code: 'fr', label: 'Français', image: '/images/france.png' },
  { code: 'ar', label: 'العربية', image: '/images/morocco.png' },
];

export default function LanguagePicker({ isMobile, isArabic }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const defaultLang = (() => {
    const firstSegment = pathname.split('/')[1];
    return firstSegment === '' || firstSegment === 'fr' ? 'fr' : firstSegment;
  })();
  const [selected, setSelected] = useState(defaultLang);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lang) => {
    if (pathname.startsWith(`/${lang}`)) {
      setIsOpen(false);
      return;
    }
    const newPath = pathname.replace(/^\/(fr|ar)/, `/${lang}`);
    const finalPath = newPath === pathname ? `/${lang}${pathname}` : newPath;
    router.push(finalPath);
    setSelected(lang);
    setIsOpen(false);
  };

  return (
    <div
      className={`${
        isMobile && !isArabic
          ? 'absolute bottom-5'
          : isMobile && isArabic
          ? 'absolute bottom-5 left-3'
          : 'relative'
      } inline-block`}
    >
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${
          languages.find((l) => l.code === selected)?.label === 'Français'
            ? 'text-[8px]'
            : 'text-[12px]'
        } flex items-center px-4 py-2 border rounded-md shadow-sm bg-white text-sm text-black
                   dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:shadow-md
                   focus:outline-none focus:ring-2 focus:ring-blue-500 font-abchanel text-[8px] ${
                     selected === 'ar' ? 'mr-2.5' : 'ml-2.5'
                   }`}
        aria-expanded={isOpen}
        aria-controls="language-picker-dropdown"
        aria-label={`${selected}, Select your language`}
      >
        <Image
          alt={`${selected} flag`}
          width={15}
          height={15}
          src={languages.find((l) => l.code === selected)?.image}
          className={`${selected === 'ar' ? 'ml-2' : 'mr-2'}`}
        />
        {languages.find((l) => l.code === selected)?.label}
      </button>

      {isOpen && (
        <div
          id="language-picker-dropdown"
          ref={dropdownRef}
          className={`${
            isMobile ? 'top-[-89px] left-[10px]' : ''
          } absolute z-10 mt-2 font-abchanel right-[-20px] text-[8px] w-40 bg-white text-black border rounded-md shadow-lg
                     dark:bg-gray-800 dark:text-white dark:border-gray-600`}
          role="listbox"
          aria-describedby="language-picker-description"
        >
          <p id="language-picker-description" className="sr-only">
            Select your language
          </p>
          <ul>
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => handleSelect(lang.code)}
                  role="option"
                  aria-selected={selected === lang.code}
                  className={`w-full items-center flex text-left px-4 py-2 text-sm hover:bg-gray-100 text-[8px] dark:hover:bg-gray-700 font-abchanel ${
                    selected === lang.code
                      ? 'bg-gray-100 dark:bg-gray-700 font-semibold'
                      : ''
                  } ${
                    lang.label === 'Français' ? 'text-[8px]' : 'text-[12px]'
                  }`}
                >
                  <Image
                    alt={`${selected} flag`}
                    width={20}
                    height={20}
                    src={lang?.image}
                    className={`${selected === 'ar' ? 'ml-2' : 'mr-2'} `}
                  />
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
