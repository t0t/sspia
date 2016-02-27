// Controller Interaccion entre -dom y la logica
// Import Models
import Invoice from './model/invoice';
import Task from './model/task';
// import Task from './model/task';
import Xhr from './model/xhr';
import { elMain, elInputTarea, elInputCantidad, elInputPrecio, elSelectTaxes, elBtnPrint, elBtnAddTask, elBtnDelTask, elBtnInvoice, printTask, removeTask, printTaxes, printTotals } from './view/invoice';

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
  let newTask = new Task(taskValue);
  invoice.addTask(newTask);
  newTask.datos.cantidad = elInputCantidad.value;
  newTask.datos.precio = elInputPrecio.value;
  newTask.datos.baseImp = elInputPrecio.value * elInputCantidad.value;
  baseImp =+ newTask.datos.baseImp;
  total += baseImp;
  if (elSelectTaxes[0].selected === true) {
    newTask.is_taxed = true;
  }
  console.log(`
    Base Imponible: ${baseImp}
    Total acumulado: ${total}
  `, newTask);
  printTask(); // Imprime en DOM
}

// Eliminar tarea
function removeTarea() {
  let rowEl = document.querySelector('.invoice__row');
  let taskList = elMain.children;
  for (var i = 0; i < taskList.length; i++) {
    taskList[i].remove();
  }
  console.log(taskList);
}

// Generar factura
function printInvoice() {
  let arr = invoice.tasks;
  let totalImps = 0;
  arr.forEach(function(pilla){
    if (pilla.is_taxed === true) {
      totalImps += pilla.datos.baseImp;
      let iva = (totalImps * 21) / 100;
      let irpf = (totalImps * 15) / 100;
      let totalTaxes = iva - irpf;
      console.log(`Impuestos: ${totalTaxes}`);
      totalImps += totalTaxes;
    } else {
      totalImps += pilla.datos.baseImp;
    }
  });
  invoice.totalImps(totalImps);
}

// Print screen to pdf
function printPdf(e) {
  e.preventDefault;
  window.print();
}

// Los 4 eventos click
elBtnPrint.addEventListener( 'click', printPdf );
elBtnAddTask.addEventListener( 'click', addTask );
elBtnDelTask.addEventListener( 'click', removeTarea );
elBtnInvoice.addEventListener( 'click', printInvoice );





// get Json data
// var xhr = new Xhr( { json: true } );
// xhr.send( 'data/content/skills.json' ).then( function (skills) {
//   for (var i = 0; i < skills[0].tools.length; i++) {
//     skills[0].tools[i];
//   }
//   // console.log(skills);
// });
