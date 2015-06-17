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
