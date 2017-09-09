Ext.define('Unopar.store.ProdutosStore', {
    extend: 'Ext.data.Store',
    alias: 'store.ProdutosStore',
    requires: [
        'Unopar.model.ProdutosModel'
    ],
    model: 'Unopar.model.ProdutosModel',
    proxy: {
        type: 'ajax',
        url : '/data/produtos.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});