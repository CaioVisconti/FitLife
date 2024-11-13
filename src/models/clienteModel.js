var database = require("../database/config")

function cadastrarRef(descricao, qtdCal, horario, id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", descricao, qtdCal, horario, id);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO refeicao (descricao, qtdCal, horario, fkUsuario) VALUES (${descricao}, ${qtdCal}, ${horario}, ${id});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

function editarEsporte(diaDesc, diaExec, minutos, intensidade, id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", diaDesc, diaExec, minutos, intensidade, id);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
         UPDATE pratica SET diaDesc = '${diaDesc}', diaExec = '${diaExec}', minutos = '${minutos}', fkGasto = '${intensidade}' WHERE fkUsuario = '${id}';
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

function selecionarEsporte(id) {
    
    var instrucaoSql = `
        SELECT e.nome AS pratica, g.gasto AS gasto, p.diaExecucao AS execucao,
            p.diaDescanso AS descanso FROM pratica AS p 
            JOIN gasto AS g ON g.idGasto = p.fkGasto
            JOIN esporte AS e ON g.fkEsporte = e.idEsporte
            WHERE p.fkUsuario = '${id}';
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editarPessoal(telefone, email, peso, altura, id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", telefone, email, peso, altura, id);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        UPDATE usuario SET telefone = '${telefone}', email = '${email}', peso = ${peso}, altura = ${altura} WHERE idUsuario = '${id}';
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

function selecionarUsuario(id) {
    
    var instrucaoSql = `
        SELECT nome AS Nome, cpf AS CPF, dtNasc AS Data, telefone AS Telefone, email AS Email,
            peso AS Peso, altura AS Altura FROM usuario
            WHERE idUsuario = '${id}';
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarRef,
    editarEsporte,
    selecionarEsporte,
    editarPessoal,
    selecionarUsuario
};