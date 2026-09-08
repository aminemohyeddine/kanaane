import React from 'react';
import ContactUsForm from './form';
import WhatsAppSection from './WhatsappSection';
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
      ? 'اتصل بنا — سروري سيارات وتشخيص إلكتروني في الدار البيضاء'
      : 'Contact — serrurier automobile et diagnostic auto à Casablanca';

  const description =
    locale === 'ar'
      ? 'تواصل مع KANAANE Auto Services في الدار البيضاء عبر الهاتف أو واتساب: برمجة ونسخ مفاتيح السيارات، فتح السيارات عند فقدان المفاتيح، التشخيص الإلكتروني، AdBlue، BCM/BCI، UGR وإكسسوارات السيارات. ☎ +212 6 66 18 88 12'
      : 'Contactez KANAANE Auto Services à Casablanca par téléphone ou WhatsApp : programmation et duplication de clés, ouverture de voiture en cas de perte de clés, diagnostic automobile, AdBlue, BCM/BCI, UGR et accessoires auto. ☎ +212 6 66 18 88 12';

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_MA' : 'fr_MA',
      url: `${SITE_URL}/${locale}/contact`,
      title,
      description,
      siteName: 'KANAANE Auto Services',
    },
    alternates: buildAlternates(locale, '/contact'),
  };
}

const Page = () => {
  return (
    <>
      <Breadcrumbs page="contact" />
      <WhatsAppSection />
      <ContactUsForm />
    </>
  );
};

export default Page;
