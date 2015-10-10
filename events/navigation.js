Template.invictus_navigation.events({
    'click #navbar': function (event) {
        $(event.currentTarget).collapse('hide');
    }
});

Template.invictus_navigation_item.events({
    'click button': function (event) {
        var button = $(event.target);
        var route = button.data('route');

        if (route !== '') {
            Router.go(route);
        }
    },
    "click a": function (event) {
        Session.set("activeNavi", event.target.name);
    }
});
