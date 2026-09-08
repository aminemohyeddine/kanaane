import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MapClientWrapper from '../(components)/MapWrapper';
import Breadcrumbs from '../(components)/Breadcrumbs';
import { SITE_URL, buildAlternates } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;

  if (!['fr', 'ar'].includes(locale)) {
    notFound();
  }

  const title =
    locale === 'ar'
      ? 'موقعنا في الدار البيضاء — حي السدري | KANAANE Auto Services'
      : 'Notre adresse à Casablanca — Hay Sadri | KANAANE Auto Services';

  const description =
    locale === 'ar'
      ? 'ورشة KANAANE Auto Services: حي السدري، شارع 66، 20670 الدار البيضاء. سرورية السيارات، برمجة ونسخ المفاتيح، فتح السيارات، التشخيص الإلكتروني، AdBlue، BCM/BCI و UGR. ☎ +212 6 66 18 88 12'
      : 'Atelier KANAANE Auto Services : Hay Sadri, rue 66, 20670 Casablanca. Serrurerie automobile, programmation et duplication de clés, ouverture de voiture, diagnostic électronique, AdBlue, BCM/BCI et UGR. ☎ +212 6 66 18 88 12';

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_MA' : 'fr_MA',
      url: `${SITE_URL}/${locale}/location`,
      title,
      description,
      siteName: 'KANAANE Auto Services',
    },
    alternates: buildAlternates(locale, '/location'),
  };
}

export default async function Page({ params }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'locationPage',
  });

  return (
    <>
      <Breadcrumbs page="location" />
      <div className="w-full rounded-xl p-6 dark:text-gray-100 space-y-4 bg-transparent">
      <div className="flex flex-col justify-center items-center">
        <h1 className="min-w-fit text-3xl md:text-4xl font-bold text-gray-800 dark:text-white max-w-lg text-center mb-10 font-abchanel w-full">
          {t('contactAndLocation')}
        </h1>

        <div className=" w-fit flex mb-5">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com/maps/place/Cl%C3%A8s+kanaane/@33.5677653,-7.5560074,40m/data=!3m1!1e3!4m6!3m5!1s0xda7cd006f791bc1:0xb360329585592f8f!8m2!3d33.5677686!4d-7.5559371!16s%2Fg%2F11wqcww8yg?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"
          >
            <p className="text-blue-600 hover:underline hover:text-blue-800 transition font-abchanel">
              📍 {t('location')}
            </p>
          </Link>
        </div>

        <div className="w-full mb-7">
          <MapClientWrapper />
        </div>

        <Link
          href="mailto:kanaaneauto@gmail.com"
          className="flex items-center text-blue-600 hover:underline hover:text-blue-800 transition mb-3"
        >
          <p className="font-abchanel direction-ltr">
            📧 kanaaneauto@gmail.com
          </p>
        </Link>

        <Link
          href="tel:+212666188812"
          className="flex items-center gap-3 text-blue-600 hover:underline hover:text-blue-800 transition"
        >
          <p
            className="font-abchanel"
            dir="ltr"
            style={{ unicodeBidi: 'plaintext' }}
          >
            📞 +212 6 66 18 88 12
          </p>{' '}
        </Link>
      </div>
      </div>
    </>
  );
}
