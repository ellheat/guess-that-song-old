import { createSelector } from 'reselect';
import { memoizeWith, identity } from 'ramda';
import { appLocales } from '../../i18n';

const getNextLanguage = memoizeWith(identity, (currentLanguage) => {
  return appLocales.find((language) => (currentLanguage !== language));
});

const selectLocalesDomain = state => state.locales;

export const selectLocalesLanguage = createSelector(
  selectLocalesDomain, state => state.get('language')
);

export const selectLocalesNextLanguage = createSelector(
  selectLocalesDomain, state => getNextLanguage(state.get('language'))
);
