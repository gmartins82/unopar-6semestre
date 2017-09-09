
Ext.define('Unopar.view.Home',{
    extend: 'Ext.panel.Panel',
    xtype: 'home',
    requires: [
        'Ext.panel.Panel',
        'Unopar.shared.Breadcrumbs',
        'Unopar.view.HomeController',
        'Unopar.view.HomeModel'
    ],
    controller: 'home',
    viewModel: {
        type: 'home'
    },
    scrollable: 'y',
    header: {
        xtype: 'breadcrumbs',
        items: [
            { text: 'Home', iconCls: 'x-fa fa-home' }
        ]
    },
    html: '<div style="margin: 5px">' +
        '<img src="http://www.unoparead.com.br/img/layout/logo-footer.png" style="float: right;" />' +
        '<h1>Unopar - Universidade Norte do Paraná</h1>' +
        '<h3>Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas</h3>' +
        '<h3>Aluno: Graziani Martins, E-mail: graziani.martins@hotmail.com</h3>' +
        '<h3>6º SEMESTRE – 100% Online</h3>' +
        '<h3>Profª. Merris Mozer, Prof. Paulo K. Nishitani, Prof. Anderson E. M. Gonçalves, Profª. Cristiane R. Y. Mashuda</h3>' +
        '<h3>Eixo Temático: Gestão do Processo de Desenvolvimento II</h3>' +
        '<hr>' +
        '<h3>Informações: </h3>' +
        '<p>A empresa “Casa das Marmitas”, realizou contato com a Software House&MM e informou que necessita automatizar seu processo de entrega de marmitas. A House&MM, enviou um analista de sistemas para realizar o levantamento dos requisitos.</p>' +
        '<p>Durante a reunião, o proprietário da “House&MM”, o Sr. Paulo Ricardo, informou que o seu negócio está em expansão, mas no momento a maior necessidade é automatizar as entregas e posteriormente os demais setores.</p>' +
        '<p>Com base no levantamento realizado pelo analista de sistemas, foi possível identificar que este negócio necessitará dos seguintes controles:</p>' +
        '<p>[ 1 ] <strong>Controle de Cliente: </strong>Neste controle é necessário o nome do cliente, telefone de contato, endereço, ponto de referência e data de nascimento.<br>' +
        'Com base nestes dados, no momento do pedido, o atendente realizará uma pesquisa pelo número do telefone do cliente, caso esteja cadastrado, os seus dados deverão ser exibidos, caso contrário, deverá cadastrá-lo.</p>' +
        '<p>[ 2 ] <strong>Controle de Entregadores: </strong>Neste controle, o serviço é terceirizado, onde os motoboys são vinculados a uma empresa e recebem apenas pelas entregas realizadas. Os dados necessários são: nome do entregador, CPF, RG, celular e Empresa vinculada (nome da empresa que o motoboy trabalha), ou seja, também será necessário que a empresa esteja cadastrada no sistema.</p>' +
        '<p>[ 3 ] <strong>Controle das Empresas terceirizadas: </strong>Empresas onde os motoboys são vinculados, sendo necessários os seguintes dados: Nome da empresa, CNPJ, endereço, telefone e e-mail.</p>' +
        '<p>[ 4 ] <strong>Controle do Produto: </strong>Neste caso os produtos são as marmitas a serem vendidas, sendo necessária a inclusão dos dados, nome do produto, descrição, tamanho e custo.' +
        '<br><strong>Neste empreendimento tem-se:</strong>' +
        '<ul style="list-style-type:circle">' +
            '<li>Marmita1: Arroz, feijão, bife e salada de tomate.</li>' +
            '<li>Marmita2: Arroz, feijão, bife e ovo frito.</li>' +
            '<li>Marmita3: Arroz, feijão, file de frango, creme de milho.</li>' +
            '<li>Marmita4: Arroz, feijão, file de frango e salada de tomate.</li>' +
        '</ul>' +
        '<br><strong>Tabela de preços:</strong>' +
        '<ul style="list-style-type:circle">' +
            '<li>Marmita1: R$ 15,00</li>' +
            '<li>Marmita2: R$ 18,00</li>' +
            '<li>Marmita3: R$ 14,00</li>' +
            '<li>Marmita4: R$ 10,00</li>' +
        '</ul>' +
        '<br><strong>Taxa de entrega: R$ 4,50</strong></p>' +
        '<p>[ 5 ] <strong>Controle de Pedido: </strong>Para gerenciar os pedidos realizados pelo cliente, o atendente deverá informar no registro do pedido: nome do cliente, nome do produto, quantidade, tamanho e etc.' +
        '<br>Automaticamente o sistema deverá calcular o valor total do pedido, por exemplo:' +
        '<ul style=""> ' +
            '<li><strong>Pedido 1</strong>' +
                '<ul style="list-style-type:circle"> ' +
                    '<li>Marmita3: R$ 14,00</li>' +
                    '<li>Marmita4: R$ 10,00</li>' +
                '</ul>' +
            '</li>' +
        '</ul>' +
        'Resultando no valor total de R$ 24,00, mais a taxa de entrega.<br>' +
        'Caso necessário, é registrado no sistema o troco.<br>' +
        '<p>Os pedidos serão atendidos com base nas ligações recebidas e o atendimento ao pedido deverá respeitar a ordem das ligações. Os pedidos ficarão nos seguintes status:<br>' +
            '<ul style="list-style-type:circle">' +
            '<li><strong>Pendente: </strong>Quando o atendente da entrada no pedido.</li>' +
            '<li><strong>Em trânsito: </strong>Quando o motoboy retira o pedido para a entrega.</li>' +
            '<li><strong>Cancelado: </strong>Quando surge alguma irregularidade e o pedido não pode ser entregue.</li>' +
            '<li><strong>Entregue: </strong>Quando o motoboy conclui a entrega e apresenta o pagamento.</li>' +
            '</ul>' +
        '</p>O Sr. Paulo Ricardo informou também que semanalmente, seu gerente, deverá gerar pelo sistema, um relatório das “Entregas Realizadas” para o pagamento dos entregadores.</p>' +
        '<hr>' +
        '<h3>Atividade: </h3>' +
        '<p>A empresa “House&MM” é um sistema Web integrado e está em fase de inúmeras melhorias. Para isto, será criada uma especificação técnica dos pontos necessários. Para iniciar nosso projeto vamos fazer a prototipação dos 5 controles.</p>' +
        '<p>Será criado cadastro dos 5 controles, além de gerenciar o STATUS dos pedidos.</p>' +
        '<p>É obrigatório especificar qual a linguagem de implementação que será utilizada: php, c# ou Java, também qual o banco de dados escolhido para a implementação do sistema. Especificar todas as ferramentas utilizadas no processo de desenvolvimento do sistema, como: servidor Web, SGBD (Sistema Gerenciador de Banco de Dados), etc. Toda a customização deve ser feita para interface Web visando atender as necessidades de usabilidade do sistema para os usuários.</p>' +
        '<p>Visando a efetivação do sistema WEB para solicitação e controle da entrega de marmitas, faça uma pesquisa dos equipamentos necessários para tal implementação com os devidos custos, incluindo a adesão aos serviços de hospedagem.</p>' +
        '<p>Um ponto importante para a gestão deste projeto é especificar os seus conhecimentos tácitos e transformá-los em conhecimentos explícitos, construindo um manual, como se fosse por exemplo um manual de micro-ondas, com seu passo a passo das funções. Para que este documento (manual) que você está desenvolvendo fique mais completo, adicione neste manual os capitais encontrados nesta empresa: Capital Financeiro; Capital Intelectual; Capital Humano; Capital Estrutural; Capital do Cliente; Capital Organizacional; Capital de Inovação; Capital de processos.</p>' +
        '<p>Outro ponto a ser observado é que os funcionários poderão fazer o uso deste sistema através de vários dispositivos como: tablets, smartphones, etc., portanto, os requisitos visuais também devem ser considerados. Atentar para a especificação dos relacionamentos entre as entidades. Fazer a especificação de cada evento (enter, tab ou outra tecla) ou botão acionado.</p>' +
    '</div> '
});
