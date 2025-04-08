const podeTirarCNH = () => {

    let idade = parseInt(window.prompt('Digite sua idade:'))

    if (idade >= 18) {
        document.querySelector('.main_container').innerHTML = '<h1>Pode tirar carteira de motorista</h1>'
    } else {
        document.querySelector('.main_container').innerHTML = '<h1>Não pode tirar carteira de motorista</h1>'
    }
    
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

podeTirarCNH()