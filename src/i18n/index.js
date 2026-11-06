import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLang = (() => {
  try {
    return localStorage.getItem('onyx_lang') || 'fr';
  } catch (e) {
    return 'fr';
  }
})();

export const resources = {
  fr: {
    translation: {
      slogan: "WE ENGINEER WHAT'S NEXT.",
      subheadline: 'Turning ambitious ideas into powerful digital experiences.',
      heroBody: 'Nous transformons les idées ambitieuses en produits numériques puissants grâce à l’ingénierie logicielle, aux systèmes intelligents et aux technologies créatives.',
      nav: {
        home: 'Accueil',
        services: 'Services',
        projects: 'Projets',
        about: 'À propos',
        contact: 'Contact',
        quote: 'Demander un devis'
      }
    }
  },
  en: {
    translation: {
      slogan: "WE ENGINEER WHAT'S NEXT.",
      subheadline: 'Turning ambitious ideas into powerful digital experiences.',
      heroBody: 'We transform ambitious ideas into powerful digital products through software engineering, intelligent systems and creative technology.',
      nav: {
        home: 'Home',
        services: 'Services',
        projects: 'Projects',
        about: 'About',
        contact: 'Contact',
        quote: 'Get a quote'
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang,
  fallbackLng: 'fr',
  interpolation: { escapeValue: false }
});

export default i18n;
