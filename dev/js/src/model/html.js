// MODEL Element
class Element {
  constructor( { name = 'div' } = {} ) {
    this.name = name;
  }
  // Metodo para crear elemento html5 con la clase css y el contenido como parámetros
  createEl( clase, inner ) {
    let el = document.createElement( this.name );
    el.className = clase;
    el.innerHTML = inner;
    return el;
  }
}
export default Element;
