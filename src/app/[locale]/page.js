import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import React from 'react';
import ServicesCarousel from './(components)/ServicesCarousel';
import CarBrandCarousel from './(components)/CarsCarousl';
import ClientReviews from './(components)/ClientReviews';
import FancySvgBackgroundPage from './(components)/FancyBg';

export async function generateMetadata({ params }) {
  const locale = await params.locale;
  if (!['fr', 'ar'].includes(locale)) {
    notFound();
  }

  return {
    title:
      locale === 'ar'
        ? 'KANAANE Auto Services | تشخيص السيارات، تركيب وتوزيع لوازم ومعدات السيارات في الدار البيضاء – المغرب'
        : 'KANAANE Auto Services | Diagnostic auto, installation et distribution d’accessoires auto à Casablanca – Maroc',
    description:
      locale === 'ar'
        ? 'KANAANE Auto Services | مركز متخصص في تشخيص أعطال السيارات، تركيب لوازم السيارات، وتوزيع المعدات الإلكترونية وملحقات السيارات في الدار البيضاء و جميع أنحاء المغرب.'
        : 'KANAANE Auto Services est votre spécialiste à Casablanca pour le diagnostic auto, l’installation d’accessoires auto, ainsi que la distribution de matériel électronique et d’équipements liés à l’automobile partout au Maroc.',

    openGraph: {
      title:
        locale === 'ar'
          ? 'KANAANE Auto Services | تشخيص السيارات، تركيب وتوزيع لوازم ومعدات السيارات في الدار البيضاء – المغرب'
        : 'KANAANE Auto Services | Diagnostic auto, installation et distribution d’accessoires auto à Casablanca – Maroc',
      description:
        locale === 'ar'
           ? 'KANAANE Auto Services | مركز متخصص في تشخيص أعطال السيارات، تركيب لوازم السيارات، وتوزيع المعدات الإلكترونية وملحقات السيارات في الدار البيضاء و جميع أنحاء المغرب.'
        : 'KANAANE Auto Services est votre spécialiste à Casablanca pour le diagnostic auto, l’installation d’accessoires auto, ainsi que la distribution de matériel électronique et d’équipements liés à l’automobile partout au Maroc.',
      siteName: locale === 'ar' ? 'KANAANE Auto Services' : 'KANAANE Auto Services',
    },
    alternates: {
      canonical: 'https://www.kanaane-auto-services.com/contact',
    },
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
            <h1 className="text-2xl md:text-5xl lg:text-7xl font-semibold font-abchanel text-white">
              <div className="text-2xl lg:text-7xl mb-2 lg:mb-5">{t('welcomeText')}</div>
              <div className="text-xl lg:text-6xl">{t('title')}</div>
            </h1>
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

          <h3 className="text-3xl font-bold mb-14 text-center text-gray-900 dark:text-white font-abchanel">
            {t('AboutUs.title')}
          </h3>

          <h3
            dangerouslySetInnerHTML={{ __html: t('AboutUs.content') }}
            className="mb-4 text-lg font-abchanel leading-relaxed max-w-3xl mx-auto center"
          ></h3>
        </div>
      </div>
    </>
  );
}
