"use strict";

// Funcion anónima para no contaminar el proyecto
var app = {};

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
'use strict';

// Imprime el dia en que estamos
function print_today() {
  var now = new Date();
  var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
  var date = (now.getDate() < 10 ? "0" : "") + now.getDate();
  function fourdigits(number) {
    return number < 1000 ? number + 1900 : number;
  }
  var today = months[now.getMonth()] + " " + date + ", " + fourdigits(now.getYear());
  return today;
}
console.log(print_today());

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
"use strict";

(function () {
  // This JavaScript program reads "posts.json" and renders the data to the page. Stores the cached partial HTML pages. Keys correspond to fragment identifiers. Values are the text content of each loaded partial HTML file.
  var partialsCache = {};
  // Encapsulates an HTTP GET request using XMLHttpRequest.
  // Fetches the file at the given path, then calls the callback with the text content of the file.
  function fetchFile(path, callback) {
    // Create a new AJAX request for fetching the partial HTML file.
    var request = new XMLHttpRequest();
    // Call the callback with the content loaded from the file.
    request.onload = function () {
      callback(request.responseText);
      console.log('fragmentId');
    };
    // Fetch the partial HTML file for the given fragment id.
    request.open("GET", path);
    request.send(null);
  }

  // Gets the appropriate content for the given fragment identifier. This function implements a simple cache.
  function getContent(fragmentId, callback) {
    // If the page has been fetched before,
    if (partialsCache[fragmentId]) {
      // pass the previously fetched content to the callback.
      callback(partialsCache[fragmentId]);
    } else {
      // If the page has not been fetched before, fetch it.
      fetchFile(fragmentId + ".html", function (content) {
        // Store the fetched content in the cache.
        partialsCache[fragmentId] = content;
        // Pass the newly fetched content to the callback.
        callback(content);
      });
    }
  }

  // Sets the "active" class on the active navigation link.
  function setActiveLink(fragmentId) {
    var navbarDiv = document.getElementById("navbar"),
        links = navbarDiv.children,
        i,
        link,
        pageName;
    for (i = 0; i < links.length; i++) {
      link = links[i];
      pageName = link.getAttribute("href").substr(1);
      if (pageName === fragmentId) {
        link.setAttribute("class", "active");
      } else {
        link.removeAttribute("class");
      }
    }
  }

  // Updates dynamic content based on the fragment identifier.
  function navigate() {
    // Get a reference to the "content" div.
    var containerDiv = document.getElementById("mainContent"),

    // Isolate the fragment identifier using substr.
    // This gets rid of the "#" character.
    fragmentId = location.hash.substr(1);
    // Set the "mainContent" div innerHTML based on the fragment identifier.
    getContent(fragmentId, function (content) {
      containerDiv.innerHTML = content;
    });
    // Toggle the "active" class on the link currently navigated to.
    setActiveLink(fragmentId);
  }
  // If no fragment identifier is provided,
  if (!location.hash) {
    // default to #home.
    location.hash = "#home";
  }
  // Navigate once to the initial fragment identifier.
  navigate();
  // Navigate whenever the fragment identifier value changes.
  window.addEventListener("hashchange", navigate);
})();
"use strict";

