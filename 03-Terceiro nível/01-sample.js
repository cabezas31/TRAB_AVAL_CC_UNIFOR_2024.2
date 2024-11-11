async function buscarEDetalharNave() {
    try {
        const resposta = await fetch('https://swapi.dev/api/starships/9/');
        const nave = await resposta.json();

        const detalhesNave = `
        Nome: ${nave.name}
        Modelo: ${nave.model}
        Fabricante: ${nave.manufacturer}
        `;

        console.log("Detalhes da Nave:");
        console.log(detalhesNave);

        const tamanhoTripulacao = parseInt(nave.crew);

        const numeroGrande = 100;

        if (tamanhoTripulacao > numeroGrande) {
            console.log('Esta é uma nave grande.');
        } else {
            console.log('Esta é uma nave pequena.');
        }

    } catch (erro) {
        console.error('Erro ao buscar detalhes da nave:', erro);
    }
}

buscarEDetalharNave();
