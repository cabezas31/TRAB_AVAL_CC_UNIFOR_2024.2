async function buscarPersonagemENave(idPersonagem) {
    try {
        const respostaPersonagem = await fetch(`https://swapi.dev/api/people/${idPersonagem}/`);
        const personagem = await respostaPersonagem.json();

        const { name: namePersonagem, starships: starshipsPersonagem } = personagem;

        const qtdDeNaves = starshipsPersonagem.length;

        if (qtdDeNaves > 0) {
            const respostaNave = await fetch(starshipsPersonagem[0]);
            const nave = await respostaNave.json();

            const { crew: crewNave } = nave;

            const tripulacao = parseInt(crewNave);

            declaraTamanhoDaNaveParaTripulacao(tripulacao);

        } else {
            console.log(`${namePersonagem} não possui naves registradas.`);
        }

    } catch (erro) {
        console.error("Erro ao buscar o personagem ou sua nave:", erro);
    }
}

function declaraTamanhoDaNaveParaTripulacao(tripulacao){
    const tripulacaoMedia = 100;

    if (tripulacao > tripulacaoMedia) {
        console.log(`A nave ${tripulacao.name} é considerada grande com ${tripulacao} tripulantes.`);
    } else {
        console.log(`A nave ${tripulacao.name} é pequena com ${tripulacao} tripulantes.`);
    }
}

buscarPersonagemENave(1);
