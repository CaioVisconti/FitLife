var express = require("express");
var router = express.Router();

var clienteController = require("../controllers/clienteController");

//Recebendo os dados do html e direcionando para a função cadastrar de clienteController.js
router.post("/addRef", function (req, res) {
    clienteController.cadastrarRef(req, res);
})

router.post("/rmvRef", function (req, res) {
    clienteController.removerRef(req, res);
})

router.post("/buscarRef", function (req, res) {
    clienteController.buscarRef(req,res);
})

router.put("/edtEsporte", function (req, res) {
    clienteController.editarEsporte(req, res);
})

router.put("/edtPessoal", function (req, res) {
    clienteController.editarPessoal(req, res);
})

router.post("/inserirAva", function (req, res) {
    clienteController.cadastrarNota(req, res);
})

router.put("/atualizarAva", function (req, res) {
    clienteController.atualizarNota(req, res);
})

router.post("/pesquisarAva", function (req, res) {
    clienteController.pesquisarNota(req, res);
})

module.exports = router;