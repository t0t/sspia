
var READY_STATE_COMPLETE=4;
var peticion_http;

function inicializa_xhr() {
  if(window.XMLHttpRequest) {
    return new XMLHttpRequest();
  }
}

function cargaContenido(url, metodo, funcion) {
  peticion_http = inicializa_xhr();

  if(peticion_http) {
    peticion_http.onreadystatechange = funcion;
    peticion_http.open(metodo, url, true);
    peticion_http.send(null);
  }
}

function muestraContenido() {
  if(peticion_http.readyState === READY_STATE_COMPLETE) {
    if(peticion_http.status === 200) {
      var brand = JSON.parse( peticion_http.responseText);
      console.log(brand);
    }
  }
}

function descargaJson() {
  cargaContenido("data/views/site.json", "GET", muestraContenido);
}

window.onload = descargaJson;
