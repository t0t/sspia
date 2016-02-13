
// Funcion anónima para no contaminar el proyecto
let app = {};

app = function () {

  var brand = {};
}();

var c = 4;
console.log(c);

var myModule = function () {
  var module;

  module.varProperty = "This is a property on myModule";
  module.funcProperty = function () {
    //insert code here
  };

  return module;
}();
