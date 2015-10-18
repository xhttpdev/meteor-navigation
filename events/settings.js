Template.invictus_navigation_settings.events({
    'click .new': function (event) {
        var cursor = NavigationCollection.findOne({}, {sort: {'pos': 'DESC'}});
        var pos = 1;

        if (cursor !== undefined) {
            pos = cursor.pos + 1;
        }

        Meteor.call("addNavigationNode", {
            text: '',
            route: '',
            hidden: true,
            type: 'text',
            collapsable: true,
            pos: pos
        });
    },
    'click .delete': function (event) {
        var me = this;

        Alert.dialog(
            {
                title: 'Achtung!',
                message: 'Soll der Navigationspunkt <strong>' + this.text + '</strong> wirklich gelöscht werden?',
                buttons: Alert.YESNO,
                icon: Alert.WARNING,
                callback: function (btn) {
                    if (btn === 'yes') {
                        Meteor.call('deleteNavigationNode', me._id);
                    }
                }
            }
        );
    },
    'click .up': function (event) {
        var data = this;
        var newPos = data.pos - 1;

        var cursor = NavigationCollection.findOne({pos: newPos});

        if (cursor !== undefined) {
            cursor.pos = data.pos;
            data.pos = newPos;

            Meteor.call("updateNavigationNode", data._id, data);
            Meteor.call("updateNavigationNode", cursor._id, cursor);
        }
    },
    'click .down': function (event) {
        var data = this;
        var newPos = data.pos + 1;

        var cursor = NavigationCollection.findOne({pos: newPos});

        if (cursor !== undefined) {
            cursor.pos = data.pos;
            data.pos = newPos;

            Meteor.call("updateNavigationNode", data._id, data);
            Meteor.call("updateNavigationNode", cursor._id, cursor);
        }
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
