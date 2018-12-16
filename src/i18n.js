import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import plLocaleData from 'react-intl/locale-data/pl';

import enTranslationMessages from './translations/en.json';
import plTranslationMessages from './translations/pl.json';

addLocaleData(enLocaleData);
addLocaleData(plLocaleData);

const LOCALES = {
  ENGLISH: 'en',
  POLISH: 'pl',
};

export const DOMAIN_LOCALES = {
  [process.env.REACT_APP_EN_DOMAIN]: LOCALES.ENGLISH,
  [process.env.REACT_APP_PL_DOMAIN]: LOCALES.POLISH,
};

export const DEFAULT_LOCALE = LOCALES.ENGLISH;

export const INITIAL_LOCALE = DOMAIN_LOCALES[location.hostname] || DEFAULT_LOCALE;

export const appLocales = [LOCALES.ENGLISH, LOCALES.POLISH];

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
      ? defaultFormattedMessages[key]
      : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

export const translationMessages = {
  [LOCALES.ENGLISH]: formatTranslationMessages(LOCALES.ENGLISH, enTranslationMessages),
  [LOCALES.POLISH]: formatTranslationMessages(LOCALES.POLISH, plTranslationMessages),
};
