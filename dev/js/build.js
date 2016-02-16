(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _xhr = require('./xhr');

var _invoice = require('./components/invoice');

(0, _xhr.renderSiteInfo)("data/views/site.json", function (site) {
  console.log(site);
  var siteInfo = '\n  <div class="site-info">\n    <em>' + site[0].description + '</em>\n    <p>' + site[0].name + '</p>\n    <p>' + site[0].url + '</p>\n    <p></p>\n  </div>\n  ';
  document.querySelector('.container h2').innerHTML = siteInfo;
});

console.log((0, _invoice.sumTwo)(1000, 90, 6));

},{"./components/invoice":2,"./xhr":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printToday = printToday;
exports.sumTwo = sumTwo;

// Imprime el dia en que estamos
function printToday() {
  var now = new Date();
  var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
  var date = (now.getDate() < 10 ? "0" : "") + now.getDate();
  function fourdigits(number) {
    return number < 1000 ? number + 1900 : number;
  }
  var today = months[now.getMonth()] + " " + date + ", " + fourdigits(now.getYear());
  return today;
}
console.log(printToday());

// let irpf = 15;
// let iva = 21;
// let baseImp = 0;
// let total = 0;
// let output = `Impuesto: ${ (irpf * 15) / 100 }`;

function sumTwo(a, b, c) {
  return a + b + c;
}

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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderSiteInfo = renderSiteInfo;
function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText);
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function renderSiteInfo(url, callback) {
  getJSON(url, function (site) {
    return callback(JSON.parse(site));
  });
}

// var xhr = new XMLHttpRequest();
// xhr.open('GET', '/user/1', true);
// xhr.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     var user = JSON.parse(xhr.responseText);
//   }
// };
// xhr.send();

},{}]},{},[1]);
