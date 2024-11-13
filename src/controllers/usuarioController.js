var usuarioModel = require("../models/usuarioModel");

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
                        console.log(resultadoAutenticar[0].idUsuario);
                            res.json({
                                id: resultadoAutenticar[0].id,
                                nome: resultadoAutenticar[0].nome,
                                email: resultadoAutenticar[0].email,
                                senha: resultadoAutenticar[0].senha,
                                });
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

function cadastrarUm(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var dtNasc = req.body.dtNascServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var cpf = req.body.cpfServer;
    var telefone = req.body.telefoneServer;
    var genero = req.body.generoServer;
    var peso = req.body.pesoServer;
    var altura = req.body.alturaServer;

    // Faça as validações dos valores
    if (nome == undefined && nome.length <= 1) {
        res.status(400).send("Seu nome não pode ser registrado!");
    } else if (email == undefined && email.includes('@') && email.includes('.')) {
        res.status(400).send("Seu email não pode ser registrado!");
    } else if (senha == undefined && senha < 6) {
        res.status(400).send("Sua senha não pode ser registrada!");
    } else if (cpf.length != 11){
        res.status(400).send("Seu CPF não tem 11 números!");
    } else{
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarUm(nome, dtNasc, email, senha, cpf, telefone, genero, peso, altura)
            .then(
                function (resultado) {
                    console.log(resultado)
                    usuarioModel.selecionarID(cpf)
                    .then(function (id) {
                        res.json(id[0].idUsuario)
                    })
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

function cadastrarDois(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var diaExe = req.body.diaExeServer;
    var diaDes = req.body.diaDesServer;
    var minutos = req.body.minutosServer;
    var intensidade = req.body.intensidadeServer;
    var id = req.body.IDServer;

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarDois(diaExe, diaDes, minutos, intensidade, id)
            .then(
                function (resultado) {
                    console.log(resultado)
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
//}

module.exports = {
    autenticar,
    cadastrarUm,
    cadastrarDois
}