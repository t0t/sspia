// MODEL models.js
class Invoice {
  constructor() {
    this.tasks = [];
    // this.iva = 21;
    // this.irpf = 15;
  }
  addTask(task){
    this.tasks.push(task);
  }
  removeTask(i){
    this.tasks.splice(i,1);
  }
}
export default Invoice;
