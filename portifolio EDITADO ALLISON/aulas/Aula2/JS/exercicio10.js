let numero

numero = Number(prompt("Digite um numero (1~9)"))

for(let i = 1; i < 11; i++){
    document.querySelector('.main_container').innerHTML = `<h1>${numero} X ${i} = ${numero*i}</h1>`
}

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