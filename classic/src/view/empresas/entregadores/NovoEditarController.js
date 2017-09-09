Ext.define('Unopar.view.empresas.entregadores.NovoEditarController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.empresas-entregadores-novoeditar',
    onFormSalvar: function (button, e, eOpts) {
        var me = this,
            form = button.up('form').getForm();

        if (form.isValid()) {
            form.submit({
                url: 'empresas/entregadores/salvar',
                method: 'POST',
                waitTitle: 'Salvando informações',
                waitMsg: 'Por favor aguarde...',
                success: function (form, action) {
                    me.getView().close();
                }
            });
        }
    },
    onWinClose: function (panel, eOpts) {
        var me = this,
            grid = Ext.ComponentQuery.query('empresas-entregadores')[0];
        grid.getStore().load();
    }

});
