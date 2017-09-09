Ext.define('Unopar.model.PedidosModel', {
    extend: 'Ext.data.Model',
    idProperty: 'pedido_id',
    fields: [
        {name: 'pedido_id',             type: 'int'},
        {name: 'pedido_status',         type: 'string'},
        {name: 'pedido_Descricao',      type: 'auto'},
        {name: 'pedido_valor',          type: 'number'},
        {name: 'pedido_troco',          type: 'number'},
        {name: 'cliente_nome',          type: 'string'},
        {name: 'cliente_telefone',      type: 'string'},
        {name: 'cliente_endereco',      type: 'string'},
        {name: 'entregador_nome',       type: 'string'},
        {name: 'entregador_telefone',   type: 'string'}
    ]
});