/**
 * Configuration centrale d'ONYX LABS.
 * Modifiez ce fichier ou utilisez les variables d'environnement (.env)
 * pour mettre à jour les coordonnées, les profils des 3 co-fondateurs et les endpoints.
 * Aucune donnée non vérifiée (faux clients, faux chiffres, fausses biographies) n'est inventée.
 */
export const siteConfig = {
  brand: {
    name: 'ONYX LABS',
    slogan: "WE ENGINEER WHAT'S NEXT.",
    subheadline: 'Turning ambitious ideas into powerful digital experiences.',
    foundedByCount: 3,
    markets: ['Cameroun', 'Afrique', 'Europe', 'Canada', 'International']
  },
  contact: {
    email: import.meta.env?.VITE_CONTACT_EMAIL || 'contact@onyxlabs.dev',
    whatsapp: import.meta.env?.VITE_WHATSAPP_NUMBER || '+237 600 00 00 00',
    calendlyUrl: import.meta.env?.VITE_CALENDLY_URL || '',
    contactEndpoint: import.meta.env?.VITE_CONTACT_ENDPOINT || '',
    quoteEndpoint: import.meta.env?.VITE_QUOTE_ENDPOINT || '',
    locations: [
      { region: 'Afrique Centrale', hub: 'Douala / Yaoundé, Cameroun', timezone: 'WAT (UTC+1)' },
      { region: 'Europe & Canada', hub: 'Opérations & Accompagnement à distance', timezone: 'CET / EST' }
    ]
  },
  socials: {
    github: 'https://github.com/onyx-labs',
    linkedin: 'https://linkedin.com/company/onyx-labs',
    x: ''
  }
};
