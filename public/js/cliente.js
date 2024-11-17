const modal = document.getElementById('modal')

function adicionar() {
    modal.style.display = 'flex';
    modal.showModal();

    modal.innerHTML = `
    <div class="fundo-modal">
        <div class="superior-modal">
            <span class="titulo-modal-pessoal">Adicionar Refeição</span>
            <div onclick="fecharModal()">
                <button class="close-modal"></button>
            </div>
        </div>
        <div style="width: 100%; height: 50%; display: flex; flex-direction: column; align-items: center; gap: 10%">
            <input type="text" class="input-modal" placeholder="Descrição" id="ipt_descricao">
            <input type="number" class="input-modal" placeholder="Quantidade de calorias" id="ipt_qtdCal">
            <input type="time" class="input-modal" placeholder="Horário" id="ipt_horario">
        </div>
        <button onclick="addRefeicao()" class="botao-modal">Adicionar</button>
    </div>
    `;
}

function retirar() {
    modal.style.display = 'flex';
    modal.showModal();

    modal.innerHTML = `
    <div class="fundo-modal">
        <div class="superior-modal">
            <span class="titulo-modal">Retirar Refeição</span>
            <div onclick="fecharModal()">
                <button class="close-modal"></button>
            </div>
        </div>
        <div class="formulario-modal">
            <input type="number" class="input-modal" placeholder="Número da refeição" id="ipt_idrmv">
            <button onclick="remRefeicao()" class="botao-modal">Remover</button>
        </div>
    </div>
    `;
}

function editarExercicio() {
    modal.style.display = `flex`;
    modal.showModal();

    modal.innerHTML = `
    <div class="fundo-modal">
        <div class="superior-modal">
            <span class="titulo-modal">Editar Exercício Físico</span>
            <div onclick="fecharModal()">
                <button class="close-modal"></button>
            </div>
        </div>
        <div class="formulario-modal">
            <select class="input-modal" id="slt_esporte">
                <option value="#">Esporte</option>
                <option value="e1">Musculação</option>
                <option value="e2">Vôlei</option>
                <option value="e3">Basquete</option>
                <option value="e4">Futebol</option>
                <option option value="e5">Crossfit</option>
                <option value="e6">Calistenia</option>
                <option value="e7">Corrida</option>
            </select>
            <select class="input-modal" id="slt_intensidade">
                <option value="#">Intensidade</option>
                <option value="i1">Leve</option>
                <option value="i2">Moderada</option>
                <option value="i3">Intensa</option>
            </select>
            <input type="number" class="input-modal" placeholder="Dias de Execução" id="ipt_diaExec">
            <input type="number" class="input-modal" placeholder="Tempo de execução (min)" id="ipt_min"> <br>
            <button class="botao-modal" onclick="edtEsporte()">Trocar</button>
        </div>
    </div>
    `;
}

function editarPessoal() {
    modal.style.display = `flex`;
    modal.showModal();

    modal.innerHTML = `
    <div class="fundo-modal">
        <div class="superior-modal">
            <span class="titulo-modal">Editar Dados Pessoais</span>
            <div onclick="fecharModal()">
                <button class="close-modal"></button>
            </div>
        </div>
        <div class="formulario-modal">
            <input type="number" class="input-modal" placeholder="Telefone" id="ipt_telefone">
            <input type="text" class="input-modal" placeholder="Email" id="ipt_email">
            <input type="number" class="input-modal" placeholder="Peso" id="ipt_peso">
            <input type="number" class="input-modal" placeholder="Altura (em centímetros)" id="ipt_altura">
            <button onclick="edtPessoal()" class="botao-modal">Editar</button>
        </div>
    </div>
    `;
}

