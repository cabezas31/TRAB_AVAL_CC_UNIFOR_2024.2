let nomeUsario = "Pedro";
let idadeUsuario = 25;
let atividadeUsuario = true;

function verificarAtividade(nomeUsario, idadeUsuario, atividadeUsuario) {
    if (atividadeUsuario) {
        console.log(nomeUsario + " tem " + idadeUsuario + " anos e está ativo.");
    } else {
        console.log(nomeUsario + " está inativo.");
    }
}

atividadeUsuario(nomeUsario, idadeUsuario, atividadeUsuario);
