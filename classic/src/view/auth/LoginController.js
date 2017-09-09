Ext.define('Unopar.view.auth.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.auth-login',
    onFormLoginEnter: function (field, e, eOpts) {
        var me = this;
        if (e.getKey() === e.ENTER) {
            me.onFormLoginEnviar(field);
        }
    },
    onFormLoginEnviar: function (button, e, eOpts) {
        var me = this,
            form = button.up('form').getForm();
        if (form.isValid()) {
            form.submit({
                url: '/data/login.json',
                waitTitle: 'Validando informações',
                waitMsg: 'Por favor aguarde...',
                success: function (form, action) {
                    me.getView().destroy();
                    me.redirectTo('home');
                }
            });
        }
    }
});
