Template.invictus_navigation.helpers({
    data: function () {
        return NavigationCollection.find({});
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

Template.invictus_navigation_item.helpers({
    isText: function () {
        return (this.type === 'text');
    },

    isActive: function () {
        return (Session.get('activeUrl') === '/' + this.route);
    }
});
