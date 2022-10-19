const aside = document.querySelector('aside');
const btn_close = document.querySelector('.btn_close');
const container = document.querySelector('.container');
const in_name      = document.querySelector('#name');

let abierto = false;
let nombre = localStorage.getItem('nombre');

nombre != null ? in_name.value = nombre : in_name.value = '';

btn_close.addEventListener('click', () => {
    abierto = !abierto;

    if( abierto ) {
        aside.classList.add('cerrar');
        container.classList.add('not_aside');
    }
    if( !abierto ) {
        aside.classList.remove('cerrar');
        container.classList.remove('not_aside');
    }
});

in_name.addEventListener('focusout', () => {
    nombre = in_name.value;

    localStorage.setItem('nombre', nombre );
})
