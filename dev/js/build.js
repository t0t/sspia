(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _invoice = require('./components/invoice');

console.log((0, _invoice.sumTwo)(1000, 90));
// Importa el componente invoice
// import { funcion1, funcion2 } from "components/xhr.js";
// import { xx, cc } from "components/invoice.js";
// import { ss, funcionv } from "components/navigation.js";

// let irpf = 15;
// let iva = 21;
// let baseImp = 0;
// let total = 0;
// let output = `Impuesto: ${ (irpf * 15) / 100 }`;
//
// function sumTwo(a, b) {
//   return a + b;
// }
//

console.log('ssjsssdddddds');

// Importar Componente invoice
// import printToday('components/invoice.js');
// printToday();

// var _invoice = require('./components/invoice.js');
//
// import { _invoice.another } from 'invoice.js';
//
// console.log(_invoice.another);

// Importar Modulo XHR
// import { getUsefulContents } from "xhr.js";
// getUsefulContents("data/views/site.json", data => {
//   console.log(data.description);
// });

},{"./components/invoice":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// Imprime el dia en que estamos
// export function printToday() {
//   var now = new Date();
//   var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
//   var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
//   function fourdigits(number) {
//     return (number < 1000) ? number + 1900 : number;
//   }
//   var today =  months[now.getMonth()] + " " + date + ", " + (fourdigits(now.getYear()));
//   return today;
// }
// console.log( printToday() );

function sumTwo(a, b) {
  return a + b;
}

exports.sumTwo = sumTwo;

// module.exports = function (name, greeting = 'Hola') {
//   console.log(`$(greeting) $(name)`);
// };

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

},{}]},{},[1]);
