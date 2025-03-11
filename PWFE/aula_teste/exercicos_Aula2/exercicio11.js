min = Math.ceil(1);
max = Math.floor(4);

let op = Number(prompt("Escolha: 1-🗿 2-📃 3- ✂"))
let op_computer = (Math.floor(Math.random() * (max - min) + min))

if (op == 1 && op_computer == 1) {
    document.write(`🗿 x 🗿 = Empate`)
} else if (op == 1 && op_computer == 2) {
    document.write(`🗿 x 📃 = Computador Venceu`)
} else if (op == 1 && op_computer == 3) {
    document.write(`🗿 x ✂ = Usuario Venceu`)
}

        
if (op == 2 && op_computer == 1) {
    document.write(`📃 x 🗿 = Usuario Venceu`)
} else if (op == 2 && op_computer == 2) {
    document.write(`📃 x 📃 = Empate`)
} else if (op == 2 && op_computer == 3) {
    document.write(`📃 x ✂ = Computador Venceu`)
}

        
if (op == 3 && op_computer == 1) {
    document.write(`✂ x 🗿 = Computador Venceu`)
} else if (op == 3 && op_computer == 2) {
    document.write(`✂ x 📃 = Usuario Venceu`)
} else if (op == 3 && op_computer == 3) {
     document.write(`✂ x ✂ = Empate`)
}