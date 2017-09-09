
Ext.define('Unopar.view.produtos.NovoEditar',{
    extend: 'Ext.window.Window',
    xtype: 'produtos-novoeditar',
    requires: [
        'Ext.container.Container',
        'Ext.form.FieldContainer',
        'Ext.form.Panel',
        'Ext.form.field.Hidden',
        'Ext.form.field.Number',
        'Ext.form.field.Text',
        'Ext.layout.container.Anchor',
        'Ext.layout.container.HBox',
        'Unopar.shared.ButtonSave',
        'Unopar.view.produtos.NovoEditarController',
        'Unopar.view.produtos.NovoEditarModel'
    ],
    controller: 'produtos-novoeditar',
    viewModel: {
        type: 'produtos-novoeditar'
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
                xtype: 'fieldcontainer',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [
                    {
                        xtype: 'textfield',
                        name: 'nome',
                        fieldLabel: 'Nome',
                        margin: '0 5 0 0',
                        flex: 1,
                        labelWidth: 80,
                        allowBlank: false
                    },
                    {
                        xtype: 'numberfield',
                        width: 150,
                        labelWidth: 50,
                        fieldLabel: 'Valor',
                        name: 'valor',
                        minValue: 0,
                        step: 0.01,
                        allowBlank: false
                    }
                ]
            },
            {
                xtype: 'textfield',
                name: 'descricao',
                fieldLabel: 'Descição',
                flex: 1,
                labelWidth: 80,
                allowBlank: false
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
