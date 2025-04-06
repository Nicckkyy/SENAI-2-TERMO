const numeros2 = [];
for (let i = 0; i < 8; i++) {
    numeros2.push(parseInt(window.prompt(`Digite o ${i + 1}º número:`)))
}
const media = numeros2.reduce((acc, num) => acc + num, 0) / numeros2.length
document.querySelector('.main_container').innerHTML = `<h1>Média aritmética: ${media}</h1>`

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