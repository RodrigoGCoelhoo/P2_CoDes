document.addEventListener('DOMContentLoaded', function() {

    inputs = document.querySelectorAll('input');
    local = inputs[1];
    horario = inputs[2];
    convidados = inputs[3];

    local.value = localStorage.getItem('local');
    horario.value = localStorage.getItem('horario');
    if (localStorage.getItem('convidados') != '0'){
        convidados.value = localStorage.getItem('convidados');
    }
})