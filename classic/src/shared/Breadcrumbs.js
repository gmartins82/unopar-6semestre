Ext.define('Unopar.shared.Breadcrumbs', {
    extend: 'Ext.panel.Header',
    alias: 'widget.breadcrumbs',
    requires: [
        'Ext.button.Button'
    ],
    itemPosition: 0,
    padding: 0,
    border: 5,
    style: 'background: #77b0e2',
    defaults: {
        xtype: 'button',
        padding: 2,
        border: false,
        style: 'cursor: default; background-color: rgba(41, 60, 78, 0)',
        enableToggle: true
    },
    initComponent: function () {
        this.items.unshift({ text: 'Você está em : ' });
        this.callParent(arguments);
    }
});