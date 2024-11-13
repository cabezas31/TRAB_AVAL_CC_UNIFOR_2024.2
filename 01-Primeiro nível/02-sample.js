const a = true;

function verAc(u) {
    if (a && u.isAdmin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

const u = { nome: "João", admin: true };
verAc(u);
