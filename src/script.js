var btn = document.querySelector('#show-or-hide');
var container = document.querySelector('.container');

btn.addEventListener('click', function() {

    if(container.style.display === 'block') {
        container.style.display = 'none';
    } else {
        container.style.display = 'block';
    }

});

var btn = document.querySelector('#show-or-hide');
var enviar = document.querySelector('.enviar');

btn.addEventListener('click', function() {

    if(enviar.style.display === 'block') {
        enviar.style.display = 'none';
    } else {
        enviar.style.display = 'block';
    }

});

function ok(){
    if(onclick){
        alert('Não há nada escrito');}
} 

