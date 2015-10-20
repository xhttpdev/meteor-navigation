Sorting = {
    switchPositions: function (data, direction) {
        var newPos = data.pos + direction;

        var cursor = NavigationCollection.findOne({pos: newPos});

        if (cursor !== undefined) {
            cursor.pos = data.pos;
            data.pos = newPos;

            Meteor.call("updateNavigationNode", data._id, data);
            Meteor.call("updateNavigationNode", cursor._id, cursor);
        }
    },
    calcPositions: function () {
        var pos = 1;
        var nodePos;

        Deps.autorun(function (c) {
            var collection = NavigationCollection.find({}, {sort: {'pos': 1}});
            if (!collection.count()) return;

            collection.forEach(function (cursor) {
                cursor.pos = pos++;
                nodePos = 1;

                if (cursor.nodes) {
                    cursor.nodes.forEach(function(node,index) {
                        cursor.nodes[index].pos = nodePos++;
                    });
                }

                Meteor.call("updateNavigationNode", cursor._id, cursor);
            });

            c.stop();
        });
    }
};
