var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar-etapa-um", function (req, res) {
    usuarioController.cadastrarUm(req, res);
})

router.post("/cadastrar-etapa-dois", function (req, res) {
    usuarioController.cadastrarDois(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});


module.exports = router;