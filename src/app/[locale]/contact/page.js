import React from 'react';
import ContactUsForm from './form';
import WhatsAppSection from './WhatsappSection';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const locale = await params.locale;
  if (!['fr', 'ar'].includes(locale)) {
    notFound();
  }

  return {
  title:
    locale === 'ar'
      ? 'KANAANE Auto Services – تشخيص وتركيب وتوزيع لوازم السيارات في الدار البيضاء'
      : 'KANAANE Auto Services – Diagnostic, installation et distribution d’accessoires auto à Casablanca',
  description:
    locale === 'ar'
      ? 'KANAANE Auto Services متخصصة في التشخيص الإلكتروني للسيارات، تركيب الإكسسوارات، وتوزيع المعدات المرتبطة بالسيارات في الدار البيضاء، المغرب.'
      : 'Kanaane Auto Services est spécialisée dans le diagnostic électronique, l’installation d’accessoires et la distribution de matériel automobile à Casablanca, Maroc.',
  openGraph: {
    title: locale === 'ar' ? 'KANAANE Auto Services' : 'KANAANE Auto Services',
    description:
      locale === 'ar'
        ? 'تشخيص إلكتروني، تركيب إكسسوارات، وتوزيع معدات السيارات في الدار البيضاء، المغرب.'
        : 'Diagnostic électronique, installation d’accessoires et distribution de matériel automobile à Casablanca, Maroc.',
    siteName: locale === 'ar' ? 'KANAANE Auto Services' : 'KANAANE Auto Services',
  },

    alternates: {
      canonical: 'https://www.kanaane-auto-services.com/',
    },
  };
}
const page = () => {
  return (
    <>
      <WhatsAppSection />
      <ContactUsForm />
    </>
  );
};

export default page;
