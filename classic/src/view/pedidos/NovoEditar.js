
Ext.define('Unopar.view.pedidos.NovoEditar',{
    extend: 'Ext.window.Window',
    xtype: 'pedidos-novoeditar',
    requires: [
        'Ext.container.Container',
        'Ext.form.FieldContainer',
        'Ext.form.Panel',
        'Ext.form.field.Hidden',
        'Ext.form.field.Text',
        'Ext.grid.Panel',
        'Ext.grid.column.Action',
        'Ext.grid.column.Number',
        'Ext.layout.container.Anchor',
        'Ext.layout.container.HBox',
        'Unopar.shared.ButtonSave',
        'Unopar.store.ProdutosStore',
        'Unopar.view.pedidos.NovoEditarController',
        'Unopar.view.pedidos.NovoEditarModel'
    ],
    controller: 'pedidos-novoeditar',
    viewModel: {
        type: 'pedidos-novoeditar'
    },
    autoShow: true,
    resizable: false,
    modal: true,
    width: 600,
    titleAlign: 'center',
    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            items: [
                {
                    xtype: 'hiddenfield',
                    name: 'id',
                    value: 0
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'cliente_telefone',
                            fieldLabel: 'N. telefone',
                            margin: '0 5 0 0',
                            width: 200,
                            labelWidth: 80,
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            name: 'cliente_nome',
                            fieldLabel: 'Nome',
                            readOnly: true,
                            flex: 1,
                            labelWidth: 50
                        }
                    ]
                },
                {
                    xtype: 'grid',
                    title: 'Lista de produtos',
                    store: {
                        type: 'ProdutosStore',
                        autoLoad: true,
                        autoDestroy: true
                    },
                    plugins:{
                        rowexpander: {
                            rowBodyTpl: new Ext.XTemplate(
                                '<strong>Descricao: </strong>{descricao}'
                            )
                        }
                    },
                    columns: [
                        {
                            xtype: 'actioncolumn',
                            align: 'center',
                            locked: true,
                            menuDisabled: true,
                            width: 30,
                            items: [{
                                tooltip: 'Deletar este produto',
                                iconCls: 'x-fa fa-pencil-square-o',
                                handler: 'showEditar'
                            }]
                        },
                        {
                            text: 'Produto',
                            flex: 1,
                            dataIndex: 'nome'
                        },
                        {
                            xtype: 'numbercolumn',
                            text: 'Valor',
                            width: 140,
                            dataIndex: 'valor',
                            renderer: function (value) {
                                return 'R$ ' + value
                            }
                        },
                        {
                            xtype: 'numbercolumn',
                            text: 'Qtd',
                            width: 140,
                            dataIndex: 'qtd'
                        }
                    ]
                },
                {
                    type: 'container',
                    margin: '10 0 0 0',
                    html: '<i class="text-primary" style="font-size: 11px;">Os campos marcados com <strong class="color-red-500">*</strong> são de preenchimento obrigatório.</i>'
                }
            ],
            buttons: [{
                xtype: 'button-save',
                handler: 'onFormSalvar'
            }]
        }
    ],
    listeners: {
        close: 'onWinClose'
    }
});
