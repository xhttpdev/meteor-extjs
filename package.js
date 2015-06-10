Package.describe({
  name: 'invictus:extjs',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'ExtJs 5 Crisp Theme with Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/xhttpdev/meteor-extjs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.addFiles([
        'client/lib/resources/extjs-5.1.1/resources/ext-theme-crisp-all.css',
        'client/lib/extjs-5.1.1/ext-all-debug.js',
        'client/lib/extjs-5.1.1/ext-theme-crisp-debug.js'
});

//Package.onUse(function(api) {
//  api.addFiles('extjs-5.1.1/resources/ext-theme-crisp-all-debug.css', 'client');
//  api.addFiles('extjs-5.1.1/ext-all-debug.js', 'client');
//  api.addFiles('extjs-5.1.1/ext-theme-crisp-debug.js', 'client');
//});
