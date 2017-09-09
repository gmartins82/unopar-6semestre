Ext.define('Unopar.model.ClienteModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'nome ',        type: 'string' },
        { name: 'telefone',     type: 'string' },
        { name: 'nascimento',   type: 'date'},
        { name: 'endereco',     type: 'string' },
        { name: 'cidade',       type: 'string' },
        { name: 'bairro',       type: 'string' },
        { name: 'uf ',          type: 'string' },
        { name: 'cep',          type: 'string' }
    ]
});