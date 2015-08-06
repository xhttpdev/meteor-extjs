Ext = {};

for (i in {
    toString: 1
}) {
    enumerables = null;
}

Ext.enumerables = enumerables;

Ext.apply = function(object, config, defaults) {
    if (defaults) {
        Ext.apply(object, defaults);
    }
    if (object && config && typeof config === 'object') {
        var i, j, k;
        for (i in config) {
            object[i] = config[i];
        }
        if (enumerables) {
            for (j = enumerables.length; j--; ) {
                k = enumerables[j];
                if (config.hasOwnProperty(k)) {
                    object[k] = config[k];
                }
            }
        }
    }
    return object;
};

// ExtJS debug mode will prompt a warning when this meta is not present in HEAD.
// `Inject.rawHead` requires "meteorhacks:inject-initial" package.
Inject.rawHead('ext-viewport', '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">');
