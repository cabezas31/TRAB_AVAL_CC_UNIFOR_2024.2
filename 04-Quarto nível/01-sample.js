// async function buscarPlaneta() {
//     const resposta = await fetch("https://swapi.dev/api/planets/1/");
//     const planeta = await resposta.json();

//     const { name: planetaName } = planeta;

//     exibirNomePlaneta(planetaName);
// }

// buscarPlaneta();




async function buscarPlaneta() {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = "";

    const id = document.getElementById("planetaId").value;

    if (!id || id <= 0) {
        mostrarErro("ID inválido. Insira um número positivo.", "danger");
        return;
    }

    try {
        const resposta = await fetch(`https://swapi.dev/api/planets/${id}/`);

        if (!resposta.ok) {
            throw new Error("Planeta não encontrado. Verifique o ID e tente novamente.");
        }

        const planeta = await resposta.json();
        
        exibirNomePlaneta(planeta);

    } catch (erro) {
        mostrarErro(erro.message, "danger");
    }
}

function mostrarErro(mensagem, tipo) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensagem}</div>`;
}

function exibirNomePlaneta(planeta) {
    const { name: planetaName } = planeta;
    const mensagemDiv = document.getElementById("mensagem");
    
    mensagemDiv.innerHTML = `
      <div class="alert alert-success" role="alert">
        <strong>Nome do Planeta:</strong> ${planetaName}<br>
      </div>`;
}