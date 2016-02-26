// MODEL models.js
class Invoice {
  constructor() {
    this.tasks = [];
    // this.iva = 21;
    // this.irpf = 15;
  }
  calcTotal() {
    //calc el total
  }
  calcTax() {
    //calc el iva
  }
  addTask(task){
    this.tasks.push(task);
  }
}
export default Invoice;
