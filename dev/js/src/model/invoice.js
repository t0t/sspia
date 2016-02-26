// MODEL models.js
class Invoice {
  constructor() {
    this.tasks = [];
  }
  addTask(task){
    this.tasks.push(task);
  }
  totalImps(total){
    console.log(`
      El total sin impuestos es:
      ${total}
      `);
  }
  calcTaxes(taxes) {
    console.log(`
      Los impuestos son:
      ${taxes}
      `);
  }
  // removeTask(i){
  //   this.tasks.splice(i,1);
  // }
}
export default Invoice;
