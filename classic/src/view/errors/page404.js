
Ext.define('Unopar.view.errors.page404',{
    extend: 'Ext.panel.Panel',
    xtype: 'errors-page404',
    requires: [
        'Unopar.view.errors.page404Controller',
        'Unopar.view.errors.page404Model'
    ],
    controller: 'errors-page404',
    viewModel: {
        type: 'errors-page404'
    },
    html: 'Hello, page404!!!'
});
