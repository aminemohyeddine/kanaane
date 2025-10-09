import React from 'react';
import { useTranslations } from 'next-intl';
import ServicesCards from '../(components)/OurServicesCard';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const locale = await params.locale;
  if (!['fr', 'ar'].includes(locale)) {
    notFound();
  }

 return {
  title:
    locale === 'ar'
      ? 'KANAANE Auto Services –  خدماتنا في الدار البيضاء - التشخيص الإلكتروني السيارات'
      : 'KANAANE Auto Services – nos services casablanca - diagnostic auto - installation d’accessoires',
  description:
    locale === 'ar'
      ? 'اكتشف موقع ورشة KANAANE Auto Services في الدار البيضاء. متخصصون في التشخيص الإلكتروني، تركيب الإكسسوارات وتوزيع معدات السيارات.'
      : 'Trouvez notre garage KANAANE Auto Services à Casablanca. Spécialistes en diagnostic électronique, installation d’accessoires et distribution de matériel automobile.',
  openGraph: {
    title: locale === 'ar' ? 'KANAANE Auto Services' : 'KANAANE Auto Services',
    description:
      locale === 'ar'
        ? 'اكتشف موقع الورشة وخدماتنا: التشخيص الإلكتروني، تركيب الإكسسوارات وتوزيع معدات السيارات في الدار البيضاء.'
        : 'Découvrez notre localisation à Casablanca : diagnostic électronique, installation d’accessoires et distribution de matériel automobile.',
    siteName: locale === 'ar' ? 'KANAANE Auto Services' : 'KANAANE Auto Services',
  },
  alternates: {
    canonical: 'https://www.kanaane-auto-services.com/contact',
  },
};
}

const page = () => {
  const t = useTranslations('our-services');

  const OurServicesCards = [
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
      image: '/images/camera-surveillance-voiture.jpg',
      title: t('cardTitleForCamera'),
      description: t('cardDescForCamera'),
      callToAction: t('cardCallToAction'),
    },

    {
      image: '/images/centralise.jpg',
      title: t('cardTitleCentraliseVoiture'),
      description: t('cardDescCentraliseVoiture'),
      callToAction: t('cardCallToAction'),
    },

    {
      image: '/images/carplay.avif',
      title: t('cardTitleCarplay'),
      description: t('cardDescCarplay'),
      callToAction: t('cardCallToAction'),
    },
  ];

  return (
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
  );
};

export default page;
