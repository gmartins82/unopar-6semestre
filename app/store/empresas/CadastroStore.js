/**
 * Created by grazi on 08/09/2017.
 */
Ext.define('Unopar.store.empresas.CadastroStore', {
    extend: 'Ext.data.Store',
    alias: 'store.empresas.CadastroStore',
    requires: [
        'Unopar.model.empresas.CadastroModel'
    ],
    model: 'Unopar.model.empresas.CadastroModel',
    proxy: {
        type: 'ajax',
        url : '/data/empresas/cadastro.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});