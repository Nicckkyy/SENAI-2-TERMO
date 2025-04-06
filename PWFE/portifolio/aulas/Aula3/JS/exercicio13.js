const calcularFinanciamento = () => {
    
    let valor = parseFloat(window.prompt('Digite o valor do financiamento:'))
    let taxa = parseFloat(window.prompt('Digite a taxa de juros (%):'))
    let meses = parseInt(window.prompt('Digite o número de meses:'))

    let parcela = (valor * (taxa / 100)) / (1 - Math.pow(1 + taxa / 100, -meses))

    document.querySelector('.main_container').innerHTML = `<h1>Valor da parcela: R$ ${parcela.toFixed(2)}</h1>`
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

calcularFinanciamento()