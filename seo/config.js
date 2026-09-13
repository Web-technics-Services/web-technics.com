/**
 * Central SEO configuration for the Cambodia local-market site.
 *
 * web-technics.com owns Cambodia search intent. The sibling .services site
 * owns company-level and international service terms, so every route below
 * has one distinct local primary keyword.
 */

const site = {
  name: 'Web Technics Cambodia',
  url: 'https://web-technics.com',
  locale: 'en',
  legalName: 'Web Technics',
  logo: '/assets/branding/web-technics-logo-horizontal-light.svg',
  defaultImage: '/assets/branding/web-technics-social-card.svg',
  defaultImageAlt: 'Web Technics Cambodia web design and digital services',
  telephone: '+855969245074',
  email: 'info@web-technics.services',
  areaServed: ['Cambodia', 'Kampot', 'Phnom Penh', 'Siem Reap'],
  sameAs: [
    'https://github.com/web-technics',
    'https://t.me/web_technics_services',
    'https://wa.me/855965345954',
  ],
};

const siblingSites = [
  {
    origin: 'https://web-technics.services',
    owns: 'Company, Belgium/international, portfolio, and full service-package terms.',
  },
];

const movedRoutes = {};

const routes = [
  {
    path: '/',
    file: 'index.html',
    title: 'Web Agency Cambodia | Local Websites That Grow Business',
    description:
      'A Cambodia web agency helping local businesses, hospitality teams, NGOs, and founders build fast, credible websites that attract enquiries and support growth.',
    primaryKeyword: 'web agency cambodia',
    secondaryKeywords: ['local website company cambodia', 'cambodia digital agency'],
    ogTitle: 'Web Agency Cambodia | Built for Local Growth',
    ogDescription:
      'Local context, senior web skills, and practical digital support for organizations across Cambodia.',
    changefreq: 'weekly',
    priority: 1,
  },
  {
    path: '/services.html',
    file: 'services.html',
    title: 'Digital Solutions Cambodia | Practical Local Web Support',
    description:
      'Explore digital solutions in Cambodia for hospitality, local businesses, NGOs, and growing teams, from focused websites to visibility, commerce, and support.',
    primaryKeyword: 'digital solutions cambodia',
    secondaryKeywords: ['local business digital support', 'cambodia website support'],
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Digital solutions' }],
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    path: '/web-design-cambodia.html',
    file: 'web-design-cambodia.html',
    title: 'Web Design Cambodia | Fast Websites for Local Business',
    description:
      'Professional web design in Cambodia for businesses, hospitality teams, and founders needing fast, credible, mobile-friendly websites that generate enquiries.',
    primaryKeyword: 'web design cambodia',
    secondaryKeywords: ['business website cambodia', 'responsive website cambodia'],
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Web Design Cambodia' }],
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    path: '/ecommerce-development-cambodia.html',
    file: 'ecommerce-development-cambodia.html',
    title: 'Ecommerce Development Cambodia | Stores Built to Convert',
    description:
      'Ecommerce development in Cambodia for product catalogs, secure checkout journeys, payment integrations, mobile shoppers, analytics, and scalable online growth.',
    primaryKeyword: 'ecommerce development cambodia',
    secondaryKeywords: ['online store cambodia', 'cambodia ecommerce website'],
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Ecommerce Development Cambodia' }],
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    path: '/seo-services-cambodia.html',
    file: 'seo-services-cambodia.html',
    title: 'SEO Services Cambodia | Technical and Local Search Growth',
    description:
      'SEO services in Cambodia covering technical audits, local search signals, content structure, page speed, measurement, and plans for sustainable organic growth.',
    primaryKeyword: 'seo services cambodia',
    secondaryKeywords: ['local seo cambodia', 'technical seo cambodia'],
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'SEO Services Cambodia' }],
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    path: '/ngo-web-design-cambodia.html',
    file: 'ngo-web-design-cambodia.html',
    title: 'NGO Web Design Cambodia | Accessible Impact Websites',
    description:
      'NGO web design in Cambodia for nonprofits needing accessible websites for programs, impact stories, donors, partners, updates, and multilingual content.',
    primaryKeyword: 'ngo web design cambodia',
    secondaryKeywords: ['nonprofit website cambodia', 'charity website cambodia'],
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'NGO Web Design Cambodia' }],
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    path: '/kampot-landing-page.html',
    file: 'kampot-landing-page.html',
    title: 'Kampot Website Design | Local Pages That Drive Action',
    description:
      'Kampot website design for tours, stays, restaurants, properties, events, and local services, with mobile-first pages built around bookings and enquiries.',
    primaryKeyword: 'kampot website design',
    secondaryKeywords: ['kampot business website', 'kampot tourism website'],
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Kampot Website Design' }],
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    path: '/portfolio.html',
    file: 'portfolio.html',
    title: 'Cambodia Website Projects | Local Digital Work Portfolio',
    description:
      'Browse Cambodia website projects across hospitality, tourism, commerce, media, and community organizations, plus international work built for practical results.',
    primaryKeyword: 'cambodia website projects',
    secondaryKeywords: ['cambodia digital work', 'local website examples'],
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Projects' }],
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    path: '/about.html',
    file: 'about.html',
    title: 'Cambodia Web Agency Team | Local Knowledge, Senior Skills',
    description:
      'Meet a Cambodia web agency team combining local context, direct communication, and senior design and development experience for durable, useful digital work.',
    primaryKeyword: 'cambodia web agency team',
    secondaryKeywords: ['local web experts cambodia', 'cambodia website team'],
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Our team' }],
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    path: '/contact.html',
    file: 'contact.html',
    title: 'Website Project Consultation Cambodia | Start a Conversation',
    description:
      'Request a website project consultation in Cambodia. Share your goals, audience, timeline, and current challenges with a local team that replies within one day.',
    primaryKeyword: 'website project consultation cambodia',
    secondaryKeywords: ['website enquiry cambodia', 'cambodia digital consultation'],
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Start a conversation' }],
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    path: '/privacy.html',
    file: 'privacy.html',
    title: 'Website Privacy Choices Cambodia | Analytics and Cookies',
    description:
      'Understand privacy choices for Web Technics Cambodia, including contact data, Google Analytics consent, cookies, retention, security, and visitor rights.',
    primaryKeyword: 'website privacy choices cambodia',
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Privacy choices' }],
    changefreq: 'yearly',
    priority: 0.3,
  },
  {
    path: '/server-status.html',
    file: 'server-status.html',
    title: 'Cambodia Website Hosting Status | Web Technics Systems',
    description:
      'Reference status for Web Technics Cambodia hosting, monitoring, performance, backups, and security controls. Current incidents are shared with affected clients.',
    primaryKeyword: 'cambodia website hosting status',
    noindex: true,
    priority: 0.1,
  },
];

const disallow = ['/server-status.html', '/server-status.php'];

module.exports = { site, routes, disallow, siblingSites, movedRoutes };
