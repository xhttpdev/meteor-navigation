Template.invictus_navigation.events({
    'click #navbar': function (event) {
        if (!$(event.target).hasClass('dropdown-toggle')) {
            $(event.currentTarget).collapse('hide');
        }
    }
});

Template.invictus_navigation_item_collapsable.events({
    'click button': function (event) {
        var button = $(event.target);
        var route = button.data('route');

        if (route !== '' && route !== undefined) {
            Router.go(route);
        }
    },
    "click a": function (event) {
        Session.set("activeNavi", event.target.name);
    }
});
