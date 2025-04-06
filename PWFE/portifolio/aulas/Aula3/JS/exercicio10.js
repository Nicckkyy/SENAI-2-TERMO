const calcularImpostoDeRenda = () => {

    let salario = parseFloat(window.prompt('Digite seu salário:'))
    let imposto

    if (salario <= 1903.98) {
        imposto = 0
    } else if (salario <= 2826.65) {
        imposto = salario * 0.075
    } else if (salario <= 3751.05) {
        imposto = salario * 0.15
    } else if (salario <= 4664.68) {
        imposto = salario * 0.225
    } else {
        imposto = salario * 0.275
    }
    
    document.querySelector('.main_container').innerHTML = `<h1>Imposto de renda devido: R$ ${imposto.toFixed(2)}</h1>`
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

calcularImpostoDeRenda()