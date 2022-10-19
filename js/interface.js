const aside = document.querySelector('aside');
const btn_close = document.querySelector('.btn_close');
const container = document.querySelector('.container');

let abierto = false;

btn_close.addEventListener('click', (e) => {
    abierto = !abierto;

    if( abierto ) {
        aside.classList.add('cerrar');
        container.classList.add('not_aside');
    }
    if( !abierto ) {
        aside.classList.remove('cerrar');
        container.classList.remove('not_aside');
    }
})
