# invictus:meteor-extjs #

Optimized for REST

## EXAMPLE ##

### client ###

    Ext.define('User', {
        extend: 'Ext.data.Model',
        idProperty: '_id',
        fields: [
            {
                name: '_id',
                type: 'string',
                convert: function (v) {
                    return v._str;
                }
            },
            {name: 'firstName', type: 'string'},
            {name: 'lastName', type: 'string'},
            {name: 'age', type: 'int'}
        ]
    });
    
    Ext.create('RestStore', {
        model: 'User',
    
        restUrl: '/restful'
    });

### server ###

    Users = new Mongo.Collection("users");
    
    RestRouter.route('/restful', {
        create: function (data) {
            Users.insert(data);
        },
        read: function () {
            return Users.find().fetch();
        },
        update: function (id, data) {
            Users.update(id, {$set: data});
        },
        destroy: function (id) {
            Users.remove(id);
        }
    });
