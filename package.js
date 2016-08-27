Package.describe({
    name: 'invictus:navigation',
    version: '0.9.0',
    // Brief, one-line summary of the package.
    summary: 'Bootstrap Navbar Administration',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/xhttpdev/meteor-navigation.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.4.1.1');

    api.use([
        'session',
        'templating',
        'npm-bcrypt',
        'iron:router@1.0.12',
        'fourseven:scss@3.8.0_1',
        'accounts-password@1.1.1',
        'invictus:messages@0.10.0',
        'ecmascript',
        'mongo'
    ]);

    api.addFiles([
        'lib/NestedData.js',
        'lib/Sorting.js',
        'navigation.js',
        'views/navigation.html',
        'views/settings.html',
        'helpers/navigation.js',
        'helpers/settings.js',
        'events/navigation.js',
        'events/settings.js',
        'routes.js',
        'styles.scss'
    ], 'client');

    api.addFiles([
        'server/settings.js'
    ], 'server');

    api.export('Navigation');
    api.export('NestedData');
});
