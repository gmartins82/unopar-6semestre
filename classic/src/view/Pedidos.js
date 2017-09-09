
Ext.define('Unopar.view.Pedidos',{
    extend: 'Ext.grid.Panel',
    xtype: 'pedidos',
    requires: [
'Ext.button.Button',
'Ext.form.field.ComboBox',
'Ext.grid.column.Action',
'Ext.toolbar.Fill',
'Ext.toolbar.Paging',
'Unopar.shared.Breadcrumbs',
'Unopar.shared.ButtonSave',
'Unopar.store.PedidosStore',
'Unopar.view.PedidosController',
'Unopar.view.PedidosModel'
],
    controller: 'pedidos',
    viewModel: {
        type: 'pedidos'
    },
    header: {
        xtype: 'breadcrumbs',
        items: [
            { text: 'Pedidos', iconCls: 'x-fa fa-book' }
        ]
    },
    columnLines: true,
    selType: 'checkboxmodel',
    plugins:{
        rowexpander: {
            rowBodyTpl: new Ext.XTemplate(
                '<strong>Endereço: </strong>{cliente_endereco}<br>' ,
                '<fieldset>',
                '<legend>Descrição do Pedido:</legend>',
                '<tpl for="pedido_Descricao">',
                '<p>{nome} - {descricao}</p>',
                '</tpl>',
                '</fieldset>'
            )
        }
    },
    store: {
        type: 'PedidosStore',
        autoLoad: true,
        autoDestroy: true
    },
    columns: [
        {
            xtype: 'actioncolumn',
            align: 'center',
            locked: true,
            menuDisabled: true,
            width: 30,
            items: [{
                tooltip: 'Editar este pedido',
                iconCls: 'x-fa fa-pencil-square-o',
                handler: 'showEditar'
            }]
        },
        {
            text: 'Nome do cliente',
            flex: 1,
            dataIndex: 'cliente_nome'
        },
        {
            text: 'Telefone',
            width: 120,
            dataIndex: 'cliente_telefone'
        },
        {
            text: 'Entregador',
            width: 200,
            dataIndex: 'entregador_nome'
        },
        {
            text: 'Telefone',
            width: 120,
            dataIndex: 'entregador_telefone'
        },
        {
            text: 'Valor',
            width: 120,
            dataIndex: 'pedido_valor',
            renderer: function (value) {
                return 'R$ ' + value
            }
        },
        {
            text: 'Troco para',
            width: 120,
            dataIndex: 'pedido_troco',
            renderer: function (value) {
                return 'R$ ' + value
            }
        },
        {
            text: 'Status',
            width: 120,
            dataIndex: 'pedido_status',
            renderer: function (value) {
                switch (value) {
                    case 'Pendente':
                        return '<strong class="color-orange-500">'+value+'</strong>';
                    case 'Em trânsito':
                        return '<strong class="color-blue-500">'+value+'</strong>';
                    case 'Cancelado':
                        return '<strong class="color-red-500">'+value+'</strong>';
                    default:
                        return '<strong class="color-green-500">'+value+'</strong>';
                }
            }
        }
    ],
    tbar: [
        {
            xtype: 'button',
            text: 'Pedido',
            tooltip: 'Cadastrar um novo pedido',
            iconCls: 'x-fa fa-plus',
            handler: 'showNovo'
        },
        { xtype: 'tbfill' },
        {
            xtype: 'combobox',
            fieldLabel: 'Status',
            labelWidth: 40,
            queryMode: 'local',
            editable: false,
            store: [ 'Pendente', 'Em trânsito', 'Cancelado', 'Entregue' ]
        },
        {
            xtype: 'button-save',
            handler: 'showNovo'
        },
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    }
});
