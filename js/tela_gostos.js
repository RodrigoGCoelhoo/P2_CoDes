document.addEventListener('DOMContentLoaded', function() {

    
    var uls = document.querySelectorAll('ul');
    var buttons = document.querySelectorAll('.mais');

    for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        buttonsControl(this, i);
    }, false);
    }
    function buttonsControl(button, i) {
        inputs = document.querySelectorAll('input');
        conteudo = inputs[i].value;
        if (conteudo != ''){
            li = document.createElement('li');
            li.innerHTML = (conteudo);
            uls[i].appendChild(li);
            inputs[i].value = '';
        }
    }

    botao_finalizar = document.querySelector('.finalizar');

    botao_finalizar.addEventListener('click', function(event) {
        localStorage.setItem('check3', '1');
    });
    
})