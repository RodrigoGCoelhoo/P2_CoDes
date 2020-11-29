document.addEventListener('DOMContentLoaded', function() {

    img_check1 = document.querySelector('.check1');
    img_check2 = document.querySelector('.check2');
    img_check3 = document.querySelector('.check3');

    botao_finalizar = document.querySelector('.finalizar_infos');

    if (localStorage.getItem('check1') == '1'){
        img_check1.style.display = 'block';
    }
    if (localStorage.getItem('check2') == '1'){
        img_check2.style.display = 'block';
    }
    if (localStorage.getItem('check3') == '1'){
        img_check3.style.display = 'block';
    }

    if (localStorage.getItem('check1') == '1' && localStorage.getItem('check2') == '1' && localStorage.getItem('check3') == '1'){
        botao_finalizar.style.opacity = '1';
        botao_finalizar.disabled = false;
    }
});