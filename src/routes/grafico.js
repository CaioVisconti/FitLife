var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.post("/coleta-grafico", function (req, res) {
    graficoController.buscarDados(req, res);
});

module.exports = router;