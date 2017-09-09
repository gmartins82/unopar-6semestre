/**
 * Created by grazi on 08/09/2017.
 */
Ext.define('Unopar.model.empresas.CadastroModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'razao_social',     type: 'string' },
        { name: 'nome_fantasia',    type: 'string' },
        { name: 'email',            type: 'string' },
        { name: 'cnpj',             type: 'string' },
        { name: 'endereco',         type: 'string' },
        { name: 'cidade',           type: 'string' },
        { name: 'bairro',           type: 'string' },
        { name: 'uf ',              type: 'string' },
        { name: 'cep',              type: 'string' },
        { name: 'telefone1',        type: 'string' },
        { name: 'telefone2',        type: 'string' }
    ]
});