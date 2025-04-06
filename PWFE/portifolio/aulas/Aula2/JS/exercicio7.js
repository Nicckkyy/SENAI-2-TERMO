let peso, altura, imc

peso = Number(prompt("Digite seu peso"))
altura = Number(prompt("Digite sua altura"))

imc = peso / (altura * altura)

if(imc >= 40){
    document.querySelector('.main_container').innerHTML = `<h1>IMC: ${imc} \nClassificação: Obessidade Grave</h1>`
} else if(imc >= 30){
    document.querySelector('.main_container').innerHTML = `<h1>IMC: ${imc} \nClassificação: Obesidade</h1>`
} else if(imc >= 25){
    document.querySelector('.main_container').innerHTML = `<h1>IMC: ${imc} \nClassificação: Sobrepeso</h1>`
} else if(imc >= 18.5){
    document.querySelector('.main_container').innerHTML = `<h1>IMC: ${imc} \nClassificação: Normal</h1>`
} else {
    document.querySelector('.main_container').innerHTML = `<h1>IMC: ${imc} \nClassificação: Magreza</h1>`
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