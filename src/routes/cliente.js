var express = require("express");
var router = express.Router();

var clienteController = require("../controllers/clienteController");

//Recebendo os dados do html e direcionando para a função cadastrar de clienteController.js
router.post("/addRef", function (req, res) {
    clienteController.cadastrarRef(req, res);
})

router.post("/edtEsporte", function (req, res) {
    clienteController.editarEsporte(req, res);
})

router.post("/edtPessoal", function (req, res) {
    clienteController.editarPessoal(req, res);
})

module.exports = router;