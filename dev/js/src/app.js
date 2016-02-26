// Import Models
import Invoice from './model/invoice';
import Task from './model/task';
// import Task from './model/task';
import Xhr from './model/xhr';
import { elMain, elInputTarea, elInputCantidad, elInputPrecio, elSelectTaxes, elBtnPrint, elBtnAddTask, elBtnDelTask, elBtnInvoice, printTask, removeTask, printTaxes } from './view/invoice';

// get Json data
var xhr = new Xhr( { json: true } );
xhr.send( 'data/content/skills.json' ).then( function (skills) {
  for (var i = 0; i < skills[0].tools.length; i++) {
    skills[0].tools[i];
  }
  // console.log(skills);
});

// Controller Interaccion entre -dom y la logica

let invoice = new Invoice();
let iva = 21;
let irpf= 15;
let total = 0;

function addTask() {
  let taskValue = elInputTarea.value;
  let newTask = new Task(taskValue);
  invoice.addTask(newTask);
  newTask.datos.cantidad = elInputCantidad.value * 1;
  newTask.datos.precio = elInputPrecio.value * 1;
  newTask.datos.baseImp = elInputPrecio.value * elInputCantidad.value;
  total =+ newTask.datos.baseImp;
  if (elSelectTaxes[0].selected === true) {}
  printTask();
  console.log(newTask);
  console.table(newTask.datos);
}

function removeTarea() {
  let rowEl = document.querySelector('.invoice__row');
  let taskList = elMain.children;
  for (var i = 0; i < taskList.length; i++) {
    taskList[i].remove();
  }
  console.log(taskList);
}

// Generate invoice
function printInvoice (e) {
  e.preventDefault;
  console.log(invoice.tasks);
  let value;
  for (var i = 0; i < invoice.tasks.length; i++) {
    value = invoice.tasks[i].datos.baseImp;
    total + value;
    console.log(total + value);
  }
  // elIva.value       =   factura.calcIva();
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

console.clear();
console.table(invoice.tasks);
console.log(invoice);
