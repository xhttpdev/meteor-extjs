Package.describe({
  name: 'invictus:extjs',
  version: '0.3.0',
  // Brief, one-line summary of the package.
  summary: 'ExtJs 5 Crisp Theme with Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/xhttpdev/meteor-extjs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {

    api.use('fortawesome:fontawesome@4.3.0', 'client');
    api.use('iron:router@1.0.0');

    api.addFiles([
        'extjs-5.1.1/resources/ext-theme-crisp-all_01.css',
        'extjs-5.1.1/resources/ext-theme-crisp-all_02.css',
        'extjs-5.1.1/ext-all-debug.js',
        'extjs-5.1.1/ext-theme-crisp-debug.js',
        'lib/RestStore.js'
    ], 'client');

    api.addFiles([
        'lib/Ext.js',
        'lib/RestRouter.js'
    ], 'server');

    api.export('RestRouter');
});
