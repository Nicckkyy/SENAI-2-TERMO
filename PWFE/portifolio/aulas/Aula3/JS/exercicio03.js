const imprimirLetras = () => {
    
    let nome = window.prompt('Digite um nome:')
    let resultado = ''

    for (let letra of nome) {
        resultado += letra + '\n'
    }

    document.querySelector('.main_container').innerHTML = `<h1>${resultado}</h1>`
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

imprimirLetras()