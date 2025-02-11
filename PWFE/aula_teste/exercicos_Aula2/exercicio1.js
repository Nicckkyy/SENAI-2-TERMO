let num1 = Number(prompt("Digite um número"))
let num2 = Number(prompt("Digite um número"))
        
        diferenca = num1 - num2
    if(diferenca < 0 ){
        diferenca = diferenca *( -1)
        console.log 
        document.write(`a diferença dos número é ${diferenca}`)
    } else {
        document.write(`A diferença entre ${num1} e ${num2} é igual a ${diferenca}`)
    }

 