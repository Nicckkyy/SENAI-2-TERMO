let base, altura, area

base = Number(prompt("Digite o valor da base"))
altura = Number(prompt("Digite o valor da altura"))

area = base * altura

document.querySelector('.main_container').innerHTML = `<h1>O valor da área é ${area}</h1>`

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