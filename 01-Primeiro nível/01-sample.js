function numeroPar(numeros) {
    const numerosPares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            numerosPares.push(numeros[i]);
        }
    }
    return numerosPares;
}

const conjuntoNumeros = [1, 2, 3, 4, 5, 6];
const conjuntoNumerosPares= numeroPar(conjuntoNumeros);
console.log(conjuntoNumerosPares);
