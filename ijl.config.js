const pkg = require('./package')

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
    }
  },
  /* use https://kc.admin.inno-js.ru/ to create config, navigations and features */
  navigations: {
    'dhs-testing.main': '/dhs-testing',
    "dhs-testing.testlist": "/testlist",
    "dhs-testing.lk": "/lk",
    "dhs-testing.record": "/record",
    "dhs-testing.enter": "/enter",
    "dhs-testing.registration": "/registration",
    "dhs-testing.first": "/main",
  },
  features: {
    'dhs-testing': {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    key: 'value'
  }
}
