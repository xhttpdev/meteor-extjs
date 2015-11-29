/**
 * @class RestStore
 * @extends Ext.data.Store
 */
Ext.define('RestStore', {
    extend: 'Ext.data.Store',

    restUrl: '/',

    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};

        me.callParent([
            Ext.apply({
                proxy: {
                    type: 'rest',
                    url: me.restUrl,
                    writer: {
                        type: 'json',
                        writeRecordId: false
                    }
                }
            }, cfg)
        ]);
    }
});
