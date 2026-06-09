const formulario = document.querySelector('.formulario');
const mascara = document.querySelector('.mascara-form');

function MostrarFormulario() {
    formulario.style.left = '50%';
    formulario.style.transform = 'translatex(-50%)';
    mascara.style.visibility = 'visible';
}


function EsconderFormulario() {
    formulario.style.left = '-340px';
    formulario.style.transform = 'translatex(0)';
    mascara.style.visibility = 'hidden';
}
