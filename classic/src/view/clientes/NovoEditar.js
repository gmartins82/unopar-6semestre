
Ext.define('Unopar.view.clientes.NovoEditar',{
    extend: 'Ext.window.Window',
    xtype: 'clientes-novoeditar',
    requires: [
        'Ext.container.Container',
        'Ext.form.FieldContainer',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.field.Hidden',
        'Ext.form.field.Text',
        'Ext.layout.container.Anchor',
        'Ext.layout.container.HBox',
        'Unopar.shared.ButtonSave',
        'Unopar.view.clientes.NovoEditarController',
        'Unopar.view.clientes.NovoEditarModel'
    ],
    controller: 'clientes-novoeditar',
    viewModel: {
        type: 'clientes-novoeditar'
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
                xtype: 'textfield',
                name: 'nome',
                fieldLabel: 'Nome',
                flex: 1,
                labelWidth: 80,
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
                        name: 'telefone',
                        fieldLabel: 'N. telefone',
                        margin: '0 5 0 0',
                        flex: 1,
                        labelWidth: 80,
                        allowBlank: false
                    },
                    {
                        xtype: 'datefield',
                        width: 230,
                        fieldLabel: 'Data de nasc.',
                        name: 'nascimento',
                        allowBlank: false
                    }
                ]
            },
            {
                xtype: 'textfield',
                name: 'endereco',
                fieldLabel: 'Endereço',
                flex: 1,
                labelWidth: 80,
                allowBlank: false
            },
            {
                xtype: 'textfield',
                name: 'cidade',
                fieldLabel: 'Cidade',
                flex: 1,
                labelWidth: 80,
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
                        name: 'bairro',
                        fieldLabel: 'Bairro',
                        flex: 1,
                        labelWidth: 80,
                        allowBlank: false
                    },
                    {
                        xtype: 'combobox',
                        name: 'uf',
                        fieldLabel: 'UF',
                        labelWidth: 30,
                        width: 110,
                        margin: '0 5',
                        queryMode: 'local',
                        store: ['AC','AL','AM','AP','BA','CE','DF','ES','GO',
                            'MA','MG','MS','MT','PA','PB','PE','PI','PR','RJ',
                            'RN','RO','RR','RS','SC','SE','SP','TO'],
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        name: 'cep',
                        fieldLabel: 'CEP',
                        width: 135,
                        labelWidth: 40,
                        maxLength: 9,
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
