let taxa, moeda 

taxa = Number(prompt("Digite a taxa de cambio"))
moeda = Number(prompt("Digite a quantidade de moedas desejada"))

moeda = moeda * taxa

document.querySelector('.main_container').innerHTML = `<h1>O valora convertido é ${moeda}</h1>`

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".lessons_container");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            const aula = this.getAttribute("data-aula");
            window.location.href = `../${aula}/index.html`;
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const iconHome = document.querySelector(".icon_home");

    iconHome.addEventListener("click", function () {
        window.location.href = "../index.html";
    });
});