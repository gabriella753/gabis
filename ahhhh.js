let alterado = false;

const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");


botao.addEventListener("click", () => {
    if (alterado == false) {
        titulo.textContent = "Texto alterado!";
        alterado = true;
    } else {
        titulo.textContent = "Texto inicial";
        alterado = false;
    }
});