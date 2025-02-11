let peso, altura, calculo

peso = Number(prompt("Digite o seu peso"))
altura = Number(prompt("Digite a sua altura"))

IMC = peso / (altura * altura)

if (IMC <= 18,5 &&  IMC >=24,9){
    document.write(`Peso normal`)

} else if (IMC <= 25 &&  IMC >= 29,9){
    document.write(`Sobrepeso`)

} else if (IMC <= 30 &&  IMC >= 34,9){
    document.write(`Obesidade I`)

} else if (IMC <= 35 &&  IMC >= 39,9){
    document.write(`Obesidade II`)

} else {
    document.write(`Obesidade III ou morbida`)
}
