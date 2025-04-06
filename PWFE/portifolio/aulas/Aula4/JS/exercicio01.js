const numeros1 = [];
for (let i = 0; i < 5; i++) {
    numeros1.push(parseInt(window.prompt(`Digite o ${i + 1}º número:`)))
}
document.querySelector('.main_container').innerHTML = `<h1>Dobro dos valores: ${numeros1.map(num => num * 2)}</h1>`;

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