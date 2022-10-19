const in_name      = document.querySelector('#name');
let nombre = localStorage.getItem('nombre');

nombre != null ? in_name.value = nombre : in_name.value = '';

in_name.addEventListener('focusout', () => {
    nombre = in_name.value;

    localStorage.setItem('nombre', nombre );
})
