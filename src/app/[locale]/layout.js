import './globals.css';
import Header from './(components)/Header';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Providers } from './provides';
import Footer from './(components)/Footer';
import WhatsAppContact from './(components)/WhatsappContact';
import StructuredData from './(components)/StructuredData';
import { SITE_URL, buildAlternates } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const metadataByLocale = {
    fr: {
      title:
        'Serrurier automobile & diagnostic auto à Casablanca | KANAANE Auto Services',
      description:
        'Serrurier automobile à Casablanca : programmation, codage et duplication de clés et télécommandes, remplacement de clés perdues, ouverture de voiture. Diagnostic automobile, AdBlue, capteurs, BCM/BCI, UGR et accessoires auto. ☎ +212 6 66 18 88 12',
    },
    ar: {
      title:
        'سروري سيارات وتشخيص إلكتروني في الدار البيضاء | KANAANE Auto Services',
      description:
        'سرورية السيارات في الدار البيضاء: برمجة وتكويد ونسخ مفاتيح السيارات وأجهزة التحكم عن بعد، استبدال المفاتيح المفقودة، فتح السيارات. تشخيص إلكتروني، AdBlue، حساسات، BCM/BCI، UGR وإكسسوارات السيارات. ☎ +212 6 66 18 88 12',
    },
  };

  const meta = metadataByLocale[locale] || metadataByLocale.fr;

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    applicationName: 'KANAANE Auto Services',
    alternates: buildAlternates(locale || 'fr', ''),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    verification: {
      google: 'N-D8Gig5umJFSNGKlXxTZzg6bn-GhJ3d3WskSWIXKk0',
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      suppressHydrationWarning
    >
      <body>
        <StructuredData locale={locale} />
        <NextIntlClientProvider locale={locale}>
          <Providers>
            <WhatsAppContact locale={locale} />
            <Header locale={locale} />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
