let nota1, nota2, media

nota1 = Number(prompt("Diga a nota a ser calculada"))
nota2 = Number(prompt("Diga a nota a ser calculada"))

media = (nota1 + nota2)/2

if(media >= 6){
    if(media % 2 == 0){
        document.write(`Foi aprovado com uma nota par`)
    } else {
        document.write(`Foi aprovado com uma nota ímpar`)
    }
  
} else {
    document.write(`Foi reprovado`)
}