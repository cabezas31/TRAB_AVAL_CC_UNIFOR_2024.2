async function buscarPersonagem(id) {
    try {
        const url = `https://swapi.dev/api/people/${id}/`;
        
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Personagem com ID ${id} não encontrado.`);
        }

        const personagem = await resposta.json();
        
        const { name: namePersonagem } = personagem;
        if (!namePersonagem) {
            throw new Error('Nome do personagem não encontrado.');
        }

        console.log(namePersonagem);
    } catch (erro) {
        console.error('Erro ao buscar o personagem:', erro.message);
    }
}

const lukeId = 1;
buscarPersonagem(lukeId);