// RENDER POSTS
(function () {

  // Adds a DOM structure for each page.
  function renderPages(pages) {
    // Create the DOM element that will contain the pages.
    var containerDiv = document.getElementById("mainContent"),
        pagesDiv = document.createElement("section");
    pagesDiv.setAttribute("id", "pages");
    containerDiv.appendChild(pagesDiv);

    pages.forEach(function (page) {
      // Create the DOM elements.
      var pageDiv = document.createElement("article"),
          pageNameDiv = document.createElement("h2"),
          pageAuthorDiv = document.createElement("small"),
          pageContentDiv = document.createElement("div"),
          pageMainImg = document.createElement("figure");
      // Set the content of each element.´
      pageNameDiv.innerHTML = page.name;
      pageAuthorDiv.innerHTML = page.author;
      pageContentDiv.innerHTML = page.content;
      if (page.image) {
        pageMainImg.innerHTML = "<img src='" + page.image + "'>";
      } else {
        pageMainImg.innerHTML = "(aún no hay foto...)";
      }
      // Set CSS classes on each div so they can be styled.
      pageDiv.setAttribute("class", "page");
      pageNameDiv.setAttribute("class", "page-name");
      pageAuthorDiv.setAttribute("class", "page-author");
      pageContentDiv.setAttribute("class", "page-content");
      pageMainImg.setAttribute("class", "page-main-image");
      // Assemble the page div.
      pageDiv.appendChild(pageNameDiv);
      pageDiv.appendChild(pageAuthorDiv);
      pageDiv.appendChild(pageContentDiv);
      pageDiv.appendChild(pageMainImg);
      // Add the page div to the container for pages.
      pagesDiv.appendChild(pageDiv);
    });
  }

  // Fetches the file "pages.json" and passes the parsed JSON object into the given callback function.
  function getPages(callback) {
    // Fetch the JSON file using XMLHttpRequest.
    var request = new XMLHttpRequest();
    // When the file has loaded,
    request.onload = function () {
      // parse the JSON text into an array of page objects.
      var pages = JSON.parse(request.responseText);
      // Pass the pages array to the callback.
      callback(pages);
    };
    request.open("GET", "data/pages.json", true);
    request.send(null);
  }

  if (location.hash.substr(1) !== "blog") {
    console.log(location.hash.substr(1));
    // The main program, which gets then renders pages.
    getPages(function (pages) {
      renderPages(pages);
    });
  }
})();
"use strict";

// RENDER POSTS
(function () {
  // Adds a DOM structure for each post.
  function renderPosts(posts) {
    // Create the DOM element that will contain the posts.
    var containerDiv = document.getElementById("mainContent"),
        postsDiv = document.createElement("section");
    postsDiv.setAttribute("id", "posts");
    containerDiv.appendChild(postsDiv);

    posts.forEach(function (post) {
      // Create the DOM elements.
      var postDiv = document.createElement("article"),
          postNameDiv = document.createElement("h2"),
          postAuthorDiv = document.createElement("small"),
          postContentDiv = document.createElement("div"),
          postMainImg = document.createElement("figure");
      // Set the content of each element.´
      postNameDiv.innerHTML = post.name;
      postAuthorDiv.innerHTML = post.author;
      postContentDiv.innerHTML = post.content;
      if (post.image) {
        postMainImg.innerHTML = "<img src='" + post.image + "'>";
      } else {
        postMainImg.innerHTML = "(aún no hay foto...)";
      }
      // Set CSS classes on each div so they can be styled.
      postDiv.setAttribute("class", "post");
      postNameDiv.setAttribute("class", "post__name");
      postAuthorDiv.setAttribute("class", "post__author");
      postContentDiv.setAttribute("class", "post__content");
      postMainImg.setAttribute("class", "post__main-image");
      // Assemble the post div.
      postDiv.appendChild(postNameDiv);
      postDiv.appendChild(postAuthorDiv);
      postDiv.appendChild(postContentDiv);
      postDiv.appendChild(postMainImg);
      // Add the post div to the container for posts.
      postsDiv.appendChild(postDiv);
    });
  }

  // Fetches the file "posts.json" and passes the parsed JSON object into the given callback function.
  function getPosts(callback) {
    // Fetch the JSON file using XMLHttpRequest.
    var request = new XMLHttpRequest();
    // When the file has loaded,
    request.onload = function () {
      // parse the JSON text into an array of post objects.
      var posts = JSON.parse(request.responseText);
      // Pass the posts array to the callback.
      callback(posts);
    };
    request.open("GET", "data/posts.json", true);
    request.send(null);
  }

  if (location.hash.substr(1) === "blog") {
    console.log(location.hash.substr(1));
    // The main program, which gets then renders posts.
    getPosts(function (posts) {
      renderPosts(posts);
    });
  }
})();
"use strict";

var READY_STATE_COMPLETE = 4;
var peticion_http;

function inicializa_xhr() {
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  }
}

function cargaContenido(url, metodo, funcion) {
  peticion_http = inicializa_xhr();

  if (peticion_http) {
    peticion_http.onreadystatechange = funcion;
    peticion_http.open(metodo, url, true);
    peticion_http.send(null);
  }
}

function muestraContenido() {
  if (peticion_http.readyState === READY_STATE_COMPLETE) {
    if (peticion_http.status === 200) {
      var brand = JSON.parse(peticion_http.responseText);
      console.log(brand);
    }
  }
}

function descargaJson() {
  cargaContenido("data/views/site.json", "GET", muestraContenido);
}

window.onload = descargaJson;
//# sourceMappingURL=build.js.map