import { getNavigations, getNavigationsValue } from '@brojs/cli';

import pkg from '../../package.json';

const baseUrl = getNavigationsValue(`${pkg.name}.main`);
const navs = getNavigations();
const makeUrl = url => baseUrl + url;

export const URLs = {
    baseUrl,
    auth: {
        url: makeUrl(navs[`link.${pkg.name}.auth`]),
    },
};