
// Import Models
import Invoice from './model/invoice';
import Xhr from './model/xhr';
// Import Views
import { elItems, elPrecio, elBaseImp, elIva, elIrpf, elTaxTotal, elTotal, elTaskRow, elBtnAddTask, elBtnDelTask, elBtnInvoice } from './view/invoice';

// get Json data
var xhr = new Xhr( { json: true } );
xhr.send( 'data/content/skills.json' ).then( function (skills) {
  for (var i = 0; i < skills[0].tools.length; i++) {
    skills[0].tools[i];
  }
  console.log(skills);
});

// genera nueva instancia de Invoice
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

elBtnInvoice.addEventListener( 'click', printInvoice );
// elBtnAddTask.addEventListener( 'click', addTask );
// elBtnDelTask.addEventListener( 'click', delTask );
