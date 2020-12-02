document.addEventListener('DOMContentLoaded', function() {

    
    ul = document.querySelector('ul');
    botao = document.querySelector('.mais');

    botao.addEventListener('click', function(event) {
        inputs = document.querySelectorAll('input');
        input = inputs[7];
        conteudo = input.value;
        if (conteudo != ''){
            li = document.createElement('li');
            li.innerHTML = (conteudo);
            ul.appendChild(li);
            input.value = '';
        }
    })
    
})