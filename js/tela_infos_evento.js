document.addEventListener('DOMContentLoaded', function() {

    div = document.querySelectorAll('.box_evento_info')

    local_h2 = document.createElement('h2')
    local_h2.className = "infos_atualizadas";
    local_h2.innerHTML = localStorage.getItem('local')
    div[0].appendChild(local_h2)

    horario_h2 = document.createElement('h2')
    horario_h2.className = "infos_atualizadas";
    horario_h2.innerHTML = localStorage.getItem('horario')
    div[1].appendChild(horario_h2)

    convidados_h2 = document.createElement('h2')
    convidados_h2.className = "infos_atualizadas";
    convidados_h2.innerHTML = localStorage.getItem('convidados')
    div[2].appendChild(convidados_h2)

})