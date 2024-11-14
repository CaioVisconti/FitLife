var graficoModel = require("../models/graficoModel");
var calorias = 0;

    function buscarDados(req, res) {
        var id = req.body.idServer;
            graficoModel.buscarDados(id)
                .then(
                    function (resultado) {
                        console.log(resultado);
                        graficoModel.buscarIdade(id)
                        .then(function (lista) {
                            res.json({
                                calorias: lista.CalConsumidas,
                                gasto: lista.Gasto,
                                idade: lista.Idade
                                })
                            
                        }
                        )
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
    buscarDados
}