function calcularFrete(distancia) {
    let valorKM = 10;
    return distancia * valorKM;
}

const frete = calcularFrete(50);
console.log(`O valor do frete é: ${frete}`);
