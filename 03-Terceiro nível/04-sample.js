async function buscarPersonagemENave(idPersonagem) {
    try {
        const respostaPersonagem = await fetch(`https://swapi.dev/api/people/${idPersonagem}/`);
        const personagem = await respostaPersonagem.json();

        const { 
            name: namePersonagem, 
            starships: starshipsPersonagem 
        } = personagem;

        const qtdDeNaves = starshipsPersonagem.length;

        if (qtdDeNaves > 0) {
            const respostaNave = await fetch(starshipsPersonagem[0]);
            const nave = await respostaNave.json();

            const { 
                name: nameNave, 
                crew: crewNave 
            } = nave;

            const tripulacao = parseInt(crewNave);

            const tripulacaoMedia = 100;

            if (tripulacao > tripulacaoMedia) {
                console.log(`A nave ${nameNave} é considerada grande com ${tripulacao} tripulantes.`);
            } else {
                console.log(`A nave ${nameNave} é pequena com ${tripulacao} tripulantes.`);
            }
        } else {
            console.log(`${namePersonagem} não possui naves registradas.`);
        }

    } catch (erro) {
        console.error('Erro ao buscar o personagem ou sua nave:', erro);
    }
}

buscarPersonagemENave(1);
