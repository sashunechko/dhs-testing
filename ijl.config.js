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
    'dhs-testing.main': '/dhs-testing'
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
