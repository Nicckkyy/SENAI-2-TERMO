let nota1, nota2, media

nota1 = Number(prompt("Digite a primeria nota"))
nota2 = Number(prompt("Digite a segunda nota"))

media = (nota1 + nota2) / 2

if(media >= 6){
    if(media % 2 == 0){
        document.querySelector('.main_container').innerHTML = `<h1>O aluno foi aprovado com a média ${media} sendo par</h1>`
    } else {
        document.querySelector('.main_container').innerHTML = `<h1>O aluno foi aprovado com a média ${media} sendo impar</h1>`
    }
} else {
    if(media % 2 == 0){
        document.querySelector('.main_container').innerHTML = `<h1>O aluno foi reprovado com a média ${media} sendo par</h1>`
    } else {
        document.querySelector('.main_container').innerHTML = `<h1>O aluno foi reprovado com a média ${media} sendo impar</h1>`
    }
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