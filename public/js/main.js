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