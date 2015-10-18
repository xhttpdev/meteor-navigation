NavigationCollection = new Mongo.Collection("navigation");

Meteor.publish("navigation", function () {
    return NavigationCollection.find({});
});

Meteor.methods({
    addNavigationNode: function (data) {
        if (!Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }

        NavigationCollection.insert(data);
    },

    updateNavigationNode: function (id, data) {
        if (!Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }

        NavigationCollection.update(id, {$set : data});
    },

    deleteNavigationNode: function (id) {
        if (!Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }

        NavigationCollection.remove(id);
    }
});
