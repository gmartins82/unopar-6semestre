
Ext.define('Unopar.view.empresas.entregadores.NovoEditar',{
    extend: 'Ext.window.Window',
    xtype: 'empresas-entregadores-novoeditar',
    requires: [
        'Ext.container.Container',
        'Ext.form.FieldContainer',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Hidden',
        'Ext.form.field.Text',
        'Ext.layout.container.Anchor',
        'Ext.layout.container.HBox',
        'Unopar.shared.ButtonSave',
        'Unopar.store.empresas.CadastroStore',
        'Unopar.view.empresas.entregadores.NovoEditarController',
        'Unopar.view.empresas.entregadores.NovoEditarModel'
    ],
    controller: 'empresas-entregadores-novoeditar',
    viewModel: {
        type: 'empresas-entregadores-novoeditar'
    },
    autoShow: true,
    resizable: false,
    modal: true,
    width: 600,
    titleAlign: 'center',
    items: {
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
                xtype: 'combobox',
                name: 'id_empresa',
                fieldLabel: 'Empresa',
                store: {
                    type: 'empresas.CadastroStore',
                    autoLoad: true
                },
                flex: 1,
                displayField: 'nome_fantasia',
                valueField: 'id',
                labelWidth: 90,
                allowBlank: false
            },
            {
                xtype: 'textfield',
                name: 'nome',
                fieldLabel: 'Entregador',
                flex: 1,
                labelWidth: 90,
                allowBlank: false
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
                        name: 'cpf',
                        fieldLabel: 'CPF',
                        margin: '0 5 0 0',
                        flex: 1,
                        labelWidth: 90,
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        name: 'rg',
                        fieldLabel: 'RG',
                        flex: 1,
                        labelWidth: 50,
                        allowBlank: false
                    }
                ]
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
                        name: 'celular',
                        fieldLabel: 'N. celular',
                        margin: '0 5 0 0',
                        flex: 1,
                        labelWidth: 90,
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        name: 'telefone',
                        fieldLabel: 'N. telefone',
                        flex: 1,
                        labelWidth: 90,
                        allowBlank: false
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
    },
    listeners: {
        close: 'onWinClose'
    }
});
