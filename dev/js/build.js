(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require("./components/invoice");

var _xhr = require("./xhr");

var _xhr2 = _interopRequireDefault(_xhr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Template = function () {
  function Template(clase) {
    _classCallCheck(this, Template);

    this.clase = clase;
    this.list = [];
    this.elements = {
      div: "div",
      p: "p"
    };
  }

  _createClass(Template, [{
    key: "addItem",
    value: function addItem(listItem) {
      this.list.push(listItem);
    }
  }]);

  return Template;
}();

var tpl = new Template('tpl');

tpl.addItem('elements');
tpl.addItem('edcrece');
tpl.addItem('kjlkjlkjlkjlkj');

console.log(tpl);
console.log(tpl.list);
console.log(tpl.elements.div);

// console.table(list());
//
// var divEl = document.addItemElement( 'div' );
//
// divEl.className = 'div_el';
//
//
// console.table( template );
// console.table( template.addItemElements( 'li' ) );

// Invoice mini app


// Objeto App

var xhr = new _xhr2.default({ json: true });

// Skills
xhr.send('../../data/content/skills.json').then(function (skills) {

  for (var i = 0; i < skills[0].tools.length; i++) {
    skills[0].tools[i];
  }
  // DOM
  var mainDiv = document.getElementById('main');
  // mainDiv.innerHTML = templateSkills;
  console.log(mainDiv);
});

// Works
xhr.send('../../data/content/works.json').then(function (works) {

  console.log(works);
  console.log(works[0].frontend);
}, function (err) {
  console.log('Joder error');
});

},{"./components/invoice":2,"./xhr":3}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// MODEL models.js

var Invoice = function () {
  function Invoice(name) {
    _classCallCheck(this, Invoice);

    this.name = name;
    this.tasks = [];
  }

  _createClass(Invoice, [{
    key: 'getTask',
    value: function getTask() {
      var elTask = document.querySelector('.task');
      var task = elTask.value;
      return task;
    }
  }, {
    key: 'addTask',
    value: function addTask(task) {
      this.tasks.push(task);
    }
  }, {
    key: 'delTask',
    value: function delTask(task) {
      this.tasks.push(task);
    }
  }, {
    key: 'getCantidad',
    value: function getCantidad() {
      var elCantidad = document.querySelector('.cantidad');
      var cantidad = elCantidad.value;
      return cantidad;
    }
  }, {
    key: 'getPrice',
    value: function getPrice() {
      var elPrecio = document.querySelector('.precio');
      var precio = elPrecio.value;
      return precio;
    }
  }, {
    key: 'calcIva',
    value: function calcIva() {
      var iva = this.calcBaseImp() * 21 / 100;
      return iva; // cantidad que se suma al imponible
    }
  }, {
    key: 'calcIrpf',
    value: function calcIrpf() {
      var irpf = this.calcBaseImp() * 15 / 100;
      return irpf; // cantidad que se resta al iva
    }
  }, {
    key: 'calcTaxes',
    value: function calcTaxes() {
      var taxed = document.querySelector('.hayImpuestos').children;
      var taxes = 0;
      if (taxed[0].selected === false) {
        taxes = this.calcIva() - this.calcIrpf();
      }
      return taxes; // si es true: cantidad a sumar a la vase imponible
    }
  }, {
    key: 'calcBaseImp',
    value: function calcBaseImp() {
      var baseImp = this.getCantidad() * this.getPrice();
      return baseImp;
    }
  }, {
    key: 'calcTotal',
    value: function calcTotal() {
      var total = this.calcBaseImp() + this.calcTaxes();
      return total;
    }
  }]);

  return Invoice;
}();

// CONTROLLER controllers.js

// DOM Elements


var elItems = document.querySelector('.items'),
    elBaseImp = document.querySelector('.base_imp'),
    elIva = document.querySelector('.iva'),
    elIrpf = document.querySelector('.irpf'),
    elTaxTotal = document.querySelector('.tax_total'),
    elTotal = document.querySelector('.total'),
    elTaskRow = document.querySelector('.invoice__row'),
    elBtnAddTask = document.querySelector('.btn-add'),
    elBtnDelTask = document.querySelector('.btn-delete'),
    elBtnInvoice = document.querySelector('.btn-invoice');

var factura = new Invoice();

// Generate invoice
function printInvoice(e) {
  e.preventDefault;
  // Pinta datos en el DOM
  elIva.value = factura.calcIva();
  elIrpf.value = factura.calcIrpf();
  elTaxTotal.value = factura.calcTaxes();
  elBaseImp.value = factura.calcBaseImp();
  elTotal.value = factura.calcTotal();
  // console.log( 'Tarea: ' + factura.getTask());
  // console.log( 'Cantidad: ' + factura.getCantidad());
  // console.log( 'Precio: ' + factura.getPrice());
}

// Print new task
function addTask(e) {
  e.preventDefault;
  factura.addTask(factura.getTask());
  console.log(factura.tasks);
  console.log(elTaskRow);
}

// Delete Task
function delTask(e) {
  e.preventDefault;
  factura.delTask(factura.getTask());
}

elBtnInvoice.addEventListener('click', printInvoice);
elBtnAddTask.addEventListener('click', addTask);
elBtnDelTask.addEventListener('click', delTask);

},{}],3:[function(require,module,exports){
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

},{}]},{},[1]);
