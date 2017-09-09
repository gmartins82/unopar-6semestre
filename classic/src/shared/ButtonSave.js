/**
 * Created by grazi on 07/09/2017.
 */
Ext.define('Unopar.shared.ButtonSave', {
    extend: 'Ext.button.Button',
    alias: 'widget.button-save',
    text: 'Salvar',
    formBind: true,
    iconCls: 'x-fa fa-check',
    initComponent: function () {
        this.callParent(arguments);
    }
});