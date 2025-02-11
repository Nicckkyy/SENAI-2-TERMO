let taxa, valor

taxa = Number(prompt("Qual a taxa do produto?"))
valor = Number(prompt("Qual o valor da compra? "))

cambio = taxa * valor
document.write(`Seu cambio é de ${cambio}`)