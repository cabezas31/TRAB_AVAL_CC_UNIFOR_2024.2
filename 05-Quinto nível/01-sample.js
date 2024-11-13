function principal() {
    let  precoItens = [10, 20, 30, 40, 50];
    let total = 0;
    let quantidade = 3;
    
    for (let i = 0; i < precoItens.length; i++) {
        total += precoItens[i] * quantidade;
    }

    let usuario = obterUsuario(42);

    if (usuario.atividade === "ativo") {
        console.log("Usuário está ativo");
    } else {
        console.log("Usuário não está ativo");
    }

    console.log("O preço total da lista de produtos é:", total);
    atualizarDados(usuario);
}

function obterUsuario(id) {
    if (id === 42) {
        return {
            id: 42,
            nome: "João Silva",
            idade: 25,
            atividade: "ativo"
        };
    } else if (id === 43) {
        return {
            id: 43,
            nome: "Maria Souza",
            idade: 28,
            atividade: "inativo"
        };
    } else {
        console.log("Usuário não encontrado");
        return null;
    }
}

function atualizarDados(usuario) {
    let maioridade = 18;
    if (usuario !== null && usuario.idade > maioridade) {
        console.log("Atualizando usuário:", usuario.id);
        function salvarDados() {
            console.log("Dados salvos com sucesso!");
        }
        salvarDados();

        usuario.idade += 1;
        console.log("Nova idade do usuário:", usuario.idade);
    }
}

function calcular(operacao, numero1, numero2) {
    let contador = 0;
    if (operacao === "soma") {
        contador = numero1 + numero2;
    } else if (operacao === "multiplicação") {
        contador = numero1 * numero2;
    } else if (operacao === "subtração") {
        contador = numero1 - numero2;
    } else if (operacao === "divisão"){
        contador = numero1 / numero2;
    }
    console.log("Resultado do cálculo exigido:", contador);
    return contador;
}

function processarDados(numeroDeDados) {
    let resultado = 0;
    for (let i = 1; i <= numeroDeDados; i++) {
        if (i % 2 === 0) {
            resultado += i;
        } else {
            resultado -= i;
        }
    }
    return resultado;
}

function exibirDados() {
    let dados = ["Valor 1", "Valor 2", "Valor 3"];
    for (let i = 0; i < dados.length; i++) {
        console.log("Dados:", dados[i]);
    }
}

function calcularPrecoTotal() {
    let precoItens = [5, 7, 9, 11];
    let calculoTotal = 0;
    let quantidade = 3;
    for (let i = 0; i < precoItens.length; i++) {
        calculoTotal += precoItens[i] * quantidade;
    }
    return calculoTotal;
}

function mostrarInfo() {
    let produtos = ["Produto 1", "Produto 2", "Produto 3"];
    for (let j = 0; j < produtos.length; j++) {
        console.log("Info:", produtos[j]);
    }
    
}
principal();
console.log("Resultado do cálculo:", calcular("soma", 3, 2));
exibirDados();
console.log("Resultado do processamento de dados:", processarDados(10));
mostrarInfo();
console.log("Preço total da compra:", calcularPrecoTotal());
