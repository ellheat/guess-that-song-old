import { map, mergeAll, pipe } from 'ramda';
import countriesEn from './countriesEn';
import countriesEs from './countriesEs';

const mapCountriesCodesToNames = pipe(
  map(({ name, code }) => ({ [code]: name })),
  mergeAll,
);

export const countriesNamesMap = {
  en: mapCountriesCodesToNames(countriesEn),
  es: mapCountriesCodesToNames(countriesEs),
};

export default {
  en: countriesEn,
  es: countriesEs,
};
