Ext.define('Unopar.view.empresas.EntregadoresController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.empresas-entregadores',

    requires: [
        'Unopar.view.empresas.entregadores.NovoEditar'
    ],

    showNovo: function (button, e, eOpts) {
        var win = Ext.widget('empresas-entregadores-novoeditar');
        win.setTitle('Cadastrar um entregador');
    },

    showEditar: function (grid, rowIndex, colIndex, item, e, record, row) {
        var win = Ext.widget('empresas-entregadores-novoeditar'),
            form = win.down('form').getForm();
        win.setTitle('Editar um entregador');
        form.setValues(record.data);
    }

});
