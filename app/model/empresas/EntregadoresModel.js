/**
 * Created by grazi on 08/09/2017.
 */
Ext.define('Unopar.model.empresas.EntregadoresModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id_empresa',       type: 'int' },
        { name: 'nome_fantasia',    type: 'string' },
        { name: 'nome',             type: 'string' },
        { name: 'cpf',              type: 'string' },
        { name: 'rg',               type: 'string' },
        { name: 'telefone',         type: 'string' },
        { name: 'celular',          type: 'string' }
    ]
});