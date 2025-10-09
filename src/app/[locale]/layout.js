import './globals.css';
import Header from './(components)/Header';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Providers } from './provides';
import Footer from './(components)/Footer';
import WhatsAppContact from './(components)/WhatsappContact';
import Head from 'next/head';

export async function generateMetadata({ params }) {
  const locale = params.locale;

  const metadataByLocale = {
    fr: {
      title:
        'KANAANE Auto Services | Diagnostic auto, installation et distribution d’accessoires auto à Casablanca – Maroc',
      description:
        'KANAANE Auto Services est votre spécialiste à Casablanca pour le Diagnostic auto, l’installation d’accessoires auto, ainsi que la distribution de matériel électronique et d’équipements liés à l’automobile partout au Maroc.',
    },
    ar: {
      title:
        'KANAANE Auto Services | تشخيص السيارات، تركيب وتوزيع لوازم ومعدات السيارات في الدار البيضاء – المغرب',
      description:
        'KANAANE Auto Services | مركز متخصص في تشخيص أعطال السيارات، تركيب لوازم السيارات، وتوزيع المعدات الإلكترونية وملحقات السيارات في الدار البيضاء و جميع أنحاء المغرب.',
    },
  };

  const defaultMetadata = {
    title:
      'KANAANE Auto Services | Diagnostic auto, installation et distribution d’accessoires auto à Casablanca – Maroc',
    description:
      'KANAANE Auto Services est votre spécialiste à Casablanca pour le Diagnostic auto, l’installation d’accessoires auto, ainsi que la distribution de matériel électronique et d’équipements liés à l’automobile partout au Maroc.',
  };

  return {
    title: metadataByLocale[locale]?.title || defaultMetadata.title,
    description:
      metadataByLocale[locale]?.description || defaultMetadata.description,
    verification: {
      google: 'N-D8Gig5umJFSNGKlXxTZzg6bn-GhJ3d3WskSWIXKk0',
    },
  };
}
// other: {
//   'google-site-verification': 'jpyBSGudUIKwgRSsQcESr7kIzi5zWaHVw0ZVSYB8cw8',
// },

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <Head>
        <meta
          name="google-site-verification"
          content="N-D8Gig5umJFSNGKlXxTZzg6bn-GhJ3d3WskSWIXKk0"
        />{' '}
      </Head>
      <body>
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
