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
            pos: pos,
            option: 'default'
        });
    },
    'click .main-buttons .delete': function (event) {
        var data = this;

        if (confirm(Navigation.getText('deleteConfirmationText', {text: data.text}))) {
            Meteor.call('deleteNavigationNode', data._id, function () {
                Sorting.calcPositions();
            });
        }
    },
    'click .main-buttons .up': function (event) {
        Sorting.switchPositions(this, -1);
    },
    'click .main-buttons .down': function (event) {
        Sorting.switchPositions(this, 1);
    },
    'click .main-buttons .edit': function (event) {
        Session.set('navigationData', this);

        $('#navigation-modal').modal('show');
    },
    'click .main-buttons .add': function (event) {
        var data = this;
        var pos = 1;

        if (!data.nodes) {
            data.nodes = [];
        }

        var last = _.last(data.nodes);

        if (last) {
            pos = last.pos + 1;
        }

        data.nodes.push({
            _id: Random.id(),
            text: '',
            route: '',
            hidden: true,
            pos: pos,
            parentId: data._id
        });

        Meteor.call("updateNavigationNode", data._id, data);
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
    }
});

Template.invictus_navigation_node.events({
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

        var cursor = NestedData.update(NavigationCollection, data, 'nodes');

        Meteor.call("updateNavigationNode", cursor._id, cursor);
    },
    'click .node-buttons .delete': function (event) {
        var data = this;

        if (confirm(Navigation.getText('deleteConfirmationText', {text: data.text}))) {
            var cursor = NestedData.remove(NavigationCollection, data, 'nodes');
            Meteor.call("updateNavigationNode", cursor._id, cursor, function() {
                Sorting.calcPositions();
            });
        }
    },
    'click .node-buttons .up': function (event) {
        var data = this;
        var cursor = NestedData.switchPositions(NavigationCollection, data, -1, 'nodes', 'pos');

        Meteor.call("updateNavigationNode", cursor._id, cursor);
    },
    'click .node-buttons .down': function (event) {
        var data = this;
        var cursor = NestedData.switchPositions(NavigationCollection, data, 1, 'nodes', 'pos');

        Meteor.call("updateNavigationNode", cursor._id, cursor);
    }
});

Template.invictus_settings_modal.events({
    'submit form': function (event) {
        event.preventDefault();
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

        if (data.collapsable === false) {
            data.type = 'button';
        }

        Session.set('navigationData', data);
        Meteor.call("updateNavigationNode", this._id, data);
    },
    'change .option': function (event) {
        var data = this;

        data.option = event.target.value;

        Session.set('navigationData', data);
        Meteor.call("updateNavigationNode", this._id, data);
    },
    'click .type-text': function (event) {
        var data = this;

        data.type = 'text';

        if (data.collapsable === false) {
            data.type = 'button';
        }

        Session.set('navigationData', data);
        Meteor.call("updateNavigationNode", this._id, data);
    },
    'click .type-button': function (event) {
        var data = this;

        data.type = 'button';

        Session.set('navigationData', data);
        Meteor.call("updateNavigationNode", this._id, data);
    },
    'click .type-dropdown': function (event) {
        var data = this;

        data.type = 'dropdown';

        Session.set('navigationData', data);
        Meteor.call("updateNavigationNode", this._id, data);
    }
});
