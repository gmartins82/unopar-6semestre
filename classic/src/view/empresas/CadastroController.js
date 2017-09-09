Ext.define('Unopar.view.empresas.CadastroController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.empresas-cadastro',

    requires: [
        'Unopar.view.empresas.cadastro.NovoEditar'
    ],

    showNovo: function (button, e, eOpts) {
        var win = Ext.widget('empresas-cadastro-novoeditar');
        win.setTitle('Cadastrar uma empresa');
    },

    showEditar: function (grid, rowIndex, colIndex, item, e, record, row) {
        var win = Ext.widget('empresas-cadastro-novoeditar'),
            form = win.down('form').getForm();
        win.setTitle('Editar uma empresa');
        form.setValues(record.data);
    }

});
