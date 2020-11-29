document.addEventListener('DOMContentLoaded', function() {

    
    ul = document.querySelector('ul');
    botao = document.querySelector('.mais');

    botao.addEventListener('click', function(event) {
        input = document.querySelector('input');
        conteudo = input.value;
        if (conteudo != ''){
            li = document.createElement('li');
            li.innerHTML = (conteudo);
            ul.appendChild(li);
            input.value = '';
        }
    })

    botao_finalizar = document.querySelector('.finalizar');

    botao_finalizar.addEventListener('click', function(event) {
        localStorage.setItem('check2', '1');
    })
    
})