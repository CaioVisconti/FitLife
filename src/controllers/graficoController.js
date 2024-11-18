var graficoModel = require("../models/graficoModel");

    function buscarDados(req, res) {
        var id = req.body.idServer;
        graficoModel.buscarDados(id)
            .then(function (lista2) {
                res.json({
                    consumidas: lista2[0].CalConsumidas
                })
            })
                .catch(
                    function (erro) {
                        console.log(erro);
                        console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }

    function buscarIdade(req, res) {
        var id = req.body.idServer;
        graficoModel.buscarIdade(id)
            .then(function (lista) {
                res.json({
                    gastoA: lista[0].Gasto,
                    idadeA: lista[0].Idade
                })
            })
                .catch(
                    function (erro) {
                        console.log(erro);
                        console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    }
                );
    }

    function coletarNotas(req, res) {
        var id = req.body.idServer;
        graficoModel.coletarNotas(id)
        .then(
            function (lista) {
                console.log(res.json);
                res.json({
                    notas: lista
                });
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
module.exports = {
    buscarDados,
    buscarIdade,
    coletarNotas
}