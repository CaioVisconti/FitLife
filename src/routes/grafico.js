var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.post("/coleta-grafico", function (req, res) {
    graficoController.buscarDados(req, res);
});

router.post("/coleta-grafico-gasto", function (req, res) {
    graficoController.buscarIdade(req, res);
});

module.exports = router;