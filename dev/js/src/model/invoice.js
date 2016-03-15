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
}
export default Invoice;
