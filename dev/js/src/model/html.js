// MODEL Task
class Element {
  constructor( { name = 'div' } = {} ) {
    this.name = name;
  }
  createEl(clase,inner) {
    let el = document.createElement(this.name);
    el.className = clase;
    el.innerHTML = inner;
    return el;
  }
}
export default Element;
