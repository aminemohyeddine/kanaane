// Central SEO configuration.
// Every canonical URL, hreflang alternate and JSON-LD block is derived from here,
// so the site never contradicts itself in front of Google.

export const SITE_URL = 'https://www.kanaane-auto-services.com';

export const LOCALES = ['fr', 'ar'];
export const DEFAULT_LOCALE = 'fr';

// Real, verifiable business data (kept in sync with the footer / location page).
export const BUSINESS = {
  name: 'KANAANE Auto Services',
  alternateName: 'Clès Kanaane',
  phone: '+212666188812',
  email: 'kanaaneauto@gmail.com',
  street: 'Hay Sadri, Rue 66',
  postalCode: '20670',
  city: 'Casablanca',
  region: 'Casablanca-Settat',
  country: 'MA',
  latitude: 33.5677686,
  longitude: -7.5559371,
  mapsUrl:
    'https://www.google.com/maps/place/Cl%C3%A8s+kanaane/@33.5677653,-7.5560074,40m/data=!3m1!1e3!4m6!3m5!1s0xda7cd006f791bc1:0xb360329585592f8f!8m2!3d33.5677686!4d-7.5559371',
  // Mon–Sat, 09:00–19:00 (matches the hours shown in the WhatsApp section)
  openingHours: {
    days: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    opens: '09:00',
    closes: '19:00',
  },
};

/**
 * Canonical + hreflang alternates for a page.
 * `path` is the locale-less path, e.g. '' | '/nos-services' | '/contact'.
 */
export function buildAlternates(locale, path = '') {
  const languages = LOCALES.reduce((acc, code) => {
    acc[code] = `${SITE_URL}/${code}${path}`;
    return acc;
  }, {});

  return {
    canonical: `${SITE_URL}/${locale}${path}`,
    languages: {
      ...languages,
      'x-default': `${SITE_URL}/${DEFAULT_LOCALE}${path}`,
    },
  };
}

// The services we want to be found for, in both languages.
// Mirrored into the LocalBusiness offer catalog so Google can read the full
// list even where the page only shows a short label.
export const SERVICES = {
  fr: [
    'Serrurerie automobile à Casablanca',
    'Programmation de clés automobiles',
    'Codage de clés et de télécommandes',
    'Duplication de clés de voiture',
    'Remplacement de clés perdues',
    'Création de nouvelles clés automobiles',
    'Programmation de télécommandes',
    'Ouverture de voiture en cas de perte de clés',
    'Ouverture de portes et de serrures',
    'Diagnostic électronique automobile',
    'Systèmes antidémarrage (immobilizer)',
    'Diagnostic automobile et lecture des défauts',
    'Entretien du système AdBlue',
    'Installation et réglage de capteurs',
    'Programmation des modules BCM et BCI',
    'Adaptation UGR et UGIR',
    'Installation d’accessoires auto',
    'Entretien du filtre à particules (FAP)',
    'Réparation des airbags (Crash Airbag)',
    'Maintenance du calculateur automobile',
    'Système de centralisation des portes',
    'Fermeture automatique des vitres',
    'Coques de clés de voiture',
  ],
  ar: [
    'سرورية السيارات في الدار البيضاء',
    'برمجة مفاتيح السيارات',
    'تكويد المفاتيح وأجهزة التحكم عن بعد',
    'نسخ مفاتيح السيارات',
    'استبدال المفاتيح المفقودة',
    'صناعة مفاتيح سيارات جديدة',
    'برمجة أجهزة التحكم عن بعد',
    'فتح السيارات عند فقدان المفاتيح',
    'فتح الأبواب والأقفال',
    'التشخيص الإلكتروني للسيارات',
    'أنظمة منع التشغيل (الإيموبلايزر)',
    'تشخيص أعطال السيارات وقراءة الأخطاء',
    'صيانة نظام AdBlue',
    'تركيب وضبط الحساسات',
    'برمجة وحدات BCM و BCI',
    'تعديل UGR و UGIR',
    'تركيب إكسسوارات السيارات',
    'صيانة فلتر الجسيمات (FAP)',
    'إصلاح الوسائد الهوائية (Crash Airbag)',
    'صيانة الحاسوب المركزي للسيارة',
    'نظام القفل المركزي للأبواب',
    'إغلاق النوافذ تلقائياً',
    'أغطية مفاتيح السيارات',
  ],
};
