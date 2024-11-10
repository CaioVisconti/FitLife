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

// Cadastro:

  function cadastrarUm() {
    var nome = ipt_nome.value;
    var dtNasc = ipt_dtNasc.value;
    var email = ipt_email.value;
    var senha = ipt_senha.value;
    var confirmacao = ipt_confirmacao.value;
    var CPF = ipt_CPF.value;
    var telefone = ipt_telefone.value;
    var peso = ipt_peso.value;
    var altura = ipt_altura.value;

    console.log(`${nome} ${dtNasc} ${email} ${senha} ${confirmacao} ${CPF} ${telefone} ${peso} ${altura}`)

    etapa1.style.color = 'black';
    etapa1.style.backgroundColor = 'white';
    etapa2.style.color = 'white';
    etapa2.style.backgroundColor = '#04364A'

    formulario.innerHTML = `
    <div style="height: 300px; display: flex; flex-direction: column; justify-content: space-between;">
      <select class="input" id="slt_esporte">
        <option value="#">Esporte</option>
        <option value="e1">Musculação</option>
        <option value="e2">Vôlei</option>
        <option value="e3">Basquete</option>
        <option value="e4">Futebol</option>
        <option option value="e5">Crossfit</option>
        <option value="e6">Calistenia</option>
        <option value="e7">Corrida</option>
      </select>
      <select class="input" id="slt_intensidade">
        <option value="#">Intensidade</option>
        <option value="i1">Leve</option>
        <option value="i2">Moderada</option>
        <option value="i3">Intensa</option>
      </select>
      <input class="input" type="text" id="ipt_diaExe" placeholder="Dias de Execução">
      <input class="input" type="text" id="ipt_diaDes" placeholder="Dias de Descanso">
      <input class="input" type="text" id="ipt_minutos" placeholder="Tempo de atividade (minutos)">
    </div>
    `;

    botao_parte1.innerHTML = `<button class="botao-cadastro" onclick="cadastroFinal()">Finalizar Cadastro</button>`;
  }

  function cadastroFinal() {
    var esporte = slt_esporte.value;
    var intensidade = slt_intensidade.value;
    var diaExe = ipt_diaExe.value;
    var diaDes = ipt_diaDes.value;
    var minutos = ipt_minutos.value;

    if(esporte == 'e1') {
      esporte = 1
      if(intensidade == 'i1') {
        intensidade = 1;
      } else if(intensidade == 'i2') {
        intensidade = 2;
      } else if(intesidade == 'i3') {
        intensidade = 3;
      }
    } else if(esporte == 'e2') {
      esporte = 2
      if(intensidade == 'i1') {
        intensidade = 4;
      } else if(intensidade == 'i2') {
        intensidade = 5;
      } else if(intesidade == 'i3') {
        intensidade = 6;
      }
    } else if(esporte == 'e3') {
      esporte = 3;
      if(intensidade == 'i1') {
        intensidade = 7;
      } else if(intensidade == 'i2') {
        intensidade = 8;
      } else if(intesidade == 'i3') {
        intensidade = 9;
      }
    } else if(esporte == 'e4') {
      esporte = 4;
      if(intensidade == 'i1') {
        intensidade = 10;
      } else if(intensidade == 'i2') {
        intensidade = 11;
      } else if(intesidade == 'i3') {
        intensidade = 12;
      }
    } else if(esporte == 'e5') {
      esporte = 5;
      if(intensidade == 'i1') {
        intensidade = 13;
      } else if(intensidade == 'i2') {
        intensidade = 14;
      } else if(intesidade == 'i3') {
        intensidade = 15;
      }
    } else if(esporte == 'e6') {
      esporte = 6;
      if(intensidade == 'i1') {
        intensidade = 16;
      } else if(intensidade == 'i2') {
        intensidade = 17;
      } else if(intesidade == 'i3') {
        intensidade = 18;
      }
    } else if(esporte == 'e7') {
      esporte = 7;
      if(intensidade == 'i1') {
        intensidade = 19;
      } else if(intensidade == 'i2') {
        intensidade = 20;
      } else if(intesidade == 'i3') {
        intensidade = 21;
      }
    }

    console.log(`${esporte} ${intensidade} ${diaExe} ${diaDes} ${minutos}`);
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