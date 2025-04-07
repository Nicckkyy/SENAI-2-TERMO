const ordenarNumeros = () => {
    
    let a = parseFloat(window.prompt('Digite o primeiro número:'))
    let b = parseFloat(window.prompt('Digite o segundo número:'))
    let c = parseFloat(window.prompt('Digite o terceiro número:'))

    document.querySelector('.main_container').innerHTML = `<h1>Ordenação: ${[a, b, c].sort((x, y) => x - y)}</h1>`
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

ordenarNumeros()