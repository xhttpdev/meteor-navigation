NavigationCollection = new Mongo.Collection("navigation");

Meteor.subscribe("navigation");

Template.invictus_navigation_settings.helpers({
    data: function () {
        return NavigationCollection.find({}, {sort: {'pos': 1}});
    },
    getTypeState: function (type) {
        return (this.type === type) ? 'active' : '';
    }
});
