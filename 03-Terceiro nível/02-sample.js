async function buscarEFiltrarPessoas() {
    try {
        const resposta = await fetch('https://swapi.dev/api/people/');
        const dados = await resposta.json();

        const { results: dadosResults } = dados;

        const letraInicial = 'L';

        const pessoasFiltradas = dados.results.filter(pessoa => pessoa.name.startsWith(letraInicial));

        console.log(`Pessoas cujo nome começa com ${letraInicial}:`);
        pessoasFiltradas.forEach(pessoa => {
            console.log(pessoa.name);
        });

        const totalPessoas = dadosResults.length;

        console.log(`Total de pessoas encontradas: ${totalPessoas}`);

    } catch (erro) {
        console.error('Erro ao buscar pessoas:', erro);
    }
}

buscarEFiltrarPessoas();
