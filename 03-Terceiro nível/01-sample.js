async function buscarEDetalharNave() {
    try {
        const resposta = await fetch("https://swapi.dev/api/starships/9/");
        const nave = await resposta.json();

        const { name, model, manufacturer, crew } = nave;

        const detalhesNave = `
            Nome: ${name},
            Modelo: ${model},
            Fabricante: ${manufacturer},
        `;

        console.log(`Detalhes da Nave:\n${detalhesNave}`);


        const tamanhoTripulacao = parseInt(crew);

        declaraTamanhoDaNave(tamanhoTripulacao);

    } catch (erro) {
        console.error("Erro ao buscar detalhes da nave:", erro);
    }
}

function declaraTamanhoDaNave(tamanhoTripulacao){
    const tripulacaoMedia = 100;

    if (tamanhoTripulacao > tripulacaoMedia) {
        console.log("Esta é uma nave grande.");
    } else {
        console.log("Esta é uma nave pequena.");
    }
}

buscarEDetalharNave();
