function inicializa_xhr(){return window.XMLHttpRequest?new XMLHttpRequest:void 0}function cargaContenido(t,n,i){peticion_http=inicializa_xhr(),peticion_http&&(peticion_http.onreadystatechange=i,peticion_http.open(n,t,!0),peticion_http.send(null))}function muestraContenido(){if(peticion_http.readyState===READY_STATE_COMPLETE&&200===peticion_http.status){var t=JSON.parse(peticion_http.responseText);console.log(t)}}function descargaJson(){cargaContenido("data/views/site.json","GET",muestraContenido)}var READY_STATE_COMPLETE=4,peticion_http;window.onload=descargaJson;