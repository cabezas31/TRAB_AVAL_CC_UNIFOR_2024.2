async function buscarEDetalharPlaneta(idPlaneta) {
    try {
        const resposta = await fetch(`https://swapi.dev/api/planets/${idPlaneta}/`);
        const planeta = await resposta.json();

        const { name, climate, population } = planeta;

        const detalhesPlaneta = `
            Nome: ${name},
            Clima: ${climate},
            População: ${population},
        `;

        console.log(`Detalhes do Planeta:\n${detalhesPlaneta}`);

        const populacao = parseInt(planeta.population);

        declaraTamanhoDaPopulacaoDoPlaneta(populacao);
        
    } catch (erro) {
        console.error("Erro ao buscar o planeta:", erro);
    }
}

function declaraTamanhoDaPopulacaoDoPlaneta(populacao){
    const populacaoMedia = 1000000;

    if (populacao > populacaoMedia) {
        console.log("Este planeta é muito populado.");
    } else {
        console.log("Este planeta tem uma população pequena.");
    }
}

buscarEDetalharPlaneta(1);
