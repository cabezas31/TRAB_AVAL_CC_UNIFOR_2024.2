let usuario = {
    nome: "João",
    idade: 25
};

function identificarUsuario(persona) {
    console.log(persona.nome + " tem " + persona.idade + " anos.");
}

exUsr(identificarUsuario(usuario));
