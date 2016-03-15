// Controller Interaccion entre -dom y la logica
// Import Models
import Invoice from './model/invoice';
import Task from './model/task';
import { elMain, elInputTarea, elInputCantidad, elInputPrecio, elSelectTaxes, elBtnPrint, elBtnAddTask, elBtnDelTask, elBtnInvoice, printTask, printTaxes, printTotals } from './view/invoice';
import Element from './model/html';


// Creamos la instancia de la clase Invoice
let invoice = new Invoice();

// Variables globales
let iva = 21,
    irpf = 15,
    baseImp = 0,
    total = 0;

// Añadir tarea
function addTask() {
  let taskValue = elInputTarea.value;
  let newTask = new Task( taskValue );
  invoice.addTask( newTask );
  newTask.datos.cantidad = elInputCantidad.value;
  newTask.datos.precio = elInputPrecio.value;
  newTask.datos.baseImp = elInputPrecio.value * elInputCantidad.value;
  baseImp =+ newTask.datos.baseImp;
  total += baseImp;
  if ( elSelectTaxes[0].selected === true ) {
    newTask.is_taxed = true;
  }
  printTask(); // Imprime en DOM
}

// Eliminar tarea
function removeTask() {
  let rowEl = document.querySelector( '.invoice__row' );
  let taskList = elMain.children;
  for ( var i = 0; i < taskList.length; i++ ) {
    taskList[i].remove();
    // this.tasks.splice(i,1);
  }
}

// Generar factura
function printInvoice() {
  let arr = invoice.tasks;
  let totalImps = 0;
  let totalTaxes = 0;
  arr.forEach( function ( item ) {
    if ( item.is_taxed === true ) {
      totalImps += item.datos.baseImp;
      let iva = (totalImps * 21) / 100;
      let irpf = (totalImps * 15) / 100;
      totalTaxes = iva - irpf;
      totalImps += totalTaxes;
    } else {
      totalImps += item.datos.baseImp;
    }
  });
  printTotals(totalImps, totalTaxes);
}

// Print screen to pdf
function printPdf(e) {
  e.preventDefault;
  window.print();
}

// Los 4 eventos click
elBtnPrint.addEventListener( 'click', printPdf );
elBtnAddTask.addEventListener( 'click', addTask );
elBtnDelTask.addEventListener( 'click', removeTask );
elBtnInvoice.addEventListener( 'click', printInvoice );
