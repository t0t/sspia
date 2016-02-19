
// let irpf = 15;
// let iva = 21;
// let baseImp = 0;
// let total = 0;
// let output = `Impuesto: ${ (irpf * 15) / 100 }`;



// export function sumTwo(a, b, c) {
//   return a + b + c;
// }

let items = document.querySelectorAll('.items');
console.log( items );
console.log( items[0].children[1].outerHTML );
console.log( items[0].childNodes[1].children );
console.log( items[0].children[0].options );

console.log( items[0].children[1] );

let cantidad = document.querySelector('.cantidad');
cantidad.addEventListener( 'keyup', function (e) {
  e.preventDefault;
  if (e.which === 13) {
    console.log(this.textcontent.value);
  }
});

console.log( cantidad );
console.log( cantidad.attributes );
console.log( cantidad.value.nodeValue ); // 83




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
