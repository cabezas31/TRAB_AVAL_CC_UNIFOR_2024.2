class Usuario {
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

    verificarAtividade() {
        if (this.f) {
            console.log("Ativo");
        } else {
            console.log("Inativo");
        }
    }

    verificarAdmnistrador() {
        if (this.c === "admin") {
            console.log("Admin pode acessar todas as áreas.");
        } else {
            console.log("Convidado tem acesso limitado.");
        }
    }
}

// Deixe a função clara para que seja possível de compreender que ela verifica o número de usuários com a role de admin
function contadorDeAdmnistradores(usuarios) {
    let contador = 0;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].contador === "admin") {
            contador++;
        }
    }
    return contador;
}

// Deixe a função clara para que seja possível de compreender que ela verifica se o número de tentativas de login é excessivo
function login(tentativas, limiteTentativas) {
    if (tentativas.h > limiteTentativas) {
        console.log("Tentativas de login excessivas.");
    } else {
        console.log("Tentativas de login sob controle.");
    }
}

// Deixe a função clara para que seja possível de compreender que ela verifica qual usuário logou mais recentemente
function ordemUsuarios(usuario1, usuario2) {
    if (usuario1.e > usuario2.e) {
        return `${usuario1.a  } logou mais recentemente.`;
    } else {
        return `${usuario2.a  } logou mais recentemente.`;
    }
}

// Deixe a função clara para que seja possível de compreender que ela verifica se o usuário foi criado recentemente
function usuarioRecente(usuario) {
    const dataAtual = new Date();
    if (dataAtual - usuario.d < 31536000000) {
        console.log("Usuário criado recentemente.");
    } else {
        console.log("Usuário antigo.");
    }
}

const usuarios = [
    new Usuario("Carlos", 25, "admin", new Date(2023, 1, 15), new Date(2024, 8, 1), true, 100, 2),
    new Usuario("Ana", 30, "guest", new Date(2020, 4, 22), new Date(2024, 7, 31), true, 50, 3),
    new Usuario("José", 29, "admin", new Date(2022, 10, 5), new Date(2024, 6, 10), false, 200, 5),
    new Usuario("Maria", 35, "guest", new Date(2021, 2, 10), new Date(2023, 12, 25), false, 80, 7)
];

console.log(`Usuários admin: ${  contadorDeAdmnistradores(usuarios)}`);

usuarios[0].verificarAtividade();
usuarios[1].verificarAdmnistrador();

login(usuarios[2], 4);

console.log(ordemUsuarios(usuarios[0], usuarios[3]));

usuarioRecente(usuarios[3]);
