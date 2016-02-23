// MODEL models.js
class Invoice {

  constructor( name ) {
    this.name = name;
    this.tasks = [];
  }

  getTask() {
    let elTask = document.querySelector( '.task' ).value;
    return elTask;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  delTask(task) {
    this.tasks.push(task);
  }

  getCantidad() {
    let elCantidad = document.querySelector( '.cantidad' ).value;
    return elCantidad;
  }

  getPrice() {
    let elPrecio = document.querySelector( '.precio' ).value;
    return elPrecio;
  }

  calcIva() {
    let iva = ( this.calcBaseImp() * 21 ) / 100;
    return iva; // cantidad que se suma al imponible
  }

  calcIrpf() {
    let irpf = ( this.calcBaseImp() * 15 ) / 100;
    return irpf; // cantidad que se resta al iva
  }

  calcTaxes() {
    let taxed = document.querySelector( '.hayImpuestos' ).children;
    let taxes = 0;
    if ( taxed[0].selected === false ) {
      taxes = this.calcIva() - this.calcIrpf();
    }
    return taxes; // si es true: cantidad a sumar a la vase imponible
  }

  calcBaseImp() {
    let baseImp = this.getCantidad() * this.getPrice();
    return baseImp;
  }

  calcTotal() {
    let total = this.calcBaseImp() + this.calcTaxes();
    return total;
  }

}

export default Invoice;
