var database = require("../database/config")

function buscarDados(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarDadosG():" + id);
    
    var instrucaoSql = `
        SELECT SUM(qtdCal) AS CalConsumidas
            FROM refeicao
            WHERE fkUsuario = ${id};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

function buscarIdade(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarDadosG():" + id);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        SELECT g.gasto AS Gasto, TIMESTAMPDIFF(YEAR, u.dtNasc, now()) AS Idade
            FROM usuario AS u
            JOIN pratica AS p ON p.fkUsuario = u.idUsuario
            JOIN gasto AS g ON p.fkGasto = g.idGasto
            WHERE u.idUsuario = ${id};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

function coletarNotas(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarDadosG():" + id);
    
    var instrucaoSql = `
        SELECT av.nota AS Notas, COUNT(u.idUsuario) AS QtdUsu
            FROM usuario AS u JOIN avaliacao AS av ON u.idUsuario = av.fkUsuario
            GROUP BY av.nota;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

module.exports = {
    buscarDados,
    buscarIdade,
    coletarNotas
};