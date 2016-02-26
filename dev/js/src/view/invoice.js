
// IMPRIMIR DATOS EN EL DOM
export let elMain = document.querySelector( '.invoiceApp' );
export let elInputTarea = document.querySelector( '.tarea' );
export let elInputCantidad = document.querySelector( '.cantidad' );
export let elSelectTaxes = document.getElementsByTagName( 'option' );
export let elInputPrecio = document.querySelector( '.precio' );
export let elBtnDelTask = document.querySelector( '.btn-del' );
export let elBtnAddTask = document.querySelector( '.btn-add' );
export let elBtnInvoice = document.querySelector( '.btn-invoice' );
export let elBtnPrint = document.querySelector( '.btn-print' );

export function printTask() {
  let baseImp = elInputPrecio.value * elInputCantidad.value;
  let outPut = document.createElement( 'div' );
  outPut.className = 'invoice__row';
  outPut.innerHTML = `
    <p>${elInputTarea.value}</p>
    <p>${elInputCantidad.value} horas</p>
    <p>x</p>
    <p>${elInputPrecio.value}€</p>
    <p>=</p>
    <p data-valor="${baseImp}">${baseImp}€</p>
  `;
  elMain.appendChild(outPut);
  // removeTask();
}
