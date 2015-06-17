Ext.define('RestStore', {
    extend: 'Ext.data.Store',

    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};

        me.callParent([
            Ext.apply({
                autoSync: true,
                proxy: {
                    type: 'rest',
                    url: cfg.restUrl,
                    writer: {
                        type: 'json',
                        writeRecordId: false
                    }
                },
                autoLoad: true
            }, cfg)
        ]);
    }
});