function avaliarModal() {
    modal.style.display = `flex`;
    modal.showModal();

    if(notaPesquisada == 5) {
        modal.innerHTML = `
            <div class="fundo-modal">
                <div class="superior-modal">
                    <span class="titulo-modal">Avaliar</span>
                    <div onclick="fecharModal()">
                        <button class="close-modal"></button>
                    </div>
                </div>
                <div class="formulario-modal-avaliacao">
                    <div style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)" onclick="avaliacao1()" class="botao-avaliacao" id="avaUm"></div>
                    <div style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)" onclick="avaliacao2()" class="botao-avaliacao" id="avaDois"></div>
                    <div style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)" onclick="avaliacao3()" class="botao-avaliacao" id="avaTres"></div>
                    <div style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)" onclick="avaliacao4()" class="botao-avaliacao" id="avaQuatro"></div>
                    <div style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)" onclick="avaliacao5()" class="botao-avaliacao" id="avaCinco"></div>
                </div>
                <button onclick="enviarAva()" class="botao-modal">Enviar</button>
            </div>
        `;
    } else if(notaPesquisada == 4) {
        modal.innerHTML = `
            <div class="fundo-modal">
                <div class="superior-modal">
                    <span class="titulo-modal">Avaliar</span>
                    <div onclick="fecharModal()">
                        <button class="close-modal"></button>
                    </div>
                </div>
                <div class="formulario-modal-avaliacao">
                    <div style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)" onclick="avaliacao1()" class="botao-avaliacao" id="avaUm"></div>
                    <div style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)" onclick="avaliacao2()" class="botao-avaliacao" id="avaDois"></div>
                    <div style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)" onclick="avaliacao3()" class="botao-avaliacao" id="avaTres"></div>
                    <div style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)" onclick="avaliacao4()" class="botao-avaliacao" id="avaQuatro"></div>
                    <div style="background-image: url(./assets/img/bxs-star.svg)" onclick="avaliacao5()" class="botao-avaliacao" id="avaCinco"></div>
                </div>
                <button onclick="enviarAva()" class="botao-modal">Enviar</button>
            </div>
        `;
    } else if (notaPesquisada == 3) {
        modal.innerHTML = `
            <div class="fundo-modal">
                <div class="superior-modal">
                    <span class="titulo-modal">Avaliar</span>
                    <div onclick="fecharModal()">
                        <button class="close-modal"></button>
                    </div>
                </div>
                <div class="formulario-modal-avaliacao">
                    <div style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)" onclick="avaliacao1()" class="botao-avaliacao" id="avaUm"></div>
                    <div style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)" onclick="avaliacao2()" class="botao-avaliacao" id="avaDois"></div>
                    <div style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)" onclick="avaliacao3()" class="botao-avaliacao" id="avaTres"></div>
                    <div style="background-image: url(./assets/img/bxs-star.svg)" onclick="avaliacao4()" class="botao-avaliacao" id="avaQuatro"></div>
                    <div style="background-image: url(./assets/img/bxs-star.svg)" onclick="avaliacao5()" class="botao-avaliacao" id="avaCinco"></div>
                </div>
                <button onclick="enviarAva()" class="botao-modal">Enviar</button>
            </div>
        `;
    } else if (notaPesquisada == 2) {
        modal.innerHTML = `
            <div class="fundo-modal">
                <div class="superior-modal">
                    <span class="titulo-modal">Avaliar</span>
                    <div onclick="fecharModal()">
                        <button class="close-modal"></button>
                    </div>
                </div>
                <div class="formulario-modal-avaliacao">
                    <div style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)" onclick="avaliacao1()" class="botao-avaliacao" id="avaUm"></div>
                    <div style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)" onclick="avaliacao2()" class="botao-avaliacao" id="avaDois"></div>
                    <div style="background-image: url(./assets/img/bxs-star.svg)" onclick="avaliacao3()" class="botao-avaliacao" id="avaTres"></div>
                    <div style="background-image: url(./assets/img/bxs-star.svg)" onclick="avaliacao4()" class="botao-avaliacao" id="avaQuatro"></div>
                    <div style="background-image: url(./assets/img/bxs-star.svg)" onclick="avaliacao5()" class="botao-avaliacao" id="avaCinco"></div>
                </div>
                <button onclick="enviarAva()" class="botao-modal">Enviar</button>
            </div>
        `;
    } else if (notaPesquisada == 1) {
        modal.innerHTML = `
            <div class="fundo-modal">
                <div class="superior-modal">
                    <span class="titulo-modal">Avaliar</span>
                    <div onclick="fecharModal()">
                        <button class="close-modal"></button>
                    </div>
                </div>
                <div class="formulario-modal-avaliacao">
                    <div style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)" onclick="avaliacao1()" class="botao-avaliacao" id="avaUm"></div>
                    <div style="background-image: url(./assets/img/bxs-star.svg)" onclick="avaliacao2()" class="botao-avaliacao" id="avaDois"></div>
                    <div style="background-image: url(./assets/img/bxs-star.svg)" onclick="avaliacao3()" class="botao-avaliacao" id="avaTres"></div>
                    <div style="background-image: url(./assets/img/bxs-star.svg)" onclick="avaliacao4()" class="botao-avaliacao" id="avaQuatro"></div>
                    <div style="background-image: url(./assets/img/bxs-star.svg)" onclick="avaliacao5()" class="botao-avaliacao" id="avaCinco"></div>
                </div>
                <button onclick="enviarAva()" class="botao-modal">Enviar</button>
            </div>
        `;
    } else {
        modal.innerHTML = `
        <div class="fundo-modal">
            <div class="superior-modal">
                <span class="titulo-modal">Avaliar</span>
                <div onclick="fecharModal()">
                    <button class="close-modal"></button>
                </div>
            </div>
            <div class="formulario-modal-avaliacao">
                <div style="background-image: url(./assets/img/bxs-star.svg);" onclick="avaliacao1()" class="botao-avaliacao" id="avaUm"></div>
                <div style="background-image: url(./assets/img/bxs-star.svg);" onclick="avaliacao2()" class="botao-avaliacao" id="avaDois"></div>
                <div style="background-image: url(./assets/img/bxs-star.svg);" onclick="avaliacao3()" class="botao-avaliacao" id="avaTres"></div>
                <div style="background-image: url(./assets/img/bxs-star.svg);" onclick="avaliacao4()" class="botao-avaliacao" id="avaQuatro"></div>
                <div style="background-image: url(./assets/img/bxs-star.svg);" onclick="avaliacao5()" class="botao-avaliacao" id="avaCinco"></div>
            </div>
            <button onclick="enviarAva()" class="botao-modal">Enviar</button>
        </div>
        `;
    }
}

