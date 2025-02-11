let ano

ano = Number(prompt("Digite o ano atual"))

if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
    document.write(`Ano bissexto`)

} else {
    document.write(`Ano não bissexto`)
}
