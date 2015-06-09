Package.describe({
  name: 'invictus:extjs',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/xhttpdev/meteor-extjs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.addFolder('extjs-5.1.1/resources/images', 'client');
    api.addFiles('extjs-5.1.1/resources/ext-theme-crisp-all.css', 'client');
    api.addFiles('extjs-5.1.1/ext-all.js', 'client');
    api.addFiles('extjs-5.1.1/ext-theme-crisp.js', 'client');
});

Package.onTest(function(api) {
    api.addFolder('extjs-5.1.1/resources/images', 'client');
    api.addFiles('extjs-5.1.1/resources/ext-theme-crisp-all-debug.css', 'client');
    api.addFiles('extjs-5.1.1/ext-all-debug.js', 'client');
    api.addFiles('extjs-5.1.1/ext-theme-crisp-debug.js', 'client');
});
