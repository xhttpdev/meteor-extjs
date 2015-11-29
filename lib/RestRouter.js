Response = {
    toJson: function (response, data) {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(data));
    }
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

    var options = _.extend(defaults, config);

    Router.route(url + '/:_id?', {where: 'server'})
        .get(function () {
            var data = options.read();

            Response.toJson(this.response, data);
        })
        .post(function () {
            var data = this.request.body;

            options.create(data);

            Response.toJson(this.response, data);
        })
        .put(function () {
            var id = this.params._id;
            var data = this.request.body;

            options.update(id, data);

            Response.toJson(this.response, data);
        })
        .delete(function () {
            var id = this.params._id;

            options.destroy(id);

            Response.toJson(this.response, []);
        });
};
