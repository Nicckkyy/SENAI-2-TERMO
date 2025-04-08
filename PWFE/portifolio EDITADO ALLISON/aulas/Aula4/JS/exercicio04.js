let numeros3 = []

for (let i = 0; i < 10; i++) {
    numeros3.push(parseInt(window.prompt(`Digite o ${i + 1}º número:`)))
}
const pares = numeros3.filter(num => num % 2 === 0)
if (pares.length > 0) {
    document.querySelector('.main_container').innerHTML = `<h1>Números pares: ${pares}</h1>`
} else {
    document.querySelector('.main_container').innerHTML = `<h1>Todos os números são ímpares.</h1>`
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