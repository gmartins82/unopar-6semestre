/**
 * Created by grazi on 08/09/2017.
 */
Ext.define('Unopar.store.empresas.EntregadoresStore', {
    extend: 'Ext.data.Store',
    alias: 'store.empresas.EntregadoresStore',
    requires: [
        'Unopar.model.empresas.EntregadoresModel'
    ],
    model: 'Unopar.model.empresas.EntregadoresModel',
    proxy: {
        type: 'ajax',
        url : '/data/empresas/Entregadores.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});