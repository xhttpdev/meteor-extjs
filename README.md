# invictus:meteor-extjs #

Optimized for REST

## Quick Start ##

    $ meteor add invictus:extjs
    
You will get a route for:

    /

Template `extjs_body` is automatically rendered

Create your `app.js` in `client/app.js`

### app.js ###

    Ext.Loader.setConfig({
        enabled: true,
    });
    
    Ext.application({
        name: 'MyApp',
        autoCreateViewport: 'Viewport',
    });
    
Put your app code in `public` directory so Ext.Loader can find your files:

    /public
        /app
            /model
            /store
            /view

## Usage ##

### Client ###

    Ext.define('User', {
        extend: 'Ext.data.Model',
        idProperty: '_id',
        fields: [
            {name: '_id', type: 'string'},
            {name: 'firstName', type: 'string'},
            {name: 'lastName', type: 'string'},
            {name: 'age', type: 'int'}
        ]
    });

    Ext.define('MyStore', {
        extend: 'RestStore',
        
        model: 'User',

        restUrl: '/restful'
    });

### Server ###

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
