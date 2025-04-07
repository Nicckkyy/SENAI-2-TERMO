const calcularRaizQuadrada = () => {
    let raiz
    let numero = parseFloat(window.prompt("Digite o numero a ser calculado!"))
    raiz = Math.sqrt(numero)

    document.querySelector('.main_container').innerHTML = `<h1>A Raiz do numero é: ${raiz}</h1>`
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

calcularRaizQuadrada()