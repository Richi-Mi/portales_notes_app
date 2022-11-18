export default class DataBase {
    constructor(dbname) {
        this.indexedDB = window.indexedDB;
        this.request = this.indexedDB.open(dbname, 2);  // Creamo o abrimos una nueva base de datos. (nombre, version)
        this.objStore = 'notes';
        ( async () => {
            this.db = await this.setEvents();
        })();
    }
    setEvents() {
        return new Promise((resolve, reject) => {
            this.request.onsuccess = () => {
                // Codigo que se ejecuta si se encontro lo base de datos.
                console.log('La base de datos fue encontrada.');

                resolve(this.request.result); // Retorna conexion a la base de datos
            }
            this.request.onupgradeneeded = () => {
                // Retorna conexion a la base de datos
                // Codigo que se ejecuta si se creo la base de datos.
                console.log('La base de datos ha sido creada');
                let db = this.request.result;

                db.createObjectStore(this.objStore, {
                    autoIncrement: true
                });

                resolve(this.request.result);
            }
            this.request.onerror = (error) => {
                reject('Programa no utilizable en este navegador ' + error);
            }
        });
    }
    // Legacy
    addData(data) {
        const transaction = this.db.transaction([this.objStore], 'readwrite');
        const objectStore = transaction.objectStore(this.objStore);

        objectStore.add(data);
    }

    async readData() {
        this.db =  await this.setEvents();
        return new Promise(( resolve ) => {
            
            const transaction = this.db.transaction([this.objStore], 'readonly');
            const objectStore = transaction.objectStore(this.objStore);
            const request     = objectStore.openCursor();
            const data = [];

            request.onsuccess = (evt) => {
                const cursor = evt.target.result;
                if (cursor) {
                    data.push(cursor.value);

                    cursor.continue();
                }
                else {
                    resolve( data );
                }
            }
        });
    }
    updateData(data) {
        const transaction = this.db.transaction([this.objStore], 'readwrite');
        const objectStore = transaction.objectStore(this.objStore);

        objectStore.put(data);
    }
    removeData(key) {
        // retorna true si se borro el objeto
        const transaction = this.db.transaction([this.objStore], 'readwrite');
        const objectStore = transaction.objectStore(this.objStore);

        const request = objectStore.delete(key);
        request.onsuccess = () => {
            return true;
        }
    }
}