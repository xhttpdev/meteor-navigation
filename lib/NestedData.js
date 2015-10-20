NestedData = {
    remove: function (collection, data, nestedField) {
        var cursor = collection.findOne({_id: data.parentId});

        var index = _.findIndex(cursor[nestedField], function (node) {
            if (node._id === data._id) {
                return true;
            }
        });

        _.pullAt(cursor[nestedField], index);

        return cursor;
    },
    update: function (collection, data, nestedField) {
        var cursor = collection.findOne({_id: data.parentId});

        var index = _.findIndex(cursor[nestedField], function (node) {
            if (node._id === data._id) {
                return true;
            }
        });

        cursor[nestedField][index] = data;

        return cursor;
    },
    updateCursor: function(cursor, data, nestedField) {
        var index = _.findIndex(cursor[nestedField], function (node) {
            if (node._id === data._id) {
                return true;
            }
        });

        cursor[nestedField][index] = data;

        return cursor;
    },

    switchPositions: function (collection, data, direction, nestedField, posField) {
        var newPos = data[posField] + direction;

        var cursor = collection.findOne({_id: data.parentId});

        var node = _.find(cursor[nestedField], function (node) {
            if (node[posField] === newPos) {
                return true;
            }
        });

        if (node !== undefined) {
            node[posField] = data[posField];
            data[posField] = newPos;

            cursor = this.updateCursor(cursor, data, nestedField);
            cursor = this.updateCursor(cursor, node, nestedField);

            var result =_.sortByOrder(cursor[nestedField], [posField], ['asc']);

            cursor[nestedField] = result;
        }

        return cursor;
    }
};
