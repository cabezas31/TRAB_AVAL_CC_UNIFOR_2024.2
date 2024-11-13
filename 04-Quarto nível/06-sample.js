const ID_NAVE_ALVO = 10;
const API_URL_BASE = "https://swapi.dev/api/starships/";

async function buscarDadosDaNave(idNave) {
    try {
        const respostaApi = await fetch(`${API_URL_BASE}${idNave}/`);

        if (!respostaApi.ok) {
            throw new Error(`Erro na resposta da API: ${respostaApi.status}`);
        }

        const dadosNave = await respostaApi.json();
        return dadosNave;
    } catch (erro) {
        console.error("Erro ao buscar os dados da nave:", erro);
        return null;
    }
}

function exibirNomeDaNave(nomeNave) {
    if (nomeNave) {
        console.log("Nome da nave:", nomeNave);
    } else {
        console.log("Não foi possível obter o nome da nave.");
    }
}

async function buscarEExibirNomeDaNave(idNave) {
    const dadosNave = await buscarDadosDaNave(idNave);
    
    if (dadosNave) {
        exibirNomeDaNave(dadosNave.name);
    }
}

buscarEExibirNomeDaNave(ID_NAVE_ALVO);