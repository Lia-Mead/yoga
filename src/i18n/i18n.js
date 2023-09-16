import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../i18n/en.json';
import deTranslation from '../i18n/de.json';
import heTranslation from '../i18n/he.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ...enTranslation,
      },
    },
    de: {
      translation: {
        ...deTranslation,
      },
    },
    he: {
      translation: {
        ...heTranslation,
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
