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
         *
         * @param {Object} data
         * @return {String}
         */
        create: function (data) {
        },
        /**
         * @template
         *
         * @param {Object} filters
         * @param {Object} sorters
         * @param {Object} options
         */
        read: function (filters, sorters, options) {
        },
        /**
         * @template
         *
         * @param {String} id
         * @param {Object} data
         */
        update: function (id, data) {
        },
        /**
         * @template
         *
         * @param {String} id
         */
        destroy: function (id) {
        }
    };

    var options = _.extend(defaults, config);

    Router.route(url + '/:_id?', {where: 'server'})
        .get(function () {
            var params = this.request.query;
            var filters = {};
            var sorters = {};
            var tryDate;

            if (params.filter) {
                _.each(JSON.parse(params.filter), function (filter) {

                    filters[filter.property] = filter.value;

                    // bugfix - because meteor can't filter date from client
                    _.forIn(filters, function (value, key) {
                        if (_.isObject(value)) {
                            _.forIn(value, function (subvalue, subkey) {
                                tryDate = new Date(subvalue);
                                if (_.isDate(tryDate)) {
                                    filters[key][subkey] = moment(subvalue).toDate();
                                }
                            });
                        } else {
                            tryDate = new Date(value);
                            if (_.isDate(tryDate)) {
                                filters[key] = moment(value).toDate();
                            }
                        }

                    });
                    // ----

                });
            }

            if (params.sort) {
                _.each(JSON.parse(params.sort), function (sorter) {
                    sorters[sorter.property] = (sorter.direction.toUpperCase() == 'ASC') ? 1 : -1;
                });
            }

            var data = options.read(filters, sorters, params);

            Response.toJson(this.response, data);
        })
        .post(function () {
            var data = this.request.body;

            data._id = options.create(data);

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
