// import i18n from 'i18next';
// import LngDetector from 'i18next-browser-languagedetector';
// import Backend from 'i18next-chained-backend';
// import XHR from 'i18next-xhr-backend';
// import LocalStorageBackend from 'i18next-localstorage-backend';
//
// import config from '../config';
//
// i18n
//   .use(LngDetector)
//   .use(Backend)
//   .init({
//     debug: true,
//     interpolation: { defaultVariables: config },
//
//     whitelist: ['en'],
//     fallbackLng: 'en',
//
//     ns: ['common'],
//     defaultNS: 'common',
//
//     react: {
//       wait: true,
//       nsMode: 'default'
//     },
//
//     detection: {
//       order: ['localStorage', 'navigator'],
//       caches: ['localStorage'],
//     },
//
//     backend: {
//       backends: [
//         LocalStorageBackend,
//         XHR
//       ],
//       backendOptions: [
//         {
//           prefix: 'i18next_res_',
//           expirationTime: 7 * 24 * 60 * 60 * 1000 // 7 days
//         },
//         {
//           loadPath: './assets/locales/{{lng}}/{{ns}}.json',
//         }
//       ]
//     }
//   });
//
// export default i18n;


import i18next from 'i18next';
import XHR from 'i18next-xhr-backend';
import langDetector from 'i18next-browser-languagedetector';

const en = {
  auth: require('../../assets/locales/en/auth.json'),
  common: require('../../assets/locales/en/common.json'),
  wallets: require('../../assets/locales/en/wallets.json'),
  wallet: require('../../assets/locales/en/wallet.json')
};

const ru = {
  auth: require('../../assets/locales/ru/auth.json'),
  common: require('../../assets/locales/ru/common.json'),
  wallets: require('../../assets/locales/ru/wallets.json'),
};

i18next
  .use(XHR)
  .use(langDetector)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    react: {
      wait: true,
      nsMode: 'default'
    },
    resources: { en, ru },
    interpolation: {
      // defaultVariables: config
    },
    ns: ['common'],
    defaultNS: 'common'
  });

export default i18next;
