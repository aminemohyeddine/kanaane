import React from 'react';
import { useTranslations } from 'next-intl';
import ServicesCards from '../(components)/OurServicesCard';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../(components)/Breadcrumbs';
import { SITE_URL, buildAlternates } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!['fr', 'ar'].includes(locale)) {
    notFound();
  }

  const title =
    locale === 'ar'
      ? 'خدماتنا: سرورية السيارات والتشخيص الإلكتروني في الدار البيضاء'
      : 'Nos services : serrurerie automobile et diagnostic auto à Casablanca';

  const description =
    locale === 'ar'
      ? 'جميع خدمات KANAANE Auto Services في الدار البيضاء: برمجة وتكويد ونسخ مفاتيح السيارات وأجهزة التحكم عن بعد، صناعة مفاتيح جديدة، استبدال المفاتيح المفقودة، فتح السيارات والأقفال، التشخيص الإلكتروني وأنظمة منع التشغيل، AdBlue، الحساسات، BCM/BCI، UGR وإكسسوارات السيارات.'
      : 'Tous les services KANAANE Auto Services à Casablanca : programmation de clés automobiles, codage de clés et télécommandes, duplication, création de nouvelles clés, remplacement de clés perdues, ouverture de voitures et de serrures, diagnostic électronique et antidémarrage, AdBlue, capteurs, BCM/BCI, UGR et accessoires auto.';

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_MA' : 'fr_MA',
      url: `${SITE_URL}/${locale}/nos-services`,
      title,
      description,
      siteName: 'KANAANE Auto Services',
    },
    alternates: buildAlternates(locale, '/nos-services'),
  };
}

const Page = () => {
  const t = useTranslations('our-services');

  const OurServicesCards = [
    {
      image: '/images/pragramCar.jpg',
      title: t('cardTitleForProgramming'),
      description: t('cardDescForProgramming'),
      callToAction: t('cardCallToAction'),
    },
    {
      image: '/images/lostKeys.jpg',
      title: t('cardTitleForCarOpen'),
      description: t('cardDescForCarOpen'),
      callToAction: t('cardCallToAction'),
    },
    {
      image: '/images/fix-keys.jpg',
      title: t('cardTitleKeyRepair'),
      description: t('cardDescKeyRepair'),
      callToAction: t('cardCallToAction'),
    },
    {
      image: '/images/carcase.PNG',
      title: t('cardTitleCarcasesCles'),
      description: t('cardDescCarcasesCles'),
      callToAction: t('cardCallToAction'),
    },
    {
      image: '/images/close_windows.webp',
      title: t('cardTitleWindowClose'),
      description: t('cardDescWindowClose'),
      callToAction: t('cardCallToAction'),
    },
    {
      image: '/images/electronic.jpg',
      title: t('cardTitleUgir'),
      description: t('cardDescUgir'),
      callToAction: t('cardCallToAction'),
    },
    {
      image: '/images/bcmbci.jpg',
      title: t('cardTitleBcmBci'),
      description: t('cardDescBcmBci'),
      callToAction: t('cardCallToAction'),
    },
    {
      image: '/images/fap.png',
      title: t('cardTitleFap'),
      description: t('cardDescFap'),
      callToAction: t('cardCallToAction'),
    },
    {
      image: '/images/adblue.jpg',
      title: t('cardTitleAdblue'),
      description: t('cardDescAdblue'),
      callToAction: t('cardCallToAction'),
    },
    {
      image: '/images/electro.webp',
      title: t('cardTitleElectronicAuto'),
      description: t('cardDescElectronicAuto'),
      callToAction: t('cardCallToAction'),
    },
    {
      image: '/images/calculateurauto.jpg',
      title: t('cardTitleCalculateurAuto'),
      description: t('cardDescCalculateurAuto'),
      callToAction: t('cardCallToAction'),
    },
    {
      image: '/images/aer.webp',
      title: t('cardTitleVents'),
      description: t('cardDescVents'),
      callToAction: t('cardCallToAction'),
    },
    {
      image: '/images/boitier.jpg',
      title: t('cardTitleBoitierElectroniqueOccasion'),
      description: t('cardDescBoitierElectroniqueOccasion'),
      callToAction: t('cardCallToAction'),
    },
    {
      image: '/images/gaz-ech.jpg',
      title: t('cardTitleEch'),
      description: t('cardDescEch'),
      callToAction: t('cardCallToAction'),
    },
    {
      image: '/images/airbag.jpg',
      title: t('cardTitleCrashAirbag'),
      description: t('cardDescCrashAirbag'),
      callToAction: t('cardCallToAction'),
    },

    {
      image: '/images/centralise.jpg',
      title: t('cardTitleCentraliseVoiture'),
      description: t('cardDescCentraliseVoiture'),
      callToAction: t('cardCallToAction'),
    },
  ];

  return (
    <>
      <Breadcrumbs page="nos-services" />
      <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-6 py-16 space-y-28 max-w-7xl mx-auto font-sans">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
          {t('headline')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t('subtext')}
        </p>
        <Link
          href="/contact"
          className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition shadow-lg"
        >
          {t('contactUs')}
        </Link>
      </section>

      <section className="space-y-10">
        <h2 className="text-4xl font-bold text-center">{t('ourServices')}</h2>
      </section>
        <ServicesCards cards={OurServicesCards} />
      </main>
    </>
  );
};

export default Page;
