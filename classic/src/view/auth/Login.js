
Ext.define('Unopar.view.auth.Login',{
    extend: 'Ext.window.Window',
    xtype: 'auth-login',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.layout.container.Anchor',
        'Ext.window.Window',
        'Unopar.view.auth.LoginController',
        'Unopar.view.auth.LoginModel'
    ],
    controller: 'auth-login',
    viewModel: {
        type: 'auth-login'
    },
    width :100,
    height : 100,
    maximized: true,
    header: false,
    items: {
        xtype: 'window',
        autoShow: true,
        resizable: false,
        closable: false,
        title: 'Casa das Marmitas',
        titleAlign: 'center',
        width: 350,
        items: {
            xtype: 'form',
            bodyPadding: 10,
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            items:[
                {
                    xtype: 'textfield',
                    fieldLabel: 'Email',
                    labelWidth: 50,
                    name: 'login',
                    tabIndex: 1,
                    allowBlank: false,
                    requiredIcon: false,
                    msgTarget: 'under',
                    emptyText: 'E-mail...',
                    listeners: {
                        specialkey: 'onFormLoginEnter'
                    }
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Senha',
                    labelWidth: 50,
                    name: 'senha',
                    inputType: 'password',
                    tabIndex: 2,
                    allowBlank: false,
                    requiredIcon: false,
                    msgTarget: 'under',
                    emptyText: 'Senha...',
                    listeners: {
                        specialkey: 'onFormLoginEnter'
                    }
                }
            ],
            buttons: [ {
                text: 'Entrar',
                iconCls: 'x-fa fa-sign-in',
                iconAlign: 'right',
                handler: 'onFormLoginEnviar'
            } ]

        }
    }
});
