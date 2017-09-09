
Ext.define('Unopar.view.Usuarios',{
    extend: 'Ext.panel.Panel',
    xtype: 'usuarios',
    requires: [
        'Unopar.shared.Breadcrumbs',
        'Unopar.view.UsuariosController',
        'Unopar.view.UsuariosModel'
    ],
    controller: 'usuarios',
    viewModel: {
        type: 'usuarios'
    },
    header: {
        xtype: 'breadcrumbs',
        items: [
            { text: 'Usuários', iconCls: 'x-fa fa-address-card' }
        ]
    },
    html: 'Hello, usuarios!!'
});
