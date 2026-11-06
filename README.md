# ONYX LABS — Plateforme Web Officielle ("Black Tech Luxury")

> **"WE ENGINEER WHAT'S NEXT."**
> *Turning ambitious ideas into powerful digital experiences.*

Ce dépôt contient l'architecture complète du site web officiel d'**ONYX LABS**, agence indépendante d'ingénierie logicielle, de développement de plateformes numériques et de systèmes intelligents fondée par trois co-fondateurs et opérant au Cameroun, en Afrique, en Europe, au Canada et à l'international.

---

## 1. Stack Technique

- **Framework UI** : React 18 + Vite (JavaScript ES2023+, sans TypeScript conformément au cahier des charges)
- **Styling & Design System** : Tailwind CSS + CSS Variables (Thèmes Dark `#080A0F` par défaut & Light `#F8F9FC`)
- **Routage** : React Router v6 (7 routes dédiées)
- **Expériences 3D Temps Réel** : Three.js + React Three Fiber + `@react-three/drei` (avec fallback WebGL et pause hors-écran via `IntersectionObserver`)
- **Animations & Motion Design** : GSAP + ScrollTrigger + Framer Motion (respect strict de `prefers-reduced-motion`)
- **Internationalisation (i18n)** : `i18next` + `react-i18next` (100% bilingue Français / Anglais)
- **Icônes & Logos** : Lucide React + Logos SVG officiels Simple Icons pour le Marquee technologique

---

## 2. Architecture du Projet

```text
src/
├── assets/         # Ressources visuelles optimisées
├── components/     # Composants transverses
├── layout/         # MainLayout, gestion du scroll et transitions de pages
├── navigation/     # Navbar sticky avec blur, menu mobile animé, Footer
├── ui/             # MagneticButton, TiltCard, CustomCursor, StatusBadge
├── animations/     # ScrollReveal, SplitHeading, contrôleurs GSAP ScrollTrigger
├── three/          # OnyxHeroScene.jsx, ServiceOrbCanvas.jsx (scènes Three.js)
├── sections/       # Les 11 sections modulaires de la page d'accueil
├── pages/          # Home, Services, Projects, ProjectDetail, About, Contact, RequestQuote
├── data/           # siteConfig.js, servicesData.js, projectsData.js, teamData.js, technologiesData.js
├── hooks/          # useTheme.js, useReducedMotion.js, useMagnetic.js
├── i18n/           # Dictionnaires complets fr.js et en.js
├── styles/         # Tokens CSS Dark/Light et utilitaires d'animation
└── utils/          # formService.js (envoi réel + secours mailto/WhatsApp), seo.js
```

---

## 3. Configuration des Données Fondateurs, Projets et Formulaires

Conformément aux règles d'éthique et de transparence d'ONYX LABS :
1. **Trois Co-Fondateurs (`src/data/teamData.js`)** : Aucun nom ou diplôme fictif n'a été inventé. Ouvrez `src/data/teamData.js` (ou utilisez le panneau **Configuration Équipe & Endpoints** intégré à l'interface) pour renseigner les noms, fonctions, biographies et liens LinkedIn/GitHub officiels des 3 fondateurs.
2. **Formulaires Contact & Demande de Devis (`.env`)** :
   - Copiez `.env.example` vers `.env`.
   - Renseignez `VITE_CONTACT_ENDPOINT` et `VITE_QUOTE_ENDPOINT` (ex. votre backend Node.js/Express, Formspree ou Web3Forms), ainsi que `VITE_CONTACT_EMAIL` et `VITE_WHATSAPP_NUMBER`.
   - Tant qu'aucun endpoint HTTP n'est renseigné, l'interface **ne simule jamais un faux envoi réussi** : elle informe clairement l'utilisateur et lui permet de transmettre instantanément sa demande formatée par **Email direct (`mailto:`)**, **WhatsApp pré-rempli**, ou **Export JSON / Copie presse-papiers**.

---

## 4. Lancement Local & Déploiement

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Générer le build de production optimisé
npm run build

# 4. Prévisualiser le build de production
npm run preview
```
# onyx-labs
