Template.invictus_navigation.helpers({
    dataCollapsable: function () {
        return NavigationCollection.find({collapsable: true}, {sort: {'pos': 1}});
    },

    dataNotCollapsable: function () {
        return NavigationCollection.find({collapsable: false}, {sort: {'pos': 1}});
    },

    getBrand: function () {
        return Navigation.settings.brand;
    },

    getFixedPos: function () {
        return Navigation.settings.fixedPos;
    },

    isFixed: function () {
        return Navigation.settings.fixed !== false;
    },

    isInverse: function () {
        return Navigation.settings.inverse !== false;
    },

    showLogout: function () {
        return Navigation.settings.showLogout;
    },

    showAccount: function () {
        return Navigation.settings.showAccount;
    },

    isButton: function (type) {
        return type === 'button';
    },

    isLink: function (type) {
        return type === 'link';
    },

    isActive: function (url) {
        return (Session.get('activeUrl') === '/' + url);
    }
});

Template.invictus_navigation_item_collapsable.helpers({
    isText: function () {
        return (this.type === 'text');
    },

    isActive: function () {
        return (Session.get('activeUrl') === '/' + this.route);
    }
});

Template.invictus_navigation_item_not_collapsable.helpers({
    isButton: function () {
        return (this.type === 'button');
    },

    isActive: function () {
        return (Session.get('activeUrl') === '/' + this.route);
    }
});
