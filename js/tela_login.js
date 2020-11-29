document.addEventListener('DOMContentLoaded', function() {

    botao_cadastrar = document.querySelector('.botao_cadastrar')
    botao_cadastrar.addEventListener('click', function(event) {
        localStorage.setItem('check1', '0')
        localStorage.setItem('check2', '0')
        localStorage.setItem('check3', '0')
    })
})