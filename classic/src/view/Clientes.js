
Ext.define('Unopar.view.Clientes',{
    extend: 'Ext.grid.Panel',
    xtype: 'clientes',
    requires: [
        'Ext.button.Button',
        'Ext.grid.column.Action',
        'Ext.grid.column.Date',
        'Ext.toolbar.Paging',
        'Unopar.shared.Breadcrumbs',
        'Unopar.store.ClienteStore',
        'Unopar.view.ClientesController',
        'Unopar.view.ClientesModel'
    ],
    controller: 'clientes',
    viewModel: {
        type: 'clientes'
    },
    header: {
        xtype: 'breadcrumbs',
        items: [
            { text: 'Clientes', iconCls: 'x-fa fa-users' }
        ]
    },
    columnLines: true,
    plugins:{
        rowexpander: {
            rowBodyTpl: new Ext.XTemplate(
                '<strong>Endereço: </strong>{endereco}, <strong>Bairro: </strong>{bairro}<br>' +
                '<strong>Cidade: </strong>{cidade}, <strong>UF: </strong>{uf}, <strong>CEP: </strong>{cep}'
            )
        }
    },
    store: {
        type: 'ClienteStore',
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
                tooltip: 'Editar este cliente',
                iconCls: 'x-fa fa-pencil-square-o',
                handler: 'showEditar'
            }]
        },
        {
            text: 'Nome do cliente',
            flex: 1,
            dataIndex: 'nome'
        },
        {
            text: 'N. telefone',
            width: 150,
            dataIndex: 'telefone'
        },
        {
            xtype: 'datecolumn',
            text: 'Nascido em',
            width: 140,
            format: 'd/m/Y',
            dataIndex: 'nascimento'
        }
    ],
    tbar: [
        {
            xtype: 'button',
            text: 'Cliente',
            tooltip: 'Cadastrar um novo cliente',
            iconCls: 'x-fa fa-plus',
            handler: 'showNovo'
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    }
});
