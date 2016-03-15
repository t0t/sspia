(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _invoice = require('./model/invoice');

var _invoice2 = _interopRequireDefault(_invoice);

var _task = require('./model/task');

var _task2 = _interopRequireDefault(_task);

var _invoice3 = require('./view/invoice');

var _html = require('./model/html');

var _html2 = _interopRequireDefault(_html);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Creamos la instancia de la clase Invoice
// Controller Interaccion entre -dom y la logica
// Import Models
var invoice = new _invoice2.default();

// Variables globales
var iva = 21,
    irpf = 15,
    baseImp = 0,
    total = 0;

// Añadir tarea
function addTask() {
  var taskValue = _invoice3.elInputTarea.value;
  var newTask = new _task2.default(taskValue);
  invoice.addTask(newTask);
  newTask.datos.cantidad = _invoice3.elInputCantidad.value;
  newTask.datos.precio = _invoice3.elInputPrecio.value;
  newTask.datos.baseImp = _invoice3.elInputPrecio.value * _invoice3.elInputCantidad.value;
  baseImp = +newTask.datos.baseImp;
  total += baseImp;
  if (_invoice3.elSelectTaxes[0].selected === true) {
    newTask.is_taxed = true;
  }
  (0, _invoice3.printTask)(); // Imprime en DOM
}

// Eliminar tarea
function removeTask() {
  var rowEl = document.querySelector('.invoice__row');
  var taskList = _invoice3.elMain.children;
  for (var i = 0; i < taskList.length; i++) {
    taskList[i].remove();
    // this.tasks.splice(i,1);
  }
}

// Generar factura
function printInvoice() {
  var arr = invoice.tasks;
  var totalImps = 0;
  var totalTaxes = 0;
  arr.forEach(function (item) {
    if (item.is_taxed === true) {
      totalImps += item.datos.baseImp;
      var _iva = totalImps * 21 / 100;
      var _irpf = totalImps * 15 / 100;
      totalTaxes = _iva - _irpf;
      totalImps += totalTaxes;
    } else {
      totalImps += item.datos.baseImp;
    }
  });
  (0, _invoice3.printTotals)(totalImps, totalTaxes);
}

// Print screen to pdf
function printPdf(e) {
  e.preventDefault;
  window.print();
}

// Los 4 eventos click
_invoice3.elBtnPrint.addEventListener('click', printPdf);
_invoice3.elBtnAddTask.addEventListener('click', addTask);
_invoice3.elBtnDelTask.addEventListener('click', removeTask);
_invoice3.elBtnInvoice.addEventListener('click', printInvoice);

},{"./model/html":2,"./model/invoice":3,"./model/task":4,"./view/invoice":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// MODEL Element

var Element = function () {
  function Element() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref$name = _ref.name;
    var name = _ref$name === undefined ? 'div' : _ref$name;

    _classCallCheck(this, Element);

    this.name = name;
  }
  // Metodo para crear elemento html5 con la clase css y el contenido como parámetros

  _createClass(Element, [{
    key: 'createEl',
    value: function createEl(clase, inner) {
      var el = document.createElement(this.name);
      el.className = clase;
      el.innerHTML = inner;
      return el;
    }
  }]);

  return Element;
}();

exports.default = Element;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// MODEL Invoice

var Invoice = function () {
  function Invoice() {
    _classCallCheck(this, Invoice);

    this.tasks = [];
  }

  _createClass(Invoice, [{
    key: "addTask",
    value: function addTask(task) {
      this.tasks.push(task);
    }
  }, {
    key: "showTasks",
    value: function showTasks() {
      return this.tasks;
    }
  }]);

  return Invoice;
}();

exports.default = Invoice;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// MODEL Task

var Task = function Task(name) {
  _classCallCheck(this, Task);

  this.name = name;
  this.datos = {};
  this.is_taxed = false;
};

exports.default = Task;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elBtnPrint = exports.elBtnInvoice = exports.elBtnAddTask = exports.elBtnDelTask = exports.elInputPrecio = exports.elSelectTaxes = exports.elInputCantidad = exports.elInputTarea = exports.elMain = undefined;
exports.printTask = printTask;
exports.printTotals = printTotals;

var _html = require('../model/html');

var _html2 = _interopRequireDefault(_html);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// IMPRIMIR DATOS EN EL DOM
var elMain = exports.elMain = document.querySelector('.invoiceApp');
var elInputTarea = exports.elInputTarea = document.querySelector('.tarea');
var elInputCantidad = exports.elInputCantidad = document.querySelector('.cantidad');
var elSelectTaxes = exports.elSelectTaxes = document.getElementsByTagName('option');
var elInputPrecio = exports.elInputPrecio = document.querySelector('.precio');
var elBtnDelTask = exports.elBtnDelTask = document.querySelector('.btn-del');
var elBtnAddTask = exports.elBtnAddTask = document.querySelector('.btn-add');
var elBtnInvoice = exports.elBtnInvoice = document.querySelector('.btn-invoice');
var elBtnPrint = exports.elBtnPrint = document.querySelector('.btn-print');

function printTask() {
  var baseImp = elInputPrecio.value * elInputCantidad.value;
  var div = new _html2.default();
  var content = '\n    <p>' + elInputTarea.value + '</p>\n    <p>' + elInputCantidad.value + ' horas</p>\n    <p>x</p>\n    <p>' + elInputPrecio.value + '€</p>\n    <p>=</p>\n    <p data-valor="' + baseImp + '">' + baseImp + '€</p>\n  ';
  var divC = div.createEl('invoice__row', content);
  elMain.appendChild(divC);
}

function printTotals(total, impuestos) {
  var div = new _html2.default();
  var content = '\n    <div>\n      21% IVA - 15% IRPF: ' + parseInt(impuestos) + '€\n    </div>\n    <div>\n      <p>TOTAL:</p>\n      <h1>' + parseInt(total) + ' €</h1>\n    </div>\n  ';
  var divC = div.createEl('invoice__totals', content);

  var small = new _html2.default();
  var contentS = '\n  <small>Numero de cuenta: 79382745 932847592 357</small>\n  ';
  var smallC = small.createEl('invoice__bank', contentS);

  divC.appendChild(smallC);
  elMain.appendChild(divC);
}

},{"../model/html":2}]},{},[1]);
