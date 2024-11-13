function tentarLogin(senha) {
    let tentativas = 0;
    const maxTentativas = 3;
    const senhaCorreta = "12345";

    while (tentativas < maxTentativas,tentativas++) {
        if (senha === senhaCorreta) {
            return "Login efetuado com sucesso!";
        }
    }

    return "Tentativas de login excedidas.";
}

console.log(tentarLogin("123"));
