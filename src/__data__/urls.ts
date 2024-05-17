import { getNavigationsValue } from '@ijl/cli';
import { generatePath } from 'react-router-dom';

const baseUrl = getNavigationsValue('dhs-testing.main');

export const URLs = {
  baseUrl,
  ui: {
    main: getNavigationsValue('dhs-testing.main') && `${baseUrl}${getNavigationsValue('dhs-testing.main')}`,
    testlist: getNavigationsValue('dhs-testing.testlist') && `${baseUrl}${getNavigationsValue('dhs-testing.testlist')}`,
    enter: getNavigationsValue('dhs-testing.enter') && `${baseUrl}${getNavigationsValue('dhs-testing.enter')}`,
    registration: getNavigationsValue('dhs-testing.registration') && `${baseUrl}${getNavigationsValue('dhs-testing.registration')}`,
    record: getNavigationsValue('dhs-testing.record') && `${baseUrl}${getNavigationsValue('dhs-testing.record')}`,
    lk: getNavigationsValue('dhs-testing.lk') && `${baseUrl}${getNavigationsValue('dhs-testing.lk')}`,
    /* charDetail: {
      url: `${baseUrl}${getNavigationsValue('r-and-m.character.detail')}`,
      on: Boolean(getNavigationsValue('r-and-m.character.detail')),
      getUrl: (charId: number) => generatePath(`${baseUrl}${getNavigationsValue('r-and-m.character.detail')}`, { charId })
    } */
  },
  api: {},
}