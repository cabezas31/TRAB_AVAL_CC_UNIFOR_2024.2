function exibirTempoDeVidaMedio(tempoDeVidaMedio) {
    if (tempoDeVidaMedio) {
        console.log("Tempo de vida médio da espécie:", tempoDeVidaMedio.toUpperCase());
    } else {
        console.log("Não foi possível obter o tempo de vida médio da espécie.");
    }
}

async function buscarEExibirTempoDeVidaMedio() {
    const dadosEspecie = await buscarDadosDaEspecie(ID_ESPECIE_ALVO);
    
    if (dadosEspecie) {
        exibirTempoDeVidaMedio(dadosEspecie.average_lifespan);
    }
}

buscarEExibirTempoDeVidaMedio();
