Ext.define('Unopar.view.Main',{
    extend: 'Ext.panel.Panel',
    xtype: 'main',
    requires: [
        'Unopar.view.MainController',
        'Unopar.view.MainModel'
    ],
    controller: 'main',
    viewModel: {
        type: 'main'
    },
    html: 'Hello, Modern!!'
});
