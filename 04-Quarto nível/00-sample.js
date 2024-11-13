async function buscarPersonagem() {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = "";

    const id = document.getElementById("personagemId").value;

    if (!id || id <= 0) {
        mostrarErro("ID inválido. Insira um número positivo.", "danger");
        return;
    }

    try {
        const resposta = await fetch(`https://swapi.dev/api/people/${id}/`);

        if (!resposta.ok) {
            throw new Error("Personagem não encontrado. Verifique o ID e tente novamente.");
        }

        const personagem = await resposta.json();
        mostrarResultado(personagem);

    } catch (erro) {
        mostrarErro(erro.message, "danger");
    }
}

function mostrarErro(mensagem, tipo) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensagem}</div>`;
}

function mostrarResultado(personagem) {
    const { 
        name: namePersonagem, 
        height: heightPersonagem, 
        mass: massPersonagem 
    } = personagem;

    const mensagemDiv = document.getElementById("mensagem");
    
    mensagemDiv.innerHTML = `
      <div class="alert alert-success" role="alert">
        <strong>Nome:</strong> ${namePersonagem}<br>
        <strong>Altura:</strong> ${heightPersonagem} cm<br>
        <strong>Peso:</strong> ${massPersonagem} kg
      </div>`;
}

buscarPersonagem();
