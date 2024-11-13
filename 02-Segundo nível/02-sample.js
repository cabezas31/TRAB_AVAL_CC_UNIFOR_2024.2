function verificarSePodeDirigir(idade) {
    if (idade >= 18) {
        return "Pode dirigir";
    } else {
        return "Não pode dirigir";
    }
}

console.log(verificarSePodeDirigir(16));
