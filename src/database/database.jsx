/*
sources:
https://brasil.io/dataset/documentos-brasil/documents/
https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.asp
*/

const CNPJ_List = [
    {
        id: 1,
        number: '02.828.446/0001-34',
        company_name: '0001A LITORAL LOCADORA LTDA - ME',
        commercial_name: 'LITORAL LOCADORA',
    },
    {
        id: 2,
        number: '72.610.132/0001-46',
        company_name: '0001 ASSESSORIA E SERVICOS LTDA - ME',
        commercial_name: 'PROLAR',
    },
    {
        id: 3,
        number: '01.874.354/0001-28',
        company_name: '0002 RESTAURANTE E LANCHONETE LTDA',
        commercial_name: 'SANDUBA GRILL',
    },
    {
        id: 4,
        number: '04.220.692/0001-34',
        company_name: '0009 CHURRASCARIA E RESTAURANTE LTDA',
        commercial_name: 'FAST GRILL',
    },
    {
        id: 5,
        number: '12.146.377/0001-32',
        company_name: '001 A & W PIZZARIA LTDA',
        commercial_name: 'SABORES',
    },
    {
        id: 6,
        number: '06.034.513/0001-08',
        company_name: '001 - M & C SERVICOS DE XEROX E ENCADERNACOES LTDA',
        commercial_name: 'ALUMIVAL',
    },
    {
        id: 7,
        number: '02.006.030/0001-30',
        company_name: '001MELHOR GESTAO EMPRESARIAL LTDA',
        commercial_name: '001SHOPNET TECNICAS E TECNOLOGIAS',
    },
    {
        id: 8,
        number: '15.358.677/0001-73',
        company_name: '001SHOP DESENVOLVIMENTO DE LOJAS VIRTUAIS LTDA',
        commercial_name: '001SHOP LTDA',
    },
    {
        id: 9,
        number: '07.744.937/0001-10',
        company_name: '002/ES GRUPO ESCOTEIRO LOREN RENO',
        commercial_name: 'UNIAO DOS ESCOTEIROS DO BRASIL',
    },
    {
        id: 10,
        number: '07.126.280/0001-28',
        company_name: '0054 CLUB DE VINO BEBIDAS LTDA',
        commercial_name: '0054 CLUB DE VINO',
    },
    {
        id: 11,
        number: '09.159.197/0001-80',
        company_name: '007 ALVO VIDEO PAPELARIA E INFORMATICA LTDA',
        commercial_name: 'ALVO VIDEO PAPELARIA E INFORMATICA',
    },
    {
        id: 12,
        number: '25.144.592/0001-46',
        company_name: '007 - COMERCIO VAREJISTA DE PECAS E ACESSORIOS AUTOMOTIVO E SERVICOS DE INSTALACAO EM GERAL LTDA',
        commercial_name: 'NOVA 007 PARA BRISA',
    },
    {
        id: 13,
        number: '13.715.241/0001-69',
        company_name: '007 MOTOS PECAS E SERVICOS LTDA',
        commercial_name: '007 MOTOS',
    }
];

const contractList = [
    {
        name: 'Título do Primeiro Contrato de Exemplo',
        code: '11002200-01',
        retention: '5%',
    },
    {
        name: 'Título do Segundo Contrato de Exemplo',
        code: '11002200-01',
        retention: '10%',
    },
    {
        name: 'Título do Terceiro Contrato de Exemplo',
        code: '11002200-01',
        retention: '5%',
    },
    {
        name: 'Título do Quarto Contrato de Exemplo',
        code: '11002200-01',
        retention: '15%',
    },
    {
        name: 'Título do Quinto Contrato de Exemplo',
        code: '11002200-01',
        retention: '5%',
    },
    {
        name: 'Título do Sexto Contrato de Exemplo',
        code: '11002200-01',
        retention: '15%',
    },
    {
        name: 'Título do Sétimo Contrato de Exemplo',
        code: '11002200-01',
        retention: '5%',
    },
    {
        name: 'Título do Oitavo Contrato de Exemplo',
        code: '11002200-01',
        retention: '10%',
    }
]

export {
    CNPJ_List,
    contractList
}
