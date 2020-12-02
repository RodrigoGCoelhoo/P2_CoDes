document.addEventListener('DOMContentLoaded', function() {

    inputs = document.querySelectorAll('input')
    input_check = inputs[0]
    input_endereco = inputs[1]

    botao = document.querySelector('.botao_confirmar');

    botao.addEventListener('click', function(event) {
        if (input_check.checked == true){
            localStorage.setItem('local', 'Play Tennis - Morumbi');
        }
        if (input_endereco.value != ''){
            localStorage.setItem('local', input_endereco.value);
        }
    })
})