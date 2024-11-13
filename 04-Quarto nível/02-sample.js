// async function buscarFilme() {
//     const resposta = await fetch("https://swapi.dev/api/films/1/");
//     const filme = await resposta.json();

//     const { titulo: filmeTitulo } = filme;

//     const tituloFilmeFormat = filmeTitulo.toUpperCase();

//     console.log(tituloFilmeFormat);
// }

// buscarFilme();

async function buscarFilme() {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = "";

    const id = document.getElementById("filmeId").value;

    if (!id || id <= 0) {
        mostrarErro("ID inválido. Insira um número positivo.", "danger");
        return;
    }

    try {
        const resposta = await fetch(`https://swapi.dev/api/films/${id}/`);

        if (!resposta.ok) {
            throw new Error("Filme não encontrado. Verifique o ID e tente novamente.");
        }

        const filme = await resposta.json();
        
        exibirTituloDoFilme(filme);
        

    } catch (erro) {
        mostrarErro(erro.message, "danger");
    }
}

function mostrarErro(mensagem, tipo) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensagem}</div>`;
}

function exibirTituloDoFilme(filme) {
    const mensagemDiv = document.getElementById("mensagem");
    
    const { title: filmeTitulo } = filme;

    const tituloFilmeFormat = filmeTitulo.toUpperCase();

    mensagemDiv.innerHTML = `
      <div class="alert alert-success" role="alert">
        <strong>Título do Filme:</strong> ${tituloFilmeFormat}<br>
      </div>`;
};

buscarFilme();
