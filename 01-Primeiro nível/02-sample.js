let admin = true;

function verificarAdmin(usuario) {
    if (admin && usuario.isAdmin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

let usuario = { nome: "João", admin: true };
verificarAdmin(usuario);
