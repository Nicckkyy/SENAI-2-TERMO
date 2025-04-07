const calcularINSS = () => {

    let salario = parseFloat(window.prompt('Digite seu salário:'))
    let inss

    if (salario <= 1320) {
        inss = salario * 0.075
    } else {
        inss = salario * 0.14
    }
    
    document.querySelector('.main_container').innerHTML = `<h1>Valor do INSS: R$ ${inss.toFixed(2)}</h1>`
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

calcularINSS()