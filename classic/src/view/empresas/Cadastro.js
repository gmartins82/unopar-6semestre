
Ext.define('Unopar.view.empresas.Cadastro',{
    extend: 'Ext.grid.Panel',
    xtype: 'empresas-cadastro',
    requires: [
        'Ext.button.Button',
        'Ext.grid.column.Action',
        'Ext.toolbar.Paging',
        'Unopar.shared.Breadcrumbs',
        'Unopar.store.empresas.CadastroStore',
        'Unopar.view.empresas.CadastroController',
        'Unopar.view.empresas.CadastroModel'
    ],
    controller: 'empresas-cadastro',
    viewModel: {
        type: 'empresas-cadastro'
    },
    header: {
        xtype: 'breadcrumbs',
        items: [
            { text: 'Empresas', iconCls: 'x-fa fa-building' },
            { iconCls: 'fa fa-angle-right' },
            { text: 'Cadastro', iconCls: 'fa fa-building-o' }
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
        type: 'empresas.CadastroStore',
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
                tooltip: 'Editar esta empresa',
                iconCls: 'x-fa fa-pencil-square-o',
                handler: 'showEditar'
            }]
        },
        {
            text: 'Razão Social',
            flex: 1,
            dataIndex: 'razao_social'
        },
        {
            text: 'Nome fantasia',
            flex: 1,
            dataIndex: 'nome_fantasia'
        },
        {
            text: 'N. telefone 1',
            width: 150,
            dataIndex: 'telefone1'
        },
        {
            text: 'N. telefone 2',
            width: 150,
            dataIndex: 'telefone2'
        }
    ],
    tbar: [
        {
            xtype: 'button',
            text: 'Empresa',
            tooltip: 'Cadastrar uma nova empresa',
            iconCls: 'x-fa fa-plus',
            handler: 'showNovo'
        }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    }
});
