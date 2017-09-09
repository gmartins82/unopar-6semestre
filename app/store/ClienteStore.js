Ext.define('Unopar.store.ClienteStore', {
    extend: 'Ext.data.Store',
    alias: 'store.ClienteStore',
    requires: [
        'Unopar.model.ClienteModel'
    ],
    model: 'Unopar.model.ClienteModel',
    proxy: {
        type: 'ajax',
        url : '/data/clientes.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});