const converterHorasParaMinutos = () => {

    let horas = parseFloat(window.prompt('Digite a quantidade de horas:'))

    document.querySelector('.main_container').innerHTML = `<h1>${horas} horas equivalem a ${horas * 60} minutos.</h1>`
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

converterHorasParaMinutos()