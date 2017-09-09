
Ext.define('Unopar.view.Produtos',{
    extend: 'Ext.grid.Panel',
    xtype: 'produtos',
    requires: [
        'Ext.button.Button',
        'Ext.grid.column.Action',
        'Ext.grid.column.Number',
        'Ext.toolbar.Paging',
        'Unopar.shared.Breadcrumbs',
        'Unopar.store.ProdutosStore',
        'Unopar.view.ProdutosController',
        'Unopar.view.ProdutosModel'
    ],
    controller: 'produtos',
    viewModel: {
        type: 'produtos'
    },
    header: {
        xtype: 'breadcrumbs',
        items: [
            { text: 'Produtos', iconCls: 'x-fa fa-archive' }
        ]
    },
    store: {
        type: 'ProdutosStore',
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
                tooltip: 'Editar este produto',
                iconCls: 'x-fa fa-pencil-square-o',
                handler: 'showEditar'
            }]
        },
        {
            text: 'Produto',
            width: 140,
            dataIndex: 'nome'
        },
        {
            text: 'Descricao',
            flex: 1,
            dataIndex: 'descricao'
        },
        {
            xtype: 'numbercolumn',
            text: 'Valor',
            width: 140,
            dataIndex: 'valor',
            renderer: function (value) {
                return 'R$ ' + value
            }
        }
    ],
    tbar: [
        {
            xtype: 'button',
            text: 'Produto',
            tooltip: 'Cadastrar um novo produto',
            iconCls: 'x-fa fa-plus',
            handler: 'showNovo'
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    }
});
