let num1, num2, resultado

num1 = Number(prompt("Digite um numero: "))
num2 = Number(prompt("Digite outro numero: "))

resultado = num1 - num2

if(resultado < 0){
    resultado = resultado * (-1)
    console.log(resultado)
    document.querySelector('.main_container').innerHTML = `<h1>A diferença entre os numeros é: ${resultado}</h1>`
} else {
    document.querySelector('.main_container').innerHTML = `<h1>A diferença entre os numeros é: ${resultado}</h1>`
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