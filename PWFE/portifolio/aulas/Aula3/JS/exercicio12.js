const calcularJurosCompostos = () => {

    let capital = parseFloat(window.prompt('Digite o capital inicial:'))
    let taxa = parseFloat(window.prompt('Digite a taxa de juros (%):'))
    let tempo = parseInt(window.prompt('Digite o tempo (meses):'))

    let montante = capital * Math.pow((1 + taxa / 100), tempo)
    
    document.querySelector('.main_container').innerHTML = `<h1>Montante final: R$ ${montante.toFixed(2)}</h1>`
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

calcularJurosCompostos()