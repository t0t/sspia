(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _invoice = require('./model/invoice');

var _invoice2 = _interopRequireDefault(_invoice);

var _task = require('./model/task');

var _task2 = _interopRequireDefault(_task);

var _xhr = require('./model/xhr');

var _xhr2 = _interopRequireDefault(_xhr);

var _invoice3 = require('./view/invoice');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// get Json data

// import Task from './model/task';
// Import Models
var xhr = new _xhr2.default({ json: true });
xhr.send('data/content/skills.json').then(function (skills) {
  for (var i = 0; i < skills[0].tools.length; i++) {
    skills[0].tools[i];
  }
  // console.log(skills);
});

// Controller Interaccion entre -dom y la logica

var invoice = new _invoice2.default();
var iva = 21;
var irpf = 15;
var total = 0;

function addTask() {
  var taskValue = _invoice3.elInputTarea.value;
  var newTask = new _task2.default(taskValue);
  invoice.addTask(newTask);
  newTask.datos.cantidad = _invoice3.elInputCantidad.value * 1;
  newTask.datos.precio = _invoice3.elInputPrecio.value * 1;
  newTask.datos.baseImp = _invoice3.elInputPrecio.value * _invoice3.elInputCantidad.value;
  total = +newTask.datos.baseImp;
  if (_invoice3.elSelectTaxes[0].selected === true) {}
  (0, _invoice3.printTask)();
  console.log(newTask);
  console.table(newTask.datos);
}

function removeTarea() {
  var rowEl = document.querySelector('.invoice__row');
  var taskList = _invoice3.elMain.children;
  for (var i = 0; i < taskList.length; i++) {
    taskList[i].remove();
  }
  console.log(taskList);
}

// Generate invoice
function printInvoice(e) {
  e.preventDefault;
  console.log(invoice.tasks);
  var value = undefined;
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
_invoice3.elBtnPrint.addEventListener('click', printPdf);
_invoice3.elBtnAddTask.addEventListener('click', addTask);
_invoice3.elBtnDelTask.addEventListener('click', removeTarea);
_invoice3.elBtnInvoice.addEventListener('click', printInvoice);

console.clear();
console.table(invoice.tasks);
console.log(invoice);

},{"./model/invoice":2,"./model/task":3,"./model/xhr":4,"./view/invoice":5}],2:[function(require,module,exports){
"use strict";

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

// MODEL models.js

var Invoice = function () {
  function Invoice() {
    _classCallCheck(this, Invoice);

    this.tasks = [];
    // this.iva = 21;
    // this.irpf = 15;
  }

  _createClass(Invoice, [{
    key: "addTask",
    value: function addTask(task) {
      this.tasks.push(task);
    }
    // removeTask(i){
    //   this.tasks.splice(i,1);
    // }

  }]);

  return Invoice;
}();

exports.default = Invoice;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Tareas

var Task = function Task(name) {
  _classCallCheck(this, Task);

  this.name = name;
  this.datos = {};
};

exports.default = Task;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * XmlHttpRequest for you es6 project. Required features only.
 * Create xhr instance:
 * https://github.com/kysonic/xhr
 * var xhr = new Xhr(opts);
 * xhr.post('http://url.com',{data:123}).then(function(response){...},function(err){...});
 * Options:
 *    withCredentials - Adds cookie and auth data to request. CORS fetures.
 *    contentType - content type header,
 *    json - Handle response as JSON.
 */

var Xhr = function () {
    function Xhr(opts) {
        _classCallCheck(this, Xhr);

        this.events = {
            READY_STATE_CHANGE: 'readystatechange',
            LOAD_START: 'loadstart',
            PROGRESS: 'progress',
            ABORT: 'abort',
            ERROR: 'error',
            LOAD: 'load',
            TIMEOUT: 'timeout',
            LOAD_END: 'loadend'
        };
        this.opts = opts;
    }

    _createClass(Xhr, [{
        key: 'send',
        value: function send(url, method, data) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                var m = method || 'GET';
                xhr.open(m, url);
                // Set headers
                xhr.setRequestHeader('Content-Type', _this.opts.contentType || 'application/json');
                // Custom
                if (_this.opts.headers) {
                    for (var name in _this.opts.headers) {
                        var value = _this.opts.headers[name];
                        xhr.setRequestHeader(name, value);
                    }
                }
                // Transmit credentials
                if (_this.opts.withCredentials) xhr.withCredentials = true;
                data = data ? _this.parseData(data) : null;

                xhr.addEventListener(_this.events.LOAD, function () {
                    // ==0 for files.
                    if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 0) {
                        var responseText = '';
                        if (xhr.responseText) {
                            responseText = _this.opts.json ? JSON.parse(xhr.responseText) : xhr.responseText;
                        }
                        resolve(responseText, xhr);
                    } else {
                        reject(_this.reject(xhr));
                    }
                });
                // Handle basic events
                xhr.addEventListener(_this.events.ABORT, function () {
                    return reject(_this.reject(xhr));
                });
                xhr.addEventListener(_this.events.ERROR, function () {
                    return reject(_this.reject(xhr));
                });
                xhr.addEventListener(_this.events.TIMEOUT, function () {
                    return reject(_this.reject(xhr));
                });

                data ? xhr.send(data) : xhr.send();
            });
        }
    }, {
        key: 'reject',
        value: function reject(xhr) {
            var responseText = '';
            if (xhr.responseText) {
                responseText = this.opts.json ? JSON.parse(xhr.responseText) : xhr.responseText;
            }
            return responseText;
        }
    }, {
        key: 'parseData',
        value: function parseData(data) {
            // JSON
            if (this.contentType == 'application/json') return JSON.stringify(data);
            // Query string
            var query = [];
            if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)).toLowerCase() == 'string' || (typeof data === 'undefined' ? 'undefined' : _typeof(data)).toLowerCase() == 'number') {
                query.push(data);
            } else {
                for (var key in data) {
                    query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
                }
            }

            return query.join('&');
        }
    }, {
        key: 'get',
        value: function get(url) {
            return this.send(url);
        }
    }, {
        key: 'post',
        value: function post(url, data) {
            return this.send(url, 'POST', data);
        }
    }, {
        key: 'delete',
        value: function _delete(url) {
            return this.send(url, 'DELETE');
        }
    }, {
        key: 'put',
        value: function put(url, data) {
            return this.send(url, 'PUT', data);
        }
    }]);

    return Xhr;
}();

exports.default = Xhr;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printTask = printTask;

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
  var outPut = document.createElement('div');
  outPut.className = 'invoice__row';
  outPut.innerHTML = '\n    <p>' + elInputTarea.value + '</p>\n    <p>' + elInputCantidad.value + ' horas</p>\n    <p>x</p>\n    <p>' + elInputPrecio.value + '€</p>\n    <p>=</p>\n    <p data-valor="' + baseImp + '">' + baseImp + '€</p>\n  ';
  elMain.appendChild(outPut);
  // removeTask();
}

},{}]},{},[1]);
