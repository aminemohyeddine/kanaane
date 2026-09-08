import { useLocale } from 'next-intl';
import { BreadcrumbJsonLd } from './StructuredData';

const LABELS = {
  'nos-services': { fr: 'Nos services', ar: 'خدماتنا' },
  contact: { fr: 'Contact', ar: 'اتصل بنا' },
  location: { fr: 'Localisation', ar: 'موقعنا' },
};

/**
 * Emits BreadcrumbList JSON-LD for a sub-page. Renders nothing visible.
 */
export default function Breadcrumbs({ page }) {
  const locale = useLocale();
  const label = LABELS[page]?.[locale] || LABELS[page]?.fr || page;

  return (
    <BreadcrumbJsonLd
      locale={locale}
      items={[{ name: label, path: `/${page}` }]}
    />
  );
}
