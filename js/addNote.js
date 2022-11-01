import Nota from "./Nota.js";
import DataBase from './Database.js'

const add_parr = document.querySelector('.add_title');
const add_title = document.querySelector('.add_parr');
const new_note  = document.querySelector('.new_note');
const note_btn = document.querySelector('.note_btn');

const titulo = document.querySelector('#titulo');

let nota = new Nota();
const database = new DataBase('notes_app');

const removeNoteElement = ( evt ) => {
    evt.target.parentElement.parentElement.parentElement.remove();
}

const addNewNoteElement = ( type ) => {
    const fragment = document.createDocumentFragment();

    const note_element = document.createElement('div');
    note_element.classList.add('note_element');

    const elements = document.createElement('div');
    elements.classList.add('elements');

    const hr = document.createElement('hr');
    type ? hr.classList.add('hr_t') : hr.classList.add('hr_p');

    const aside = document.createElement('aside');
    aside.classList.add('aside_el');

    const a_x = document.createElement('a');
    const a_u = document.createElement('a');

    a_x.classList.add('btn_del');
    a_x.href = '#';
    a_x.textContent = 'X';

    a_x.addEventListener('click', removeNoteElement );

    a_u.classList.add('btn_up');
    a_u.href = '#';
    a_u.textContent = 'U';

    aside.appendChild( a_x );
    aside.appendChild( a_u );

    if( type ) {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'txt';
        input.placeholder = 'Inserte un titulo';
        input.classList.add('in_title');
        input.id = 'txt_value'

        elements.appendChild( input );
    }
    if( !type ) {
        const textarea = document.createElement('textarea');
        textarea.name = 'text';
        textarea.cols = "30";
        textarea.rows = "50";
        textarea.id = 'txt_value';

        elements.appendChild( textarea );
    }

    elements.appendChild( aside );
    note_element.appendChild( elements );
    note_element.appendChild( hr );

    fragment.appendChild( note_element );

    new_note.insertBefore(fragment, note_btn);    
}

const saveNote = () => {
    
    for( let element of new_note.children ) {
        let newNoteElement = {
            type: '',
            content: ''
        }
        try {
            const content = element.children[0].children.txt_value;
            const type    = element.children[0].children.txt_value.name;

            if( type == 'txt' ) {
                newNoteElement.type = 'title'
            }
            if( type == 'text' ) {
                newNoteElement.type = 'par'
            }

            newNoteElement.content = content.value;

            nota.addElement( newNoteElement );
        }
        catch(err) {
            console.log( 'Fue el boton' );
        }
        finally {
            
        }
    }
    database.addData( nota );
    nota = new Nota();
    titulo.value = '';

    database.readData()
} 

add_parr.addEventListener('click', () => {
    addNewNoteElement( true );
});

add_title.addEventListener('click', () => {
    addNewNoteElement( false );
});

titulo.addEventListener('keyup', () => {
    nota.setTitulo( titulo.value );
});
note_btn.addEventListener('click', saveNote );
