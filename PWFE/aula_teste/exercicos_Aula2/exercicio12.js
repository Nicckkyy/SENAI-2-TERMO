let numero = Number(prompt('Digite um numero:'))
let fatorial = 1


for (let i = 1; i <= numero; i++) {
    fatorial *= i
}

document.write(fatorial)