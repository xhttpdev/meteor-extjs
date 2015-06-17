Response = {
    toJson: function (response, data) {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(data));
    }
};

ObjectID = function (id) {
    return new Meteor.Collection.ObjectID(id);
};

RestRouter = {};

RestRouter.route = function (url, config) {
    var defaults = {
        /**
         * @template
         * @param data
         */
        create: function (data) {
        },
        /**
         * @template
         */
        read: function () {
        },
        /**
         * @template
         * @param {ObjectId} id
         * @param data
         */
        update: function (id, data) {
        },
        /**
         * @param {ObjectId} id
         */
        destroy: function (id) {
        }
    };

    var options = Ext.apply({}, config, defaults);

    Router.route(url + '/:_id?', {where: 'server'})
        .get(function () {
            var data = options.read();

            Response.toJson(this.response, data);
        })
        .post(function () {
            var data = this.request.body;
            data._id = new ObjectID();

            options.create(data);

            Response.toJson(this.response, data);
        })
        .put(function () {
            var id = this.params._id;
            var data = this.request.body;

            options.update(new ObjectID(id), data);

            Response.toJson(this.response, data);
        })
        .delete(function () {
            var id = this.params._id;

            options.destroy(new ObjectID(id));

            Response.toJson(this.response, []);
        });
};
