require.config
  deps: ['main']
  paths:
    'jquery': 'libs/jquery-1.7.1'
    'underscore': 'libs/underscore-1.3.2'
    'webshim': 'plugins/webshim-1.8.9/polyfiller'
    'chosen': 'plugins/chosen/chosen.jquery'
  shim:
    'webshim':
      deps: ['jquery']
      exports: 'webshim'
    'chosen':
      deps: ['jquery']
      exports: 'chosen'
    'jquery':
      exports: '$'