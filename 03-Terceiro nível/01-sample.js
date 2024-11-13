async function buscarEDetalharNave() {
    try {
        const resposta = await fetch('https://swapi.dev/api/starships/9/');
        const nave = await resposta.json();

        const { 
            name, 
            model, 
            manufacturer, 
            crew 
        } = nave;

        const detalhesNave = `
            Nome: ${name},
            Modelo: ${model},
            Fabricante: ${manufacturer},
        `;

        console.log(`Detalhes da Nave:\n${detalhesNave}`);

        const tripulacaoMedia = 100;

        const tamanhoTripulacao = parseInt(crew);

        if (tamanhoTripulacao > tripulacaoMedia) {
            console.log('Esta é uma nave grande.');
        } else {
            console.log('Esta é uma nave pequena.');
        }

    } catch (erro) {
        console.error('Erro ao buscar detalhes da nave:', erro);
    }
}

buscarEDetalharNave();
