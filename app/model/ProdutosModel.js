Ext.define('Unopar.model.ProdutosModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'nome',         type: 'string' },
        { name: 'descricao',    type: 'string' },
        { name: 'valor',        type: 'number' },
    ]
});