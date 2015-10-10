Router.onBeforeAction(function () {
    Session.set("activeUrl", this.url);
    this.next();
});

Router.route('/navigation_settings', function () {
    this.render('invictus_navigation_settings');
}, {
    name: 'navigation'
});
