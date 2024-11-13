const ID_PLANETA_INICIAL = 1;
const API_URL_BASE = "https://swapi.dev/api/planets/";

async function buscarDadosDoPlaneta(idPlaneta) {
    try {
        const respostaApi = await fetch(`${API_URL_BASE}${idPlaneta}/`);
        
        if (!respostaApi.ok) {
            console.warn(`ID ${idPlaneta} não encontrado. Encerrando busca.`);
            return null;
        }

        const dadosPlaneta = await respostaApi.json();
        return dadosPlaneta;
    } catch (erro) {
        console.error("Erro ao buscar os dados do planeta:", erro);
        return null;
    }
}

function exibirNomeDoPlaneta(nomePlaneta) {
    console.log("Nome do planeta:", nomePlaneta);
}

async function buscarPlanetasEmSequencia(idPlaneta) {
    const dadosPlaneta = await buscarDadosDoPlaneta(idPlaneta);

    if (dadosPlaneta) {
        exibirNomeDoPlaneta(dadosPlaneta.name);

        await buscarPlanetasEmSequencia(idPlaneta + 1);
    }
}

buscarPlanetasEmSequencia(ID_PLANETA_INICIAL);
