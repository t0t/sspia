//www.youtube.com/watch?v=NLzvBcE_nVU
export let App = {

    xhr: function( url, callback, error ) {
      let xmlhttp = new window.XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4) {
          if (xmlhttp.status === 200) {
            if ( typeof callback === 'function' ) {
              callback( xmlhttp.responseText, xmlhttp );
            }
          } else {
            if ( typeof error === 'function' ) {
              error( xmlhttp.statusText, xmlhttp );
            }
          }
        }
      };
      xmlhttp.open( 'GET', url, true );
      xmlhttp.send();
    }
};






// realiza peticion ajaxkb
// export function getJSON(url, callback) {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     callback(this.responseText)
//   };
//   xhr.open("GET", url, true);
//   xhr.send();
// }

// realiza peticion ajaxkb
// function getJSON( url, callback ) {
//   let xhr = new XMLHttpRequest();
//   xhr.onload = function () {
//     callback( this.responseText );
//   };
//   xhr.open( "GET", url, true );
//   xhr.send();
// }
//
// export function getJsonContents( url, callback ) {
//   getJSON( url, skills => callback( JSON.parse( skills )));
// }

// let getWorks = new XMLHttpRequest;
// getWorks.onreadystatechange = function () {
//   if ( getWorks.readyState === 4 ) {
//     let works = JSON.parse( getWorks.responseText );
//     // document.getElementById( 'main' ).innerHTML = JSON.parse( getWorks.responseText );
//     console.log( works[0].frontend[0].client );
//   }
// }
// getWorks.open( 'GET', '../../data/content/works.json' );
// getWorks.send();




  // console.log(getSkills);
