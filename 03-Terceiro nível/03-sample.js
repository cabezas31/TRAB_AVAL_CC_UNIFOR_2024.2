async function buscarEDetalharPlaneta(idPlaneta) {
    try {
        const resposta = await fetch(`https://swapi.dev/api/planets/${idPlaneta}/`);
        const planeta = await resposta.json();

        const { 
            name, 
            climate, 
            population 
        } = planeta;

        const detalhesPlaneta = `
            Nome: ${name},
            Clima: ${climate},
            População: ${population},
        `;

        console.log(`Detalhes do Planeta:\n${detalhesPlaneta}`);

        const populacaoMedia = 1000000;

        const populacao = parseInt(planeta.population);
        
        if (populacao > populacaoMedia) {
            console.log("Este planeta é muito populado.");
        } else {
            console.log("Este planeta tem uma população pequena.");
        }
    } catch (erro) {
        console.error('Erro ao buscar o planeta:', erro);
    }
}

buscarEDetalharPlaneta(1);
