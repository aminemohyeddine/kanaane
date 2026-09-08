import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import React from 'react';
import ServicesCarousel from './(components)/ServicesCarousel';
import CarBrandCarousel from './(components)/CarsCarousl';
import ClientReviews from './(components)/ClientReviews';
import FancySvgBackgroundPage from './(components)/FancyBg';
import { SITE_URL, buildAlternates } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!['fr', 'ar'].includes(locale)) {
    notFound();
  }

  const title =
    locale === 'ar'
      ? 'سروري سيارات وتشخيص إلكتروني في الدار البيضاء | KANAANE Auto Services'
      : 'Serrurier automobile & diagnostic auto à Casablanca | KANAANE Auto Services';

  const description =
    locale === 'ar'
      ? 'سرورية السيارات في الدار البيضاء: برمجة وتكويد ونسخ مفاتيح السيارات وأجهزة التحكم عن بعد، صناعة مفاتيح جديدة، استبدال المفاتيح المفقودة وفتح السيارات. تشخيص إلكتروني، أنظمة منع التشغيل، AdBlue، حساسات، BCM/BCI، UGR وإكسسوارات السيارات.'
      : 'Serrurier automobile à Casablanca : programmation de clés, codage de clés et télécommandes, duplication, création de nouvelles clés, remplacement de clés perdues et ouverture de voiture. Diagnostic automobile et électronique, antidémarrage, AdBlue, capteurs, BCM/BCI, UGR et accessoires auto.';

  return {
    title,
    description,
    keywords:
      locale === 'ar'
        ? [
            'سروري سيارات الدار البيضاء',
            'برمجة مفاتيح السيارات',
            'نسخ مفاتيح السيارات',
            'فتح السيارات',
            'تشخيص السيارات',
            'AdBlue',
            'BCM BCI',
            'UGR',
            'إكسسوارات السيارات',
          ]
        : [
            'serrurier Casablanca',
            'serrurerie automobile Casablanca',
            'programmation de clés automobiles',
            'duplication de clés de voiture',
            'remplacement de clés perdues',
            'ouverture de voiture Casablanca',
            'diagnostic automobile Casablanca',
            'diagnostic électronique',
            'antidémarrage',
            'AdBlue',
            'capteurs',
            'BCM BCI',
            'UGR',
            'accessoires auto',
          ],
    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_MA' : 'fr_MA',
      url: `${SITE_URL}/${locale}`,
      title,
      description,
      siteName: 'KANAANE Auto Services',
    },
    alternates: buildAlternates(locale, ''),
  };
}

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <>
      <div className="w-full">
        <div className="relative">
          <video
            autoPlay
            loop
            playsInline
            controls={false}
            muted
            preload="auto"
            width="100%"
            crossOrigin="anonymous"
            className="w-full h-[415px] md:h-[645px] object-cover pointer-events-none"
          >
            <source src="/videos/headervideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute bottom-1/4 right-5 flex flex-col space-y-4 max-w-[90vw] md:max-w-fit text-right">
            <div className="text-2xl md:text-5xl lg:text-7xl font-semibold font-abchanel text-white">
              <div className="text-2xl lg:text-7xl mb-2 lg:mb-5">{t('welcomeText')}</div>
              <div className="text-xl lg:text-6xl">{t('title')}</div>
            </div>
          </div>
        </div>
        <div className="pt-5 pb-5 bg-white">
          <CarBrandCarousel />
        </div>
      </div>
      <ServicesCarousel />
      <div className="relative">
        <FancySvgBackgroundPage />
        <ClientReviews />
        <div className="relative rounded-2xl shadow-xl p-5  text-gray-800 dark:text-gray-200 md:mx-20 md:my-10">
          <div className="absolute inset-0 -z-10 rounded-2xl" />

          <h2 className="text-3xl font-bold mb-14 text-center text-gray-900 dark:text-white font-abchanel">
            {t('AboutUs.title')}
          </h2>

          <div
            dangerouslySetInnerHTML={{ __html: t('AboutUs.content') }}
            className="mb-4 text-lg font-abchanel leading-relaxed max-w-3xl mx-auto center"
          ></div>
        </div>
      </div>
    </>
  );
}
