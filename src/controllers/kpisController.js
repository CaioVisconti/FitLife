var kpisModel = require("../models/kpisModel");

function buscarDadosDev(req, res) {
    var id = req.body.idServer;
    console.log(id);
        kpisModel.buscarDadosDev()
            .then(
                function (lista) {
                    console.log(res.json);
                    res.json({
                        pratica: lista[0].Pratica,
                        qtdTotal: lista[0].QtdTotal,
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

    function buscarDados(req, res) {
        var id = req.body.idServer;
            kpisModel.buscarDados(id)
                .then(
                    function (lista) {
                        console.log(res.json);
                        res.json({
                            nome: lista[0].Nome,
                            email: lista[0].Email,
                            cpf: lista[0].CPF,
                            data: lista[0].Data,
                            telefone: lista[0].Telefone,
                            peso: lista[0].Peso,
                            altura: lista[0].Altura,
                            esporte: lista[0].Esporte,
                            gasto: lista[0].Gasto,
                            diaExe: lista[0].DiaExe,
                            diaDes: lista[0].DiaDes,
                            minutos: lista[0].Minutos,
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
    buscarDadosDev
}