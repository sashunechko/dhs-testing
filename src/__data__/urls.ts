import { getNavigationsValue } from '@ijl/cli';

const baseUrl = getNavigationsValue('dhs-testing.main');

export const URLs = {
  baseUrl,
  ui: {
    main: getNavigationsValue('dhs-testing.first') && `${baseUrl}${getNavigationsValue('dhs-testing.first')}`,
    testlist: getNavigationsValue('dhs-testing.testlist') && `${baseUrl}${getNavigationsValue('dhs-testing.testlist')}`,
    enter: getNavigationsValue('dhs-testing.enter') && `${baseUrl}${getNavigationsValue('dhs-testing.enter')}`,
    registration: getNavigationsValue('dhs-testing.registration') && `${baseUrl}${getNavigationsValue('dhs-testing.registration')}`,
    record: getNavigationsValue('dhs-testing.record') && `${baseUrl}${getNavigationsValue('dhs-testing.record')}`,
    q: getNavigationsValue('dhs-testing.q') && `${baseUrl}${getNavigationsValue('dhs-testing.q')}`,
    lk: getNavigationsValue('dhs-testing.lk') && `${baseUrl}${getNavigationsValue('dhs-testing.lk')}`,
    result: getNavigationsValue('dhs-testing.result') && `${baseUrl}${getNavigationsValue('dhs-testing.result')}`
  },
  api: {},
}