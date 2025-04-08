const nomes = [];
for (let i = 0; i < 10; i++) {
    nomes.push(window.prompt(`Digite o ${i + 1}º nome:`))
}
const nomeProcurado = window.prompt("Digite um nome para buscar:")
const indice = nomes.indexOf(nomeProcurado)
if (indice !== -1) {
    document.querySelector('.main_container').innerHTML = `<h1>O nome ${nomeProcurado} está na posição ${indice}.</h1>`
} else {
    document.querySelector('.main_container').innerHTML = `<h1>Nome não encontrado!</h1>`
}

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".lessons_container")

    cards.forEach(card => {
        card.addEventListener("click", function () {
            const aula = this.getAttribute("data-aula")
            window.location.href = `../${aula}/index.html`
        })
    })
})

document.addEventListener("DOMContentLoaded", function () {
    const iconHome = document.querySelector(".icon_home")

    iconHome.addEventListener("click", function () {
        window.location.href = "../index.html"
    })
})