// Shared business facts — the single source of truth for every page.
// A phone number, an area or a service link never gets edited in two places.

export const SITE = 'https://www.armour-crete.com';
export const EMAIL = 'evans@armour-crete.com';

export const PHONES = [
  { who: 'Dylan Evans', display: '435·994·5235', tel: '+14359945235' },
  { who: 'Zac Evans', display: '435·224·6987', tel: '+14352246987' },
];

export const AREAS = [
  'St. George', 'Kayenta', 'Entrada', 'Ivins', 'Santa Clara', 'Snow Canyon',
  'SunRiver', 'Coral Canyon', 'Green Springs', 'Bloomington', 'Washington', 'Hurricane',
];

export const SERVICE_PAGES = [
  { href: '/driveway-sealing', label: 'Driveway sealing' },
  { href: '/pool-deck-sealing', label: 'Pool deck sealing' },
  { href: '/wet-look-concrete-sealing', label: 'Wet-look & decorative' },
  { href: '/expansion-joint-replacement', label: 'Expansion joints' },
  { href: '/asphalt-sealing', label: 'Asphalt & blacktop' },
  { href: '/foundation-waterproofing', label: 'Foundation waterproofing' },
];

export const CITY_PAGES = [
  { href: '/concrete-sealing-washington-ut', label: 'Washington' },
  { href: '/concrete-sealing-hurricane-ut', label: 'Hurricane' },
  { href: '/concrete-sealing-ivins-ut', label: 'Ivins' },
  { href: '/concrete-sealing-santa-clara-ut', label: 'Santa Clara' },
];

// A compact copy of the business node for sub-page JSON-LD graphs, so every
// page is self-contained instead of relying on a cross-page @id lookup.
export function businessNode() {
  return {
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': SITE + '/#business',
    name: 'Armour Crete',
    url: SITE,
    telephone: '+1-435-994-5235',
    email: EMAIL,
    image: SITE + '/og.png',
    logo: SITE + '/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'St. George',
      addressRegion: 'UT',
      addressCountry: 'US',
    },
    sameAs: ['https://g.page/r/CTRFIPJaX9QCEAI'],
  };
}

// JSON-LD for a service page: Service + BreadcrumbList + the business node.
export function servicePageSchema({ path, name, description, crumb }) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      businessNode(),
      {
        '@type': 'Service',
        '@id': SITE + path + '#service',
        name,
        description,
        url: SITE + path,
        provider: { '@id': SITE + '/#business' },
        areaServed: [
          ...AREAS.map((a) => ({ '@type': 'City', name: a + ', UT' })),
          { '@type': 'State', name: 'Utah' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' },
          { '@type': 'ListItem', position: 2, name: crumb, item: SITE + path },
        ],
      },
    ],
  };
}

// JSON-LD for a city page: the full service catalogue offered in one place.
export function cityPageSchema({ path, city, description }) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      businessNode(),
      {
        '@type': 'Service',
        '@id': SITE + path + '#service',
        name: `Concrete sealing in ${city}, Utah`,
        description,
        url: SITE + path,
        serviceType: 'Concrete sealing',
        provider: { '@id': SITE + '/#business' },
        areaServed: { '@type': 'City', name: city + ', UT' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' },
          { '@type': 'ListItem', position: 2, name: city, item: SITE + path },
        ],
      },
    ],
  };
}
