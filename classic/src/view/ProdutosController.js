Ext.define('Unopar.view.ProdutosController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.produtos',

    requires: [
        'Unopar.view.produtos.NovoEditar'
    ],

    showNovo: function (button, e, eOpts) {
        var win = Ext.widget('produtos-novoeditar');
        win.setTitle('Cadastrar um produto');
    },

    showEditar: function (grid, rowIndex, colIndex, item, e, record, row) {
        var win = Ext.widget('produtos-novoeditar'),
            form = win.down('form').getForm();
        win.setTitle('Editar um produto');
        form.setValues(record.data);
    }

});
