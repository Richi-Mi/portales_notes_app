import Nota from "./Nota.js";

const add_parr = document.querySelector('.add_title');
const add_title = document.querySelector('.add_parr');
const new_note  = document.querySelector('.new_note');

const titulo = document.querySelector('#titulo');

const nota = new Nota();

const addNewNoteElement = ( type ) => {
    const fragment = document.createDocumentFragment();

    const note_element = document.createElement('div');
    note_element.classList.add('note_element');

    
}

add_parr.addEventListener('click', (evt) => {
    addNewNoteElement('title');
});

add_title.addEventListener('click', (evt) => {
    addNewNoteElement('paragraph');
});

titulo.addEventListener('keyup', () => {
    nota.setTitulo( titulo.value );
});