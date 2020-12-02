document.addEventListener('DOMContentLoaded', function() {

    ps = document.querySelectorAll('.infos_atualizadas')
    local = ps[0]
    horario = ps[1]
    convidados = ps[2]

    local.innerHTML = localStorage.getItem('local')
    horario.innerHTML = localStorage.getItem('horario')
    convidados.innerHTML = localStorage.getItem('convidados')
})