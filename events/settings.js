Template.invictus_navigation_settings.events({
    "click .new": function (event) {
        Meteor.call("addNavigationNode", {
            text: '',
            route: '',
            hidden: true,
            type: 'text',
            collapsable: true
        });
    },
    'change input': function (event) {
        var data = this;

        switch (event.target.type) {
            case 'text':
            case 'radio':
                data[event.target.name] = event.target.value;
                break;
            case 'checkbox':
                data[event.target.name] = event.target.checked;
                break;
        }

        Meteor.call("updateNavigationNode", this._id, data);
    },
    'click .type-text': function (event) {
        var data = this;

        data.type = 'text';

        Meteor.call("updateNavigationNode", this._id, data);
    },
    'click .type-button': function (event) {
        var data = this;

        data.type = 'button';

        Meteor.call("updateNavigationNode", this._id, data);
    }
});
