(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./components/invoice');

var _xhr = require('./xhr');

var _xhr2 = _interopRequireDefault(_xhr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Invoice mini app

var xhr = new _xhr2.default({ json: true });

// Skills


// Objeto App
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

// let irpf = 15;
// let iva = 21;
// let baseImp = 0;
// let total = 0;
// let output = `Impuesto: ${ (irpf * 15) / 100 }`;

// export function sumTwo(a, b, c) {
//   return a + b + c;
// }

var items = document.querySelectorAll('.items');
console.log(items);
console.log(items[0].children[1].outerHTML);
console.log(items[0].childNodes[1].children);
console.log(items[0].children[0].options);

console.log(items[0].children[1]);

var cantidad = document.querySelector('.cantidad');
cantidad.addEventListener('keyup', function (e) {
  e.preventDefault;
  if (e.which === 13) {
    console.log(this.textcontent.value);
  }
});

console.log(cantidad);
console.log(cantidad.attributes);
console.log(cantidad.value.nodeValue); // 83

// var Invoice = {
//
//   moneda: '€',
//
//   init: function () {
//     Invoice.update();
//     Invoice.uiEvent();
//     //Invoice.addItem();
//   },
//
//   uiEvent: function() {
//
//     var items = document.getElementById('items');
//     items.addEventListener('click', function( e ) {
//       e.preventDefault();
//       console.log('oooooo');
//       Invoice.update();
//     });
//
//   },
//
//   update: function () {
//
//     var subtotal = 0,
//         impuestosTotal = 0,
//         total = 0;
//
//     var itemsDiv = document.querySelectorAll('.itemsDiv');
//     for (var i=0; i < itemsDiv.length; i++) {
//       // Toma el valor de .precio
//       var precio = document.querySelector('.precio');
//       // Toma el valor de .cantidad
//       var cantidad = document.querySelector('.cantidad');
//       // Base imponible (sin impuestos)
//       var baseImponible = precio * cantidad;
//       // Toma el select .hayImpuestos
//       var hayImpuestos = document.getElementById('tx');
//       // Comprueba si tiene impuestos "si"
//       if ( hayImpuestos.options[hayImpuestos.selectedIndex].value === 'si' ) {
//         var ivaPercent = 21,
//             irpfPercent = 15;
//         var ivaEuros = ( baseImponible * ivaPercent ) / 100,
//             irpfEuros = ( baseImponible * irpfPercent ) / 100;
//         // Calcula IVA - IRPF
//         var juntaImpuestos = ivaEuros - irpfEuros;
//         // Suma impuestos a base imponible
//         var sumaTotal = juntaImpuestos + baseImponible;
//         // Si hay impuestos entonces el subtotal añade la base imponible
//         subtotal += sumaTotal;
//         console.log('xxxxx');
//       } else {
//         // Si no hay impuestos entonces el subtotal es el mismo que la base imponible
//         subtotal += baseImponible;
//         // $( '#impuestos' ).remove();
//       }
//     }
//
//
//     // Imprime el subtotal en el div invoiceSubtotal
//     document.querySelector('#invoiceSubtotal');
//     // Imprime el impuesto
//     document.querySelector('#invoiceTax');
//     // Imprime el Total de la FACTURA
//     total = parseFloat( subtotal) + parseFloat( impuestosTotal );
//     document.querySelector('#invoiceTax');
//
//     Invoice.showImpuesto();
//     Invoice.displayDelete();
//
//   },
//
//   addItem: function () {
//     // var html = 'Aqui añadiremos etiquetas html';
//     document.querySelector('#items');
//   },
//
//   displayDelete: function () {
//   },
//
//   showImpuesto: function () {
//     /*var impuestosDiv = document.getElementById('impuestos');
//     var li = document.createElement('li');
//     console.log(impuestosDiv.appendChild(li));*/
//   }
//
// };
//
// // launch
// Invoice.init();

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
