import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const t = useTranslations('footer');
  const tLocation = useTranslations('locationPage');
  return (
    <footer className="bg-white dark:bg-gray-900 border-t-2 border-gray-400 dark:border-gray-700">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                KANAANE Auto Services™
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-16 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {t('importantLinks')}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/nos-services" className="hover:underline">
                    {t('nos-services')}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/location/" className="hover:underline">
                    {t('location')}
                  </Link>
                </li>
                <li>
                  <Link href="/contact/" className="hover:underline">
                    {t('contact')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {t('followUs')}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com"
                    className="hover:underline "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex mt-4 mb-3 flex-col md:flex-row sm:mt-0 space-x-4 text-xs text-gray-400 dark:text-gray-500">
          <Link
            href="tel:+212666188812"
            className="mb-2 md:ml-3 md:mr-3"
            dir="ltr"
            style={{ unicodeBidi: 'plaintext' }}
          >
             +212 6 66 18 88 12 📞
          </Link>
          <Link
            className="direction-ltr"
            href="https://www.google.com/maps/place/Cl%C3%A8s+kanaane/@33.5677653,-7.5560074,40m/data=!3m1!1e3!4m6!3m5!1s0xda7cd006f791bc1:0xb360329585592f8f!8m2!3d33.5677686!4d-7.5559371!16s%2Fg%2F11wqcww8yg?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
          >
            📍 {tLocation('location')}
          </Link>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{' '}
            <Link
              href="/"
              className="hover:underline"
            >
               KANAANE Auto Services™
            </Link>{' '}
            {t('allRightReserved')}
          </span>

          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
            <a
              href="https://www.facebook.com"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              aria-label="Facebook"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://www.instagram.com"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="16px"
                height="16px"
                className="w-4 h-4"
              >
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
