Package.describe({
  name: 'domain-package',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');
  api.use('ecmascript');
  api.use('mongo');
  api.use('jagi:astronomy@2.0.0-rc.8');

  api.addFiles('item.js');

  api.export([
      'Items',
      'Item'
  ]);
});
