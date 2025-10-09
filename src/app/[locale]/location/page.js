import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MapClientWrapper from '../(components)/MapWrapper';

export async function generateMetadata({ params }) {
  const locale = params.locale;

  if (!['fr', 'ar'].includes(locale)) {
    notFound();
  }

  return {
  title:
    locale === 'ar'
      ? 'KANAANE Auto Services – موقع الورشة في الدار البيضاء'
      : 'KANAANE Auto Services – Localisation - diagnostic auto casablanca - installation d’accessoires',
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

export default async function Page({ params }) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'locationPage',
  });

  return (
    <div className="w-full rounded-xl p-6 dark:text-gray-100 space-y-4 bg-transparent">
      <div className="flex flex-col justify-center items-center">
        <h2 className="min-w-fit text-3xl md:text-4xl font-bold text-gray-800 dark:text-white max-w-lg text-center mb-10 font-abchanel w-full">
          {t('contactAndLocation')}
        </h2>

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
  );
}
