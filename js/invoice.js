var Invoice = {

  moneda: '€',

  init: function () {
    Invoice.update();
    Invoice.uiEvent();
    //Invoice.addItem();
  },

  uiEvent: function() {

    $( '#items').on( 'click', '.delete', function( e ) {
      e.preventDefault();
      $( this ).parent().parent().remove();
      Invoice.update();
    });
    $( '#items' ).on( 'change', '.precio,.cantidad,.hayImpuestos', function( e ) {
      Invoice.update();
    });
    $( '#addItemButton' ).on( 'click', function ( e ) {
      e.preventDefault();
      Invoice.addItem();
      Invoice.update();
    });
  },

  update: function () {

    var subtotal = 0,
        impuestosTotal = 0,
        impuestos = {},
        total = 0;

    var itemsDiv = document.querySelectorAll('.itemsDiv');
    for (var i=0; i < itemsDiv.length; i++) {
       var itemsRow = itemsDiv[i];
    }

    $( '#items > div' ).each( function () {
      // Toma el valor de .precio
      var precio = parseFloat( $( '.precio', this ).val() );
      // Toma el valor de .cantidad
      var cantidad = parseInt( $( '.cantidad', this ).val() );
      // Base imponible (sin impuestos)
      var baseImponible = precio * cantidad;
      // Toma el select .hayImpuestos
      var hayImpuestos = document.getElementById('tx');
      // Comprueba si tiene impuestos "si"
      if ( hayImpuestos.options[hayImpuestos.selectedIndex].value === 'si' ) {
        var ivaPercent = 21,
            irpfPercent = 15;
        var ivaEuros = ( baseImponible * ivaPercent ) / 100,
            irpfEuros = ( baseImponible * irpfPercent ) / 100;
        // Calcula IVA - IRPF
        var juntaImpuestos = ivaEuros - irpfEuros;
        // Suma impuestos a base imponible
        var sumaTotal = juntaImpuestos + baseImponible;
        // Si hay impuestos entonces el subtotal añade la base imponible
        subtotal += sumaTotal;
      } else {
        // Si no hay impuestos entonces el subtotal es el mismo que la base imponible
        subtotal += baseImponible;
        $( '#impuestos' ).remove();
      }
      // Pinta el precio del item con dos decimales
      $( '.precio', this ).val( parseFloat( precio ).toFixed( 2 ) );
      // Pinta Base imponible
      $( '.base-imponible', this ).html( 'Base Imponible ' + baseImponible + Invoice.moneda );
    });


    // Imprime el subtotal en el div invoiceSubtotal
    $( '#invoiceSubtotal' ).html( parseFloat( subtotal ).toFixed( 2 ) +' '+ Invoice.moneda );
    // Imprime el impuesto
    $( '#invoiceTax' ).html( parseFloat( impuestosTotal ).toFixed( 2 ) +' '+ Invoice.moneda );
    // Imprime el Total de la FACTURA
    total = parseFloat( subtotal) + parseFloat( impuestosTotal );
    $( '#invoiceTotal' ).html( parseFloat( total ).toFixed( 2 ) );
        
    Invoice.showImpuesto();
    Invoice.displayDelete();

  },

  addItem: function () {
    var html = 'Aqui añadiremos etiquetas html';
    $( '#items' ).append( html );
  },

  displayDelete: function () {
    var deleteCnt = $( '.delete' ).size();
    if ( deleteCnt > 1 ) {
      $( '.delete' ).show();
    } else {
      $( '.delete' ).hide();
    }
  },

  showImpuesto: function () {
    /*var impuestosDiv = document.getElementById('impuestos');
    var li = document.createElement('li');
    console.log(impuestosDiv.appendChild(li));*/
  }

};

// launch
Invoice.init();
