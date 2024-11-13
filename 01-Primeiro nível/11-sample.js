class z {
    constructor(a, b, c, d, e, f, g, h) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.f = f;
        this.g = g;
        this.h = h;
    }

    x() {
        if (this.f) {
            console.log("Ativo");
        } else {
            console.log("Inativo");
        }
    }

    y() {
        if (this.c === "admin") {
            console.log("Admin pode acessar todas as áreas.");
        } else {
            console.log("Convidado tem acesso limitado.");
        }
    }
}

// Deixe a função clara para que seja possível de compreender que ela verifica o número de usuários com a role de admin
function t(users) {
    let c = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].c === "admin") {
            c++;
        }
    }
    return c;
}

// Deixe a função clara para que seja possível de compreender que ela verifica se o número de tentativas de login é excessivo
function l(a, b) {
    if (a.h > b) {
        console.log("Tentativas de login excessivas.");
    } else {
        console.log("Tentativas de login sob controle.");
    }
}

// Deixe a função clara para que seja possível de compreender que ela verifica qual usuário logou mais recentemente
function c(u1, u2) {
    if (u1.e > u2.e) {
        return `${u1.a  } logou mais recentemente.`;
    } else {
        return `${u2.a  } logou mais recentemente.`;
    }
}

// Deixe a função clara para que seja possível de compreender que ela verifica se o usuário foi criado recentemente
function r(user) {
    const now = new Date();
    if (now - user.d < 31536000000) {
        console.log("Usuário criado recentemente.");
    } else {
        console.log("Usuário antigo.");
    }
}

const usrs = [
    new z("Carlos", 25, "admin", new Date(2023, 1, 15), new Date(2024, 8, 1), true, 100, 2),
    new z("Ana", 30, "guest", new Date(2020, 4, 22), new Date(2024, 7, 31), true, 50, 3),
    new z("José", 29, "admin", new Date(2022, 10, 5), new Date(2024, 6, 10), false, 200, 5),
    new z("Maria", 35, "guest", new Date(2021, 2, 10), new Date(2023, 12, 25), false, 80, 7)
];

console.log(`Usuários admin: ${  t(usrs)}`);

usrs[0].x();
usrs[1].y();

l(usrs[2], 4);

console.log(c(usrs[0], usrs[3]));

r(usrs[3]);
