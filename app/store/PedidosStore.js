Ext.define('Unopar.store.PedidosStore', {
    extend: 'Ext.data.Store',
    alias: 'store.PedidosStore',
    requires: [
        'Unopar.model.PedidosModel'
    ],
    model: 'Unopar.model.PedidosModel',
    proxy: {
        type: 'ajax',
        url : '/data/pedidos.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});