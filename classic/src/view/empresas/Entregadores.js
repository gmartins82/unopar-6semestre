
Ext.define('Unopar.view.empresas.Entregadores',{
    extend: 'Ext.grid.Panel',
    xtype: 'empresas-entregadores',
    requires: [
        'Ext.button.Button',
        'Ext.grid.column.Action',
        'Ext.toolbar.Paging',
        'Unopar.shared.Breadcrumbs',
        'Unopar.store.empresas.EntregadoresStore',
        'Unopar.view.empresas.EntregadoresController',
        'Unopar.view.empresas.EntregadoresModel'
    ],
    controller: 'empresas-entregadores',
    viewModel: {
        type: 'empresas-entregadores'
    },
    header: {
        xtype: 'breadcrumbs',
        items: [
            { text: 'Empresas', iconCls: 'x-fa fa-building' },
            { iconCls: 'fa fa-angle-right' },
            { text: 'Entregadores', iconCls: 'fa fa-address-card-o' }
        ]
    },
    columnLines: true,
    store: {
        type: 'empresas.EntregadoresStore',
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
                tooltip: 'Editar este entregador',
                iconCls: 'x-fa fa-pencil-square-o',
                handler: 'showEditar'
            }]
        },
        {
            text: 'Nome',
            flex: 1,
            dataIndex: 'nome'
        },
        {
            text: 'Empresa',
            flex: 1,
            dataIndex: 'empresa'
        },
        {
            text: 'CPF',
            width: 150,
            dataIndex: 'cpf'
        },
        {
            text: 'Rg',
            width: 150,
            dataIndex: 'rg'
        },
        {
            text: 'N. celular',
            width: 150,
            dataIndex: 'celular'
        },
        {
            text: 'N. telefone',
            width: 150,
            dataIndex: 'telefone'
        }
    ],
    tbar: [
        {
            xtype: 'button',
            text: 'Entregador',
            tooltip: 'Cadastrar um novo entregador',
            iconCls: 'x-fa fa-plus',
            handler: 'showNovo'
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    }
});
