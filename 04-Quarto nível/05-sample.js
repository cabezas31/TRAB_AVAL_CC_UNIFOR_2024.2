const ID_PERSONAGEM_ALVO = 1000000000000;
const API_URL = `https://swapi.dev/api/people/${ID_PERSONAGEM_ALVO}/`;

async function buscarDadosDoPersonagem() {
    try {
        const respostaApi = await fetch(API_URL);

        if (!respostaApi.ok) {
            throw new Error(`Erro na resposta da API: ${respostaApi.status}`);
        }

        const dadosPersonagem = await respostaApi.json();
        return dadosPersonagem;
    } catch (erro) {
        console.error("Erro ao buscar os dados do personagem:", erro);
        return null;
    }
}

function exibirNomeDoPersonagem(nomePersonagem) {
    if (nomePersonagem) {
        console.log("Nome do personagem:", nomePersonagem);
    } else {
        console.log("Não foi possível obter o nome do personagem.");
    }
}

async function buscarEExibirNomeDoPersonagem() {
    const dadosPersonagem = await buscarDadosDoPersonagem();
    
    if (dadosPersonagem) {
        exibirNomeDoPersonagem(dadosPersonagem.name);
    }
}

buscarEExibirNomeDoPersonagem();