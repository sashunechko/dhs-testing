import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      in: 'Sign in',
      reg: 'Sign up',
      tests: 'Tests',
      account: 'Account'
    },
  },
  ru: {
    translation: {
      in: 'Войти',
      reg: 'Регистрация',
      tests: 'Тесты',
      account: 'Личный кабинет'
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;