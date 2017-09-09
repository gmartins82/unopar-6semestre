Ext.define('Unopar.view.PedidosController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.pedidos',

    requires: [
        'Unopar.view.pedidos.NovoEditar'
    ],

    showNovo: function (button, e, eOpts) {
        var win = Ext.widget('pedidos-novoeditar');
        win.setTitle('Cadastrar um pedido');
    },

    showEditar: function (grid, rowIndex, colIndex, item, e, record, row) {
        var win = Ext.widget('pedidos-novoeditar'),
            form = win.down('form').getForm();
        win.setTitle('Editar um pedido');
        form.setValues(record.data);
    }

});
