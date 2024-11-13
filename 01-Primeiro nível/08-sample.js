const pessoa = { nome: "Maria", idade: 28 };

function verificarMaioridadeDeIdade(persona) {
    const maiorIdade = 18;
    return persona.idade >= maiorIdade;
}

console.log(verificarMaioridadeDeIdade(pessoa));
