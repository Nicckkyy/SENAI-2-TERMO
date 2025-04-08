const calculadora = () => {

    let a = parseFloat(window.prompt('Digite o primeiro número:'))
    let b = parseFloat(window.prompt('Digite o segundo número:'))

    let operacao = window.prompt('Digite a operação (+, -, *, /):')
    let resultado
    
    if (operacao === '+') {
        resultado = a + b
    } else if (operacao === '-') {
        resultado = a - b
    } else if (operacao === '*') {
        resultado = a * b
    } else if (operacao === '/') {
        if (b !== 0) {
            resultado = a / b
        } else {
            resultado = 'Erro: divisão por zero'
        }
    } else {
        resultado = 'Operação inválida'
    }
    
    document.querySelector('.main_container').innerHTML = `<h1>Resultado: ${resultado}</h1>`
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

calculadora()

