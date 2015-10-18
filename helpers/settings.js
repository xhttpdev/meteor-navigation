NavigationCollection = new Mongo.Collection("navigation");

Meteor.subscribe("navigation");

Template.invictus_navigation_settings.helpers({
    data: function () {
        return NavigationCollection.find({}, {sort: {'pos': 1}});
    },
    options: function () {
      return [
          {name: 'default'},
          {name: 'primary'},
          {name: 'success'},
          {name: 'info'},
          {name: 'warning'},
          {name: 'danger'},
          {name: 'link'}
      ];
    },
    optionIsActive: function (option) {
        return (this.name === option);
    },
    getTypeState: function (type) {
        return (this.type === type) ? 'active' : '';
    }
});
