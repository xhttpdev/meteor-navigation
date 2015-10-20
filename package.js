Package.describe({
    name: 'invictus:navigation',
    version: '0.8.0',
    // Brief, one-line summary of the package.
    summary: 'Bootstrap Navbar Administration',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/xhttpdev/meteor-navigation.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.0.2');

    api.use([
        'session',
        'templating',
        'iron:router@1.0.12',
        'fourseven:scss@3.2.0',
        'accounts-password@1.1.1',
        'ecmascript',
        'mongo'
    ]);

    api.addFiles([
        'styles.scss',
        'lib/NestedData.js',
        'lib/Sorting.js',
        'navigation.js',
        'views/navigation.html',
        'views/settings.html',
        'helpers/navigation.js',
        'helpers/settings.js',
        'events/navigation.js',
        'events/settings.js',
        'routes.js'
    ], 'client');

    api.addFiles([
        'server/settings.js'
    ], 'server');

    api.export('Navigation');
    api.export('NestedData');
});
