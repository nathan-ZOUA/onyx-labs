/**
 * Configuration des 3 Fondateurs d'ONYX LABS.
 * Conformément à la politique d'intégrité stricte : aucun nom fictif, diplôme inventé
 * ou biographie imaginaire n'est pré-rempli. Remplacez les champs `isPlaceholder: true`
 * par les informations officielles de chaque co-fondateur.
 */
export const foundersData = [
  {
    id: 'founder-01',
    slotLabel: 'CO-FONDATEUR 01 // CONFIGURATION REQUISE',
    name: {
      fr: 'Co-Fondateur 01 (À renseigner)',
      en: 'Co-Founder 01 (To configure)'
    },
    role: {
      fr: 'Ingénierie Logicielle & Architecture Systèmes',
      en: 'Software Engineering & Systems Architecture'
    },
    bio: {
      fr: 'Emplacement réservé au profil officiel du premier co-fondateur. Renseignez son nom, son parcours réel et ses responsabilités dans src/data/teamData.js.',
      en: 'Reserved slot for the first co-founder official profile. Add their real name, verified background, and responsibilities in src/data/teamData.js.'
    },
    skills: ['Architecture Backend', 'Node.js / Python', 'PostgreSQL', 'Docker & AWS'],
    linkedin: '',
    github: '',
    isConfigurable: true
  },
  {
    id: 'founder-02',
    slotLabel: 'CO-FONDATEUR 02 // CONFIGURATION REQUISE',
    name: {
      fr: 'Co-Fondateur 02 (À renseigner)',
      en: 'Co-Founder 02 (To configure)'
    },
    role: {
      fr: 'Ingénierie Frontend, Expériences 3D & UI/UX',
      en: 'Frontend Engineering, 3D Experiences & UI/UX'
    },
    bio: {
      fr: 'Emplacement réservé au profil officiel du deuxième co-fondateur. Renseignez son nom, son expertise réelle et ses liens professionnels dans src/data/teamData.js.',
      en: 'Reserved slot for the second co-founder official profile. Add their real name, verified expertise, and professional links in src/data/teamData.js.'
    },
    skills: ['React / Next.js', 'Three.js / WebGL', 'UI/UX Design (Figma)', 'Design Systems'],
    linkedin: '',
    github: '',
    isConfigurable: true
  },
  {
    id: 'founder-03',
    slotLabel: 'CO-FONDATEUR 03 // CONFIGURATION REQUISE',
    name: {
      fr: 'Co-Fondateur 03 (À renseigner)',
      en: 'Co-Founder 03 (To configure)'
    },
    role: {
      fr: 'Stratégie Produit, Solutions Entreprise & Automatisation IA',
      en: 'Product Strategy, Enterprise Solutions & AI Automation'
    },
    bio: {
      fr: 'Emplacement réservé au profil officiel du troisième co-fondateur. Renseignez son nom, ses compétences vérifiées et ses liens dans src/data/teamData.js.',
      en: 'Reserved slot for the third co-founder official profile. Add their real name, verified skills, and links in src/data/teamData.js.'
    },
    skills: ['Applications Métier & ERP', 'Automatisation & IA', 'Pilotage Produit', 'Qualité & Sécurité'],
    linkedin: '',
    github: '',
    isConfigurable: true
  }
];
