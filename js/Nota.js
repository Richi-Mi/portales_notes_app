// Modelo
class Nota {
    constructor() {
        this.titulo;
        this.elements = [];
    }
    addElement({ type, content }) {
        const element = {
            type,
            content
        }
        this.elements.push( element );
    }
    removeElement( ind ) {
        let newElements;
        for( let element in this.elements ) {
            if( element !== ind ) {
                newElements.push( this.elements[element] );
            }
        }
    }
    getElements() {
        return this.elements;
    }
    setTitulo( titulo ) {
        this.titulo = titulo;
    }
    getTitle() {
        return this.titulo;
    }
}
export default Nota;