import { getNavigationValue, getConfigValue } from '@brojs/cli';
const baseUrl = getNavigationValue('dhs-testing.main');

export const URLs = {
    baseUrl,
    ui: {
      main: getNavigationValue('dhs-testing.first') && `${baseUrl}${getNavigationValue('dhs-testing.first')}`,
      testlist: getNavigationValue('dhs-testing.testlist') && `${baseUrl}${getNavigationValue('dhs-testing.testlist')}`,
      enter: getNavigationValue('dhs-testing.enter') && `${baseUrl}${getNavigationValue('dhs-testing.enter')}`,
      registration: getNavigationValue('dhs-testing.registration') && `${baseUrl}${getNavigationValue('dhs-testing.registration')}`,
      record: getNavigationValue('dhs-testing.record') && `${baseUrl}${getNavigationValue('dhs-testing.record')}`,
      q: getNavigationValue('dhs-testing.q') && `${baseUrl}${getNavigationValue('dhs-testing.q')}`,
      lk: getNavigationValue('dhs-testing.lk') && `${baseUrl}${getNavigationValue('dhs-testing.lk')}`,
      result: getNavigationValue('dhs-testing.result') && `${baseUrl}${getNavigationValue('dhs-testing.result')}`
    },
    api: {
      main: getConfigValue('dhs-testing.api')
    },
  }