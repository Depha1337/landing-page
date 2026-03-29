// EmberForge App URLs - for external app links
export const APP_URL = 'https://app.emberforge.io'

// URL constants - internal pages use relative paths, external use full URLs
export const URLS = {
  // App links (external - open in new tab)
  signup: `${APP_URL}/signup`,
  login: `${APP_URL}/login`,
  // Legal pages (internal - same site)
  privacy: '/privacy',
  terms: '/terms',
  dataDelete: '/data-deletion',
  // Support (internal)
  help: '/faq',
} as const

// Contact emails
export const SUPPORT_EMAIL = 'Support@emberforgeapp.com'
export const PRIVACY_EMAIL = 'Privacy@emberforgeapp.com'

// Site URLs
export const SITE_URL = 'https://emberforge.io'
