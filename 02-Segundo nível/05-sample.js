function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    const salarioBase = horasTrabalhadas * valorHora;

    let salarioComBonus;
    const bonus = {
        gerente: 1000,
        supervisor: 500,
        funcionario: 200,
    };

    if (cargo === "gerente") {
        salarioComBonus = salarioBase + bonus[gerente];
    } else if (cargo === "supervisor") {
        salarioComBonus = salarioBase + bonus[supervisor];
    } else {
        salarioComBonus = salarioBase + bonus[funcionario];
    }

    const salarioComDesconto = salarioComBonus - 300;

    let salarioFinal;
    const desconto ={
        alto: 0.27,
        medio: 0.18,
        baixo: 0.11,
    };

    if (salarioComDesconto > 5000) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * desconto[alto]);
    } else if (salarioComDesconto > 3000) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * desconto[medio]);
    } else {
        salarioFinal = salarioComDesconto - (salarioComDesconto * desconto[baixo]);
    }

    return salarioFinal;
}

const salario = calcularSalarioFuncionario(160, 25, "gerente");
console.log(`O salário final é: ${salario}`);
