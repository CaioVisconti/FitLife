// Login

function logar() {
  var email = '';
  var senha = '';
  var tamanho_email = '';
  email = ipt_email.value;
  senha = ipt_senha.value;
  tamanho_email = email.length;

  if(!email.includes('@') || !email.includes('.com') || tamanho_email < 6) {
    div_resultado.innerHTML = `Insira um email válido`;
  } else {
    div_resultado.innerHTML = `JUNTAR COM API`;
  }
}

// Contato:

/*
Email: contatofitlifesptech@outlook.com
Senha: Urubu#100
*/

const emailContato = "contatofitlifesptech@outlook.com";
const senha = "A41A100111C8581E804263A7E4DE86270407";

function enviar() {
  var nome = ipt_nome.value;
  var email = ipt_email.value;
  var assunto = ipt_assunto.value;
  var mensagem = ipt_mensagem.value; 
  var validacao = ipt_confirmacao.checked;
  var envio = 0;

  if(nome == '' || email == '' || assunto == '' || mensagem == '') {
    div_alerta.innerHTML = 'Insira todos os campos para entrar em contato.'
  } else if(!(email.includes('@')) || email.length < 6 || !(email.includes('.com'))) {
    div_alerta.innerHTML = 'Por favor insira um email válido.'
  } else if(validacao){
    var mensagemEnviada = `
      Nome Usuário: ${nome}<br>
      Email: ${email}<br>
      Assunto: ${assunto}<br>
      Mensagem: ${mensagem}<br>
      Aceita receber email de volta
    `;
    envio = 1;
    div_alerta.innerHTML = `<span class="confirmacao_envio">Mensagem enviada com sucesso!</span>`
  } else {
    var mensagemEnviada = `
      Nome Usuário: ${nome}<br>
      Email: ${email}<br>
      Assunto: ${assunto}<br>
      Mensagem: ${mensagem}<br>
      Não aceita receber email de volta`;
      envio = 1;
      div_alerta.innerHTML = `<span class="confirmacao_envio">Mensagem enviada com sucesso!</span>`
  }
    
    if (envio == 1) {
      Email.send({
          Host : "smtp.elasticemail.com",
          Port: 2525,
          Username : emailContato,
          Password : senha,
          To : emailContato,
          From : emailContato,
          Subject : assunto,
          Body : mensagemEnviada
      }).then(
        div_alerta.innerHTML = `<span class="confirmacao_envio">Mensagem enviada com sucesso!</span>`
      );
    }
}

function calcular() {
  // Trocar o display do resultado
  var resultado = document.getElementById('div_direita_simulador');
  resultado.style.display = 'flex';

  // Obtenção dos dados das inputs
  altura = Number(ipt_altura.value);
  peso = Number(ipt_peso.value);
  idade = Number(ipt_idade.value);
  generoB = slt_generoB.value;

        alturaR = altura / 100;

  if(generoB == 'masculino') {
      genero = 'Masculino'
      gasto = Math.ceil(66 + (13.8 * peso) + (5 * altura) - (6.8 * idade));
  } else if (generoB == 'feminino') {
      genero = 'Feminino'
      gasto = Math.ceil(655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade));
  }
  
  if(peso == 0 || altura == 0 || idade == 0 || generoB == '#') {
  div_direita_simulador.innerHTML = `<span class="titulo-direita-simulador">Por favor, insira todos os campos para o cálculo</span>`;
    } else {
        div_direita_simulador.innerHTML = `
        <span class="titulo-direita-simulador">Gasto basal de calorias total:</span> <br>

        <span class="texto-direita-simulador">A taxa metabólica basal (TMB) é a quantidade de energia que o corpo gasta para manter as funções vitais, como respiração, batimentos do coração e temperatura corporal</span><br>

        <span class="titulo-direita-simulador">Taxa metabólica basal:</span> <br>

        <span class="texto-direita-simulador">
          Com a idade de ${idade} anos, <br>
          com a altura de ${alturaR} m, <br>
          com o peso de ${peso} kg, <br>
          com o gênero biológico ${genero}: <br> <br>
          Gasto calórico basal = ${gasto} kcal
        </span>
        `;
    }

}