import DataBase from "../Database.js";

const aside = document.querySelector('.aside');
const container = document.querySelector('.container');
const note_div = document.querySelector('.nota');

let database = new DataBase('notes_app');
let abierto = false;

const contruirNota = async ( id ) => {
    database = new DataBase('notes_app');
    const data = await database.readData();

    if( data[id] ) {
        const nota =  data[id].elements;    
        const fragment = document.createDocumentFragment();
        for( let n of nota ) {
            let elt;
            if( n.type == 'title') {
                elt = document.createElement('h2');
                elt.textContent = n.content;
            }
            if( n.type == 'par' ) {
                elt = document.createElement('p');
                elt.textContent = n.content;
            }
            const hr = document.createElement('hr');
    
            fragment.appendChild( elt );
            fragment.appendChild( hr );
    
        }
        note_div.innerHTML = '';
        note_div.appendChild(fragment);
    }
}

const agregarNotas = async () => {
    const data = await database.readData();
    let i = 0;
    for( let nota of data ) {
        const aside_element = `
            <div class="link_nota trans_ease" id="${i}">
                <a> <i class="fa-regular fa-note-sticky" id="${i}"></i> ${ nota.titulo } </a>
            </div>
        `;
        aside.innerHTML += aside_element;
        i++;
    }

    
}
agregarNotas();

aside.addEventListener('click', async (evt) => {
    console.log( evt.target.id );
    if( evt.target.id == 'btn_close' ) {
        console.log('entre');
        abierto = !abierto;

        console.log('pulsado pai');
        if( abierto ) {
            aside.classList.add('cerrar');
            container.classList.add('not_aside');
        }
        if( !abierto ) {
            aside.classList.remove('cerrar');
            container.classList.remove('not_aside');
        }
    }
    await contruirNota( evt.target.id );
})