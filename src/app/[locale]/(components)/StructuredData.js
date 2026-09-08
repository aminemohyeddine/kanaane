import { BUSINESS, SERVICES, SITE_URL } from '@/lib/seo';

/**
 * JSON-LD for Google. Renders no visible markup.
 *
 * Declares the business twice over: as an AutoRepair shop (diagnostic auto,
 * AdBlue, BCM/BCI, UGR, accessoires) and as a Locksmith (serrurier automobile,
 * clés, télécommandes, ouverture de voiture), because those are two different
 * intents people search for.
 */
export default function StructuredData({ locale }) {
  const localeUrl = `${SITE_URL}/${locale}`;
  const isArabic = locale === 'ar';

  const description = isArabic
    ? 'KANAANE Auto Services: سروري سيارات وتشخيص إلكتروني في الدار البيضاء. برمجة ونسخ مفاتيح السيارات، فتح السيارات عند فقدان المفاتيح، صيانة AdBlue، برمجة BCM و BCI، تعديل UGR وتركيب إكسسوارات السيارات.'
    : 'KANAANE Auto Services : serrurier automobile et diagnostic auto à Casablanca. Programmation, codage et duplication de clés et télécommandes, ouverture de voiture, AdBlue, capteurs, BCM/BCI, UGR et accessoires auto.';

  const address = {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.country,
  };

  const openingHoursSpecification = [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: BUSINESS.openingHours.days,
      opens: BUSINESS.openingHours.opens,
      closes: BUSINESS.openingHours.closes,
    },
  ];

  const contactPoints = [
    {
      '@type': 'ContactPoint',
      telephone: BUSINESS.phone,
      contactType: 'customer service',
      areaServed: 'MA',
      availableLanguage: ['fr', 'ar'],
    },
  ];

  const graph = [
    {
      '@type': ['AutoRepair', 'Locksmith'],
      '@id': `${SITE_URL}/#business`,
      name: BUSINESS.name,
      alternateName: BUSINESS.alternateName,
      url: localeUrl,
      inLanguage: locale,
      description,
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      address,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: BUSINESS.latitude,
        longitude: BUSINESS.longitude,
      },
      hasMap: BUSINESS.mapsUrl,
      openingHoursSpecification,
      contactPoint: contactPoints,
      currenciesAccepted: 'MAD',
      areaServed: [
        {
          '@type': 'City',
          name: isArabic ? 'الدار البيضاء' : 'Casablanca',
        },
        {
          '@type': 'AdministrativeArea',
          name: BUSINESS.region,
        },
      ],
      knowsLanguage: ['fr', 'ar'],
      sameAs: [BUSINESS.mapsUrl],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: isArabic ? 'خدمات السيارات' : 'Services automobiles',
        itemListElement: (SERVICES[locale] || SERVICES.fr).map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service,
            areaServed: {
              '@type': 'City',
              name: isArabic ? 'الدار البيضاء' : 'Casablanca',
            },
            provider: { '@id': `${SITE_URL}/#business` },
          },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: localeUrl,
      name: BUSINESS.name,
      inLanguage: locale,
      publisher: { '@id': `${SITE_URL}/#business` },
    },
  ];

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output only, no user input — safe to inline.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
      }}
    />
  );
}

/**
 * Breadcrumb trail for a sub-page. Renders no visible markup.
 */
export function BreadcrumbJsonLd({ locale, items }) {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: locale === 'ar' ? 'الرئيسية' : 'Accueil',
        item: `${SITE_URL}/${locale}`,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: `${SITE_URL}/${locale}${item.path}`,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
