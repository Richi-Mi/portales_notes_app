// Modelo
class Nota {
    constructor() {
        this.titulo;
        this.elements = [];
    }
    addElement( type, content ) {
        const el = {
            type,
            content
        }
        this.elements.push( el );
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
}
export default Nota;