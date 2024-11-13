function h(a) {
    const b = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            b.push(a[i]);
        }
    }
    return b;
}

const x = [1, 2, 3, 4, 5, 6];
const y = h(x);
console.log(y);

teste;
