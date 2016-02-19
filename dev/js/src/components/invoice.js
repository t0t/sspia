
class Invoice {

  constructor() {
    // this.number = number;
  }

  getTask() {
    let elTask = document.querySelector('.task');
    let task = elTask.value;
    return task;
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





const factura = new Invoice();

// DOM Elements
let elItems = document.querySelector('.items'),
    elBaseImp = document.querySelector('.base_imp'),
    elTotal = document.querySelector('.total'),
    elBtnInvoice = document.querySelector('.btn-invoice');


// Generate buton
elBtnInvoice.addEventListener( 'click', function (e) {
  e.preventDefault;

  elBaseImp.value = factura.calcBaseImp();
  elTotal.value = factura.calcTotal();

  console.log( 'Tarea: ' + factura.getTask());
  console.log( 'Cantidad: ' + factura.getCantidad());
  console.log( 'Precio: ' + factura.getPrice());
  console.log( 'IVA: ' + factura.calcIva());
  console.log( 'IRPF: ' + factura.calcIrpf());
  console.log( 'Total impuestos a añadir: ' + factura.calcTaxes());
  console.log( 'Base Imponible: ' + factura.calcBaseImp());
  console.log( 'TOTAL: ' + factura.calcTotal());
});
