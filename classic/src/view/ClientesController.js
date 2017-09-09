Ext.define('Unopar.view.ClientesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.clientes',

    requires: [
        'Unopar.view.clientes.NovoEditar'
    ],

    showNovo: function (button, e, eOpts) {
        var win = Ext.widget('clientes-novoeditar');
        win.setTitle('Cadastrar um cliente');
    },

    showEditar: function (grid, rowIndex, colIndex, item, e, record, row) {
        var win = Ext.widget('clientes-novoeditar'),
            form = win.down('form').getForm();
        win.setTitle('Editar um cliente');
        form.setValues(record.data);
    }
});
