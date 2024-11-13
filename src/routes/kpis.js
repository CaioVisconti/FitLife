var express = require("express");
var router = express.Router();

var kpisController = require("../controllers/kpisController");

router.post("/coleta-kpis", function (req, res) {
    kpisController.buscarDados(req, res);
});

router.post("/coleta-kpis-dev", function (req, res) {
    kpisController.buscarDadosDev(req, res);
});

module.exports = router;