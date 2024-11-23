const pkg = require('./package')

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
    }
  },
  /* use https://admin.bro-js.ru/ to create config, navigations and features */
  navigations: {
    'dhs-testing.main': '/dhs-testing',
    'link.dhs-testing.auth': '/auth'
  },
  features: {
    'dhs-testing': {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    'dhs-testing.api': '/api'
  }
}
