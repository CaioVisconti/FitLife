var altura = 0;
var peso = 0;
var idade = 0;
var generoB = '';
var gasto = 0;
var alturaR = 0;

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
            gasto = (66 + (13.8 * peso) + (5 * altura) - (6.8 * idade));
        } else if (generoB == 'feminino') {
            genero = 'Feminino'
            gasto = (655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade));
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