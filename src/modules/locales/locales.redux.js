import { Record } from 'immutable';
import { createReducer, createActions } from 'reduxsauce';

import { INITIAL_LOCALE } from '../../i18n';

export const { Types: LocalesTypes, Creators: LocalesActions } = createActions({
  setLanguage: ['language'],
}, { prefix: 'LOCALES_' });

export const LocalesRecord = new Record({
  language: INITIAL_LOCALE,
}, 'Locales');

export const INITIAL_STATE = new LocalesRecord({});

export const setLanguageHandler = (state = INITIAL_STATE, action) => state.set('language', action.language);
export const HANDLERS = {
  [LocalesTypes.SET_LANGUAGE]: setLanguageHandler,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);

