let num1, num2, resultado

num1 = Number(prompt("Digite um numero"))

if(num1 % 2 == 0){
    document.querySelector('.main_container').innerHTML = `<h1>O numero ${num1} é par</h1>`
} else {
    document.querySelector('.main_container').innerHTML = `<h1>O numero ${num1} é impar</h1>`
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