const listaSelecaoDigidevs = document.querySelectorAll(".digidev");

listaSelecaoDigidevs.forEach(digidev => {
    digidev.addEventListener("click", () => {
        esconderCartaoDigidev();

        const idDigidevSelecionado = mostrarCartaoDigidevSelecionado(digidev);

        desativarDigidevNaListagem();
        ativarDigidevNaListagem(idDigidevSelecionado);

})
})


function ativarDigidevNaListagem(idDigidevSelecionado) {
    const digideSelecionadoNaListagem = document.getElementById(idDigidevSelecionado);
    digideSelecionadoNaListagem.classList.add("ativo");
}

function desativarDigidevNaListagem() {
    const digidevAtivoNaListagem = document.querySelector(".ativo");
    digidevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoDigidevSelecionado(digidev) {
    const idDigidevSelecionado = digidev.attributes.id.value;
    const idDoCartaoDigidevParaAbrir = "cartao-" + idDigidevSelecionado;
    const cartaoDigidevParaAbrir = document.getElementById(idDoCartaoDigidevParaAbrir);
    cartaoDigidevParaAbrir.classList.add("aberto");
    return idDigidevSelecionado;
}

function esconderCartaoDigidev() {
    const cartaoDigidevAberto = document.querySelector(".aberto");
    cartaoDigidevAberto.classList.remove("aberto");
}
