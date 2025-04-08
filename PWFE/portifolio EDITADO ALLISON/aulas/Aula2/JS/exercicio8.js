let ano

ano = Number(prompt("Digite um ano para verificar se ele é bissexto:"))

if(ano % 4 == 0 &&  ano % 100 != 0 || ano % 400 == 0 ){
    document.querySelector('.main_container').innerHTML = `<h1>O ano ${ano} é bissexto</h1>`
} else {
    document.querySelector('.main_container').innerHTML = `<h1>O ano ${ano} não é bissexto</h1>`
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