// MODEL Invoice
class Invoice {
  constructor() {
    this.tasks = [];
  }
  addTask(task){
    this.tasks.push( task );
  }
  showTasks() {
    return this.tasks;
  }
  totalImps( total ){
    console.log(`
      El total es: ${total}
      `); 
  }
  calcTaxes( taxes ) {
    console.log(`
      Los impuestos son:
      ${taxes}
      `);
  }
}
export default Invoice;
