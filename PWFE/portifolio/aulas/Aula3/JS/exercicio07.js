const calcularCedulas = () => {
    let valor = window.prompt("Insira o valor que deseja calcular")
    let cedulas = [200, 100, 50, 20, 10, 5, 1]
    let resultado = {}
    
    for (let cedula of cedulas) {
        resultado[cedula] = Math.floor(valor / cedula)
        valor %= cedula
    }

    let resultadoFormatado = Object.entries(resultado)
    .map(([cedula, quantidade]) => `${quantidade} nota(s) de R$${cedula}`)
    .join('<br>');

    document.querySelector('.main_container').innerHTML = `<h1>A Quantidade de cedulas é: <br>${resultadoFormatado}</h1>`
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

calcularCedulas()