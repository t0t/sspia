// MODEL models.js
class Invoice {

  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  getTask() {
    let elTask = document.querySelector('.task');
    let task = elTask.value;
    return task;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  delTask(task) {
    this.tasks.push(task);
  }

  getCantidad() {
    let elCantidad = document.querySelector('.cantidad');
    let cantidad = elCantidad.value;
    return cantidad;
  }

  getPrice() {
    let elPrecio = document.querySelector('.precio');
    let precio = elPrecio.value;
    return precio;
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
    let taxed = document.querySelector('.hayImpuestos').children;
    let taxes = 0;
    if ( taxed[0].selected === false) {
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



// CONTROLLER controllers.js


// DOM Elements
let elItems =       document.querySelector( '.items' ),
    elBaseImp =     document.querySelector( '.base_imp' ),
    elIva =         document.querySelector( '.iva' ),
    elIrpf =        document.querySelector( '.irpf' ),
    elTaxTotal =    document.querySelector( '.tax_total' ),
    elTotal =       document.querySelector( '.total' ),
    elTaskRow =     document.querySelector( '.invoice__row' ),
    elBtnAddTask =  document.querySelector( '.btn-add' ),
    elBtnDelTask =  document.querySelector( '.btn-delete' ),
    elBtnInvoice =  document.querySelector( '.btn-invoice' );

var factura = new Invoice();

// Generate invoice
function printInvoice(e) {
  e.preventDefault;
  // Pinta datos en el DOM
  elIva.value       =   factura.calcIva();
  elIrpf.value      =   factura.calcIrpf();
  elTaxTotal.value  =   factura.calcTaxes();
  elBaseImp.value   =   factura.calcBaseImp();
  elTotal.value     =   factura.calcTotal();
  // console.log( 'Tarea: ' + factura.getTask());
  // console.log( 'Cantidad: ' + factura.getCantidad());
  // console.log( 'Precio: ' + factura.getPrice());
}

// Print new task
function addTask(e) {
  e.preventDefault;
  factura.addTask(factura.getTask());
  console.log(factura.tasks);
  console.log(elTaskRow);
}

// Delete Task
function delTask(e) {
  e.preventDefault;
  factura.delTask(factura.getTask());
}

elBtnInvoice.addEventListener( 'click', printInvoice );
elBtnAddTask.addEventListener( 'click', addTask );
elBtnDelTask.addEventListener( 'click', delTask );
