let celcius, fahrenheit

celcius = Number(prompt("Digite a temperatura em celcius."))

fahrenheit = (celcius * (9/5))+32

document.querySelector('.main_container').innerHTML = `<h1>O resultado da conversão é ${fahrenheit}</h1>`

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