let escolhaUsuario

escolhaUsuario = window.prompt("Pedra Papel ou Tesoura?").toLowerCase()

let opcoes = ['pedra', 'papel', 'tesoura']
let escolhaComputador = opcoes[Math.floor(Math.random() * 3)]

document.querySelector('.main_container').innerHTML = `<h1>Você escolheu: ${escolhaUsuario}</h1>`
document.querySelector('.main_container').innerHTML = `<h1>Computador escolheu: ${escolhaComputador}</h1>`

if (escolhaUsuario === escolhaComputador) {
    document.querySelector('.main_container').innerHTML = '<h1>Empate!<h1>'
} else if (
    (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
    (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
    (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
) {
    document.querySelector('.main_container').innerHTML = '<h1>Você ganhou!<h1>'
} else {
    document.querySelector('.main_container').innerHTML = '<h1>Você perdeu!<h1>'
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