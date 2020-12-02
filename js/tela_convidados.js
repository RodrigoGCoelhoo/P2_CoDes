document.addEventListener('DOMContentLoaded', function() {

    n = parseInt(localStorage.getItem('convidados'))
    console.log(n)

    inputs = document.querySelectorAll('.input_check')

    botao = document.querySelector('.finalizar');

    botao.addEventListener('click', function(event) {
        for (i = 0; i < 8; i++){
            if (inputs[i].checked == true){
                n += 1
            }   
        }
        n = n.toString()
        n += ' convidados'
        localStorage.setItem('convidados', n)
    })
    

})