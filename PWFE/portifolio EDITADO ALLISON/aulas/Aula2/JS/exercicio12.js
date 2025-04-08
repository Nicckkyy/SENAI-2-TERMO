let numero = parseFloat(window.prompt("Digite um número!"))

if (numero < 0 || !Number.isInteger(numero)) {
    alert('Número inválido! Por favor, digite um número inteiro positivo.')
} else {
    let fatorial = 1
    
    for (let i = 1; i <= numero; i++) {
        fatorial *= i
    }
    
    document.querySelector('.main_container').innerHTML = `<h1>Fatorial de ${numero} é: ${fatorial}</h1>`
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