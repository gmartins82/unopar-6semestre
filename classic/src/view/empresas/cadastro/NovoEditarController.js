Ext.define('Unopar.view.empresas.cadastro.NovoEditarController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.empresas-cadastro-novoeditar',
    onFormSalvar: function (button, e, eOpts) {
        var me = this,
            form = button.up('form').getForm();

        if (form.isValid()) {
            form.submit({
                url: 'empresas/cadastro/salvar',
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
            grid = Ext.ComponentQuery.query('empresas-cadastro')[0];
        grid.getStore().load();
    }

});
