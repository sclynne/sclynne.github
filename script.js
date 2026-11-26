let botao = document.getElementById("botaoTema");
let icone = document.getElementById("iconeTema");
let textoBotao = document.getElementById("textoBotao");
botao.addEventListener("click", function() {
    document.body.classList.toggle("escuro");
    if (document.body.classList.contains("escuro")) {
        document.documentElement.setAttribute("data-bs-theme", "dark");
        icone.className = "bi bi-sun";
        textoBotao.textContent = "Modo claro";
    } else {
        document.documentElement.setAttribute("data-bs-theme", "light");
        icone.className = "bi bi-moon-stars";
        textoBotao.textContent = "Modo escuro";
    }
});
let cursor = document.getElementById("cursor");
let ultimoRastro = 0;
document.addEventListener("mousemove", function(evento) {
    cursor.style.left = evento.clientX + "px";
    cursor.style.top = evento.clientY + "px";
    if (Date.now() - ultimoRastro < 40) {
        return;
    }
    ultimoRastro = Date.now();
    let estrela = document.createElement("span");
    estrela.className = "rastro-estrela";
    estrela.textContent = "✦";
    estrela.style.left = evento.clientX + "px";
    estrela.style.top = evento.clientY + "px";
    document.body.appendChild(estrela);
    setTimeout(function() {
        estrela.remove();
    }, 800);
});
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("solid", window.scrollY > 80);
});
function mostrarHobby(id) {
    let selecionado = document.getElementById(id);
    if (!selecionado) {
        return;
    }
    let estavaAberto = selecionado.classList.contains("ativo");
    let descricoes = document.querySelectorAll(".descricao-hobby");
    descricoes.forEach(function(descricao) {
        descricao.classList.remove("ativo");
    });
    if (!estavaAberto) {
        selecionado.classList.add("ativo");
    }
}
let formulario = document.getElementById("formContato");
if (formulario) {
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();
        let nome = document.getElementById("nomeContato").value;
        let email = document.getElementById("emailContato").value;
        let mensagem = document.getElementById("mensagemContato").value;
        let destinatario = "sclyqueiroz@gmail.com";
        let assunto = "Contato pelo portfólio";
        let corpo = "Nome: " + nome +
                    "\nE-mail: " + email +
                    "\nMensagem: " + mensagem;
        window.location.href = "mailto:" + destinatario +
            "?subject=" + encodeURIComponent(assunto) +
            "&body=" + encodeURIComponent(corpo);
    });
}