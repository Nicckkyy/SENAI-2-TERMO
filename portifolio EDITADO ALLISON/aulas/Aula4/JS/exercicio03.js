const idades = [];
for (let i = 0; i < 20; i++) {
    idades.push(parseInt(window.prompt(`Digite a idade da ${i + 1}ª pessoa:`)))
}
const mediaIdades = idades.reduce((acc, idade) => acc + idade, 0) / idades.length
const acimaDaMedia = idades.filter(idade => idade > mediaIdades)
document.querySelector('.main_container').innerHTML = `<h1>Idades acima da média: ${acimaDaMedia}</h1>`

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