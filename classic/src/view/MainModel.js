Ext.define('Unopar.view.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    requires: [
        'Ext.data.TreeStore'
    ],
    data: {
        usuario: {
            nome: 'Usuário de Teste'
        }
    },
    stores: {
        navItems: {
            type: 'tree',
            root: {
                "expanded": true,
                "children": [
                    {
                        "text": "Home",
                        "routeId": "home",
                        "viewType": "home",
                        "iconCls": "x-fa fa-home",
                        "leaf": true
                    },
                    {
                        "text": "Clientes",
                        "routeId": "clientes",
                        "viewType": "clientes",
                        "iconCls": "x-fa fa-users",
                        "leaf": true
                    },
                    {
                        "text": "Empresas",
                        "iconCls": "x-fa fa-building",
                        "children": [
                            {
                                "text": "Cadastro",
                                "routeId": "empresas/cadastro",
                                "viewType": "empresas-cadastro",
                                "iconCls": "x-fa fa-building-o",
                                "leaf": true
                            },
                            {
                                "text": "Entregadores",
                                "routeId": "empresas/entregadores",
                                "viewType": "empresas-entregadores",
                                "iconCls": "x-fa fa-address-card-o",
                                "leaf": true
                            }
                        ]
                    },
                    {
                        "text": "Produtos",
                        "routeId": "produtos",
                        "viewType": "produtos",
                        "iconCls": "x-fa fa-archive",
                        "leaf": true
                    },
                    {
                        "text": "Pedidos",
                        "routeId": "pedidos",
                        "viewType": "pedidos",
                        "iconCls": "x-fa fa-book",
                        "leaf": true
                    }
                ]
            }
        }
    }
});
