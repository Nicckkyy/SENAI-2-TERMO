let numero, multi

numero = Number(prompt("Insira um numero: "))

if(numero > 1 && numero < 9) {
    for (let i = 1; i < 11; i++) {
        multi = numero * i
        document.write(`${numero} x ${i} = ${multi} <p>`)
    }
} else {
    document.write(`valor invalido`)
}