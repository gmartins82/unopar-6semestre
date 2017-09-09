Ext.define('overrides.form.field.Base', {
    override: 'Ext.form.field.Base',
    requiredIcon: true,
    initComponent: function () {
        if (this.allowBlank !== undefined && !this.allowBlank) {
            if (this.requiredIcon) {
                this.labelSeparator += '<span class="color-red-500"> *</span>';
            }
        }

        this.callParent(arguments);
    }
});