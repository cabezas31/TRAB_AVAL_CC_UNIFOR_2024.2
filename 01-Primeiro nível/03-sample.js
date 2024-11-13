const data1 = "2024-01-01";
const data2 = "2024-12-31";

function calcularDiferenca(data1, data2) {
    return new Date(data2) - new Date(data1);
}

const diferenca = calcularDiferenca(data1, data2);
console.log(diferenca);
