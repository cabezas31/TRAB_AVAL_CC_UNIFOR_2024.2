function h(a) {
    let b = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            b.push(a[i]);
        }
    }
    return b;
}

let x = [1, 2, 3, 4, 5, 6];
let y = h(x);
console.log(y);

teste
