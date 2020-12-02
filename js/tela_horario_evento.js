document.addEventListener('DOMContentLoaded', function() {
    inputs = document.querySelectorAll('input');
    input_check = inputs[0];
    input_horario = inputs[1];

    botao = document.querySelector('.botao_confirmar');

    botao.addEventListener('click', function(event) {
        if (input_check.checked == true){
            localStorage.setItem('horario', '19/12/2020 - 10h00');
        }
        if (input_horario.value != ''){
            localStorage.setItem('horario', input_horario.value);
        }
    })
})