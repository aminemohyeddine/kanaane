import React from 'react';
import { useTranslations } from 'next-intl';

export default function ClientReviews() {
  const ClientReviews = [
    {
      text: 'Service rapide et professionnel chez KANAANE Auto Services. Ils ont effectué un diagnostic précis et installé les accessoires dont j’avais besoin sans aucun souci.',
      name: 'Sara',
      location: 'Casablanca',
      lang: 'fr',
    },
    {
      text: 'خدمة ممتازة في إصلاح نظام AdBlue للسيارة ديالي. شكراً KANAANE Auto Services.',
      name: 'فاطمة',
      location: 'الدار البيضاء',
      lang: 'ar',
    },
    {
      text: 'فريق KANAANE Auto Services قام بتعديل BCM و BCI بنجاح واحترافية.',
      name: 'سامي',
      location: 'الرباط',
      lang: 'ar',
    },
    {
      text: 'Réparation et adaptation UGR effectuées rapidement chez KANAANE Auto Services.',
      name: 'Ahmed',
      location: 'Casablanca',
      lang: 'fr',
    },
    {
      text: 'جربت تركيب إكسسوارات السيارة وخدمة التشخيص عندهم وكانت ممتازة.',
      name: 'ياسين',
      location: 'الدار البيضاء',
      lang: 'ar',
    },
  ];

  const t = useTranslations('HomePage');

  return (
    <section className="bg-transparent py-12 px-4" dir="rtl">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white uppercase font-abchanel">
        {t('reviews.title')}
      </h2>
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {ClientReviews.map(({ text, name, location, lang }, idx) => (
          <div
            key={idx}
            className={`rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300
                ${
                  lang === 'ar'
                    ? 'bg-gray-100 dark:bg-gray-800'
                    : 'bg-blue-50 dark:bg-blue-900'
                }`}
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
            lang={lang}
          >
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
              &ldquo;{text}&rdquo;
            </p>
            <h3 className="font-semibold text-gray-900 dark:text-white font-abchanel">
              {name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-abchanel">
              {location}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400 font-abchanel">
        {t('reviews.fromWhatsapp')}
      </p>
    </section>
  );
}
