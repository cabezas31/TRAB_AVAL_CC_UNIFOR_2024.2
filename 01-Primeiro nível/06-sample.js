const nomeUsario = "Pedro";
const idadeUsuario = 25;
const atividadeUsuario = true;

function verificarAtividade(nomeUsario, idadeUsuario, atividadeUsuario) {
    if (atividadeUsuario) {
        console.log(`${nomeUsario  } tem ${  idadeUsuario  } anos e está ativo.`);
    } else {
        console.log(`${nomeUsario  } está inativo.`);
    }
}

verificarAtividade(nomeUsario, idadeUsuario, atividadeUsuario);
