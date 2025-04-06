
btn_enviar.addEventListener("click", function () {
    try {

        const validarFormulario = () => {
            let nome = document.getElementById('nome').value
            let endereco = document.getElementById('endereco').value
            let sexo = document.querySelector('input[name="sexo"]:checked')
            let telefone = document.getElementById('telefone').value
            let celular = document.getElementById('celular').value
            let email = document.getElementById('email').value
            
            if (!nome || !endereco || !sexo || !telefone || !celular || !email) {
                alert('Todos os campos devem ser preenchidos!')
                return false
            }
        
            alert('Formulário enviado com sucesso!')
            return true
        }
        validarFormulario()
    } catch (error) {
        console.log("Error:", error)
    }
})



document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".lessons_container")

    cards.forEach(card => {
        card.addEventListener("click", function () {
            const aula = this.getAttribute("data-aula")
            window.location.href = `../${aula}/index.html`
        })
    })
})

document.addEventListener("DOMContentLoaded", function () {
    const iconHome = document.querySelector(".icon_home")

    iconHome.addEventListener("click", function () {
        window.location.href = "../index.html"
    })
})