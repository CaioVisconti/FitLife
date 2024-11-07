var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email não pode ser utilizado!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha não pode ser utilizada!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        aquarioModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].empresaId)
                            .then((resultadoAquarios) => {
                                if (resultadoAquarios.length > 0) {
                                    res.json({
                                        id: resultadoAutenticar[0].id,
                                        email: resultadoAutenticar[0].email,
                                        nome: resultadoAutenticar[0].nome,
                                        senha: resultadoAutenticar[0].senha
                                    });
                                } else {
                                    res.status(204).json({ aquarios: [] });
                                }
                            })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log()
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var cpf = req.body.cpfServer;
    var dtNasc = req.body.dtNascServer;
    var telefone = req.body.telefoneServer;
    var generoBiologico = req.body.generoBiologicoServer;
    var peso = req.body.pesoServer;
    var altura = req.body.alturaServer;
    var senha = req.body.senhaServer;
    var confirmacao = req.body.confirmacaoServer;

    // Faça as validações dos valores
    if (nome == undefined && nome.length <= 1) {
        res.status(400).send("Seu nome não pode ser registrado!");
    } else if (email == undefined && email.includes('@') && email.includes('.')) {
        res.status(400).send("Seu email não pode ser registrado!");
    } else if (senha == undefined && senha < 6) {
        res.status(400).send("Sua senha não pode ser registrada!");
    } else if (confirmacao != senha){
        res.status(400).send("Sua senha precisa ser igual à confirmação!");
    } else if (cpf.length != 11){
        res.status(400).send("Seu CPF não tem 11 números!");
    } else{
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, dtNasc, cpf, telefone, generoBiologico, email, senha, peso, altura)
            .then(
                function (resultado) {
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
}

module.exports = {
    autenticar,
    cadastrar
}