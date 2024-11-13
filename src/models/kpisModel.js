var database = require("../database/config")

function buscarDados(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():" + id);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        SELECT u.nome AS Nome, u.email AS Email, u.cpf AS CPF, u.dtNasc AS 'Data', u.telefone AS Telefone, u.peso AS Peso,
        u.altura AS Altura, e.nome AS Esporte, g.gasto AS Gasto, p.diaExecucao AS DiaExe,
        p.diaDescanso AS DiaDes, p.minutos AS Minutos
        FROM usuario AS u
        JOIN pratica AS p ON p.fkUsuario = u.idUsuario
        JOIN gasto AS g ON p.fkGasto = g.idGasto
        JOIN esporte AS e ON g.fkEsporte = e.idEsporte
        WHERE u.idUsuario = '${id}';
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

function buscarDadosDev() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        SELECT e.nome AS Pratica, COUNT(u.idUsuario) AS QtdTotal
        FROM usuario AS u 
        JOIN pratica AS p ON u.idUsuario = p.fkUsuario
        JOIN gasto AS g ON g.idGasto = p.fkGasto
        JOIN esporte AS e ON e.idEsporte = g.fkEsporte
        GROUP BY e.idEsporte;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

module.exports = {
    buscarDados,
    buscarDadosDev
};