function numeroPar(numeros) {
    let numerosPares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            numerosPares.push(numeros[i]);
        }
    }
    return numerosPares;
}

let conjuntoNumeros = [1, 2, 3, 4, 5, 6];
let conjuntoNumerosPares= numeroPar(conjuntoNumeros);
console.log(conjuntoNumerosPares);
