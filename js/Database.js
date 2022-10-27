const request = indexedDB.open('notes_app', 1 ); // Creamo o abrimos una nueva base de datos.
let db

request.onsuccess = () => {
    db = request.result // Retorna conexion a la base de datos
    // Codigo que se ejecuta si se encontro lo base de datos.
}
request.onupgradeneeded = () => {
    db = request.result // Retorna conexion a la base de datos
    const notas = db.createObjectStore('notes')
    // Codigo que se ejecuta si se creo la base de datos.
}
request.onerror = ( error ) => { 
    console.log('Programa no utlixable en este navegador ' + error );
}
const addData = ( data ) => {
    const transaction = db.transaction(['notes'], 'readwrite');
}
