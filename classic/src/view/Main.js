Ext.define('Unopar.view.Main',{
    extend: 'Ext.container.Viewport',
    xtype: 'main',
    requires: [
        'Ext.button.Button',
        'Ext.container.Container',
        'Ext.layout.container.Border',
        'Ext.layout.container.Card',
        'Ext.layout.container.Fit',
        'Ext.layout.container.VBox',
        'Ext.list.Tree',
        'Ext.panel.Panel',
        'Unopar.view.MainController',
        'Unopar.view.MainModel'
    ],
    controller: 'main',
    viewModel: {
        type: 'main'
    },
    layout: 'fit',
    items: {
        xtype: 'panel',
        title: 'Casa das Marmitas',
        iconCls: 'x-fa fa-cutlery',
        layout: 'border',
        header: {
            titlePosition: 1,
            items: [
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-bars',
                    tooltip: 'Menu Recolher/Expandir',
                    margin: '0 5 0 0',
                    handler: 'onToggleMenu'
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-user',
                    bind: {
                        text: 'Olá, {usuario.nome}'
                    }
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-power-off color-red-500',
                    iconAlign: 'right',
                    text: 'Sair',
                    handler: 'onLogout'
                }
            ]
        },
        items: [
            {
                region: 'west',
                width: 250,
                reference: 'treelistContainer',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                border: false,
                scrollable: 'y',
                cls: 'treelist-with-nav',
                items: [
                    {
                        xtype: 'treelist',
                        ui: 'nav',
                        reference: 'navigationTreeList',
                        expanderFirst: false,
                        expanderOnly: false,
                        singleExpand: true,
                        bind: '{navItems}',
                        listeners: {
                            selectionchange: 'onNavigationTreeSelectionChange'
                        }
                    }
                ]
            },
            {
                region: 'center',
                xtype: 'container',
                flex: 1,
                reference: 'mainCardPanel',
                layout: {
                    type: 'card',
                    anchor: '100%'
                }
            }
        ]
    }
});
