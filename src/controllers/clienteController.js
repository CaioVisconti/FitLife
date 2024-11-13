var usuarioModel = require("../models/usuarioModel");

function cadastrarRef(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var descricao = req.body.descricaoServer;
    var qtdCal = req.body.qtdCalServer;
    var horario = req.body.horarioServer;
    var id = req.body.idServer;

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        clienteModel.cadastrarRef(descricao, qtdCal, horario, id)
        .then(
            function (resultado) {
                console.log(resultado)
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }

    function editarEsporte(req, res) {
        // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
        var diaDesc = diaDescServer;
        var diaExec = diaExecServer;
        var minutos = minutosServer;
        var intensidade = intensidadeServer;
        var id = idServer;
    
            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        clienteModel.editarEsporte(diaDesc, diaExec, minutos, intensidade, id)
            .then(
                function (resultado) {
                    console.log(resultado)
                    clienteModel.selecionarEsporte(id)
                    .then(function (lista) {
                        res.json({
                            nome: lista[0].pratica,
                            gasto: lista[0].gasto,
                            execucao: lista[0].execucao,
                            descanso: lista[0].descanso,
                            });
                    })
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }

    function editarPessoal(req, res) {
        // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
        var telefone = telefoneServer;
        var email = emailServer;
        var peso = pesoServer;
        var altura = intensidadeServer;
        var id = idServer;
    
            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        clienteModel.editarPessoal(telefone, email, peso, altura, id)
            .then(
                function (resultado) {
                    console.log(resultado)
                    clienteModel.selecionarUsuario(id)
                    .then(function (lista) {
                        res.json({
                            nome: lista[0].nome,
                            cpf: lista[0].CPF,
                            data: lista[0].Data,
                            telefone: lista[0].Telefone,
                            email: lista[0].Email,
                            peso: lista[0].Peso,
                            altura: lista[0].Altura
                            });
                    })
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    cadastrarRef,
    editarEsporte,
    editarPessoal
}