var nota = 0;

function avaliacao1() {
    avaUm.style.backgroundImage = `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)`;
    avaDois.style.backgroundImage = `url(./assets/img/bxs-star.svg)`;
    avaTres.style.backgroundImage = `url(./assets/img/bxs-star.svg)`;
    avaQuatro.style.backgroundImage = `url(./assets/img/bxs-star.svg)`;
    avaCinco.style.backgroundImage = `url(./assets/img/bxs-star.svg)`;
    nota = 1;
}

function avaliacao2() {
    avaUm.style.backgroundImage = `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)`;
    avaDois.style.backgroundImage = `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)`;
    avaTres.style.backgroundImage = `url(./assets/img/bxs-star.svg)`;
    avaQuatro.style.backgroundImage = `url(./assets/img/bxs-star.svg)`;
    avaCinco.style.backgroundImage = `url(./assets/img/bxs-star.svg)`;
    nota = 2;
}

function avaliacao3() {
    avaUm.style.backgroundImage = `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)`;
    avaDois.style.backgroundImage = `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)`;
    avaTres.style.backgroundImage = `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)`;
    avaQuatro.style.backgroundImage = `url(./assets/img/bxs-star.svg)`;
    avaCinco.style.backgroundImage = `url(./assets/img/bxs-star.svg)`;
    nota = 3;
}

function avaliacao4() {
    avaUm.style.backgroundImage = `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)`;
    avaDois.style.backgroundImage = `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)`;
    avaTres.style.backgroundImage = `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)`;
    avaQuatro.style.backgroundImage = `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)`;
    avaCinco.style.backgroundImage = `url(./assets/img/bxs-star.svg)`;
    nota = 4;
}

function avaliacao5() {
    avaUm.style.backgroundImage = `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)`;
    avaDois.style.backgroundImage = `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)`;
    avaTres.style.backgroundImage = `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)`;
    avaQuatro.style.backgroundImage = `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)`;
    avaCinco.style.backgroundImage = `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlZJREFUSEvFljtrFFEUgL+zBLRQCzMzWUy2jJjOyi6+UDAgiGCClZAFEex8NP4DwWcniG7QQvCBhfhoUoiPwk6wMWIjMYp3dkFZ8QG6R+a6G2Z3Z3Znris5zTD3nnO+c+7j3COskMgKcXEGq2EqCloCHrkE7wRWwyTCEwtUJiXgWV64GzjkIfzNGHggPnv/O1hDNgILMZACE+K3jfWNI3fGariGcKjNszAnHuW+tJhCLrCGbADeAUMdkF/8ZlSKmKzwvOCzwIlE58ppCTg1cLCGrAWWwH6TpM4PRqTE9yzwtozVsBlhEzAKdllb37Hm/6o+Tn8CH4BF4GMz0CXUBrwgAS9b9stgNcwg3MwSrbOOMi0Bd2zhaTlRwx7ErQplDERRtknA0zawLUIhB4Eb8YAyOu2nFm3BAfG537XUy5kPHl6nwZSM8DweXeJ1GljmSo0GO6TIq84lSb3HA4AvouyUgLdJ+9CzgPwDPIJtFd9eqUTpDVaGqFIHVvc7PR3zF8TneC+b3uAqW1Be5IRG6q/FZ8IdHNqozzmAoUBJhnnvttSGuwj7ncDCUfG45AYO+QQEKcZfm+NrUubvic++3GA1jCO8STF8TKHZDDS4DmxP0PvGZ9bLOFHV6pL0e2woI1ztsIhO+EnxuRwf15AjwJmuJ1PYLR7z+cBVKiizMaN5CpRl2D55XaI1SjSoALtik+fFT24c0jOucgtlGviCckwC5rIcMjXMIlwE1iHcFo+ZfBkbigiHESri2Yc8s2iNMRq2+bsivm0Msu9xZoqjYq5mz5GRaPYHv7uiH+aIK3QAAAAASUVORK5CYII=)`;
    nota = 5;
}

function enviar() {
    modal.close();
    modal.style.display = 'none';
    modal.innerHTML = ``;
}

function fecharModal() {
    modal.close();
    modal.style.display = 'none';
    modal.innerHTML = '';
}