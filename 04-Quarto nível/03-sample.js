async function buscarDados() {
    try {
        const dados = '{ "name": "Luke", "idade": 23 }';
        const personagem = JSON.parse(dados); 
        
        if (!personagem.name) {
            throw new Error('Nome do personagem não encontrado!');
        }

        const { name: namePersonagem } = personagem; 
        console.log(namePersonagem); 
        
    } catch (erro) {
        console.error('Erro ao buscar dados:', erro.message);
    }
}

buscarDados();