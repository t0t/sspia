(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _xhr = require('./xhr');

require('./jsons');

},{"./jsons":2,"./xhr":3}],2:[function(require,module,exports){
'use strict';

var _xhr = require('./xhr');

var getSkills = Object.create(_xhr.App);
getSkills.xhr('../../data/content/skills.json', function (data, xmlhttp) {
  var skills = JSON.parse(data);
  // console.log( skills[0].workflow );
  console.log(skills[0].tools);
}, function (error, xmlhttp) {
  console.log('Errorrr', error);
});

var getWorks = Object.create(_xhr.App);
getWorks.xhr('../../data/content/works.json', function (data, xmlhttp) {
  var works = JSON.parse(data);
  console.log(works[0]);
}, function (error, xmlhttp) {
  console.log('Error', error);
});

var getBrand = Object.create(_xhr.App);
getBrand.xhr('../../data/content/brand.json', function (data, xmlhttp) {
  var brand = JSON.parse(data);
  console.log(brand[0]);
}, function (error, xmlhttp) {
  console.log('Error', error);
});

var getSocial = Object.create(_xhr.App);
getSocial.xhr('../../data/content/social.json', function (data, xmlhttp) {
  var social = JSON.parse(data);
  console.log(social[0]);
}, function (error, xmlhttp) {
  console.log('Error', error);
});

},{"./xhr":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//www.youtube.com/watch?v=NLzvBcE_nVU
var App = exports.App = {

  xhr: function xhr(url, callback, error) {
    var xmlhttp = new window.XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          if (typeof callback === 'function') {
            callback(xmlhttp.responseText, xmlhttp);
          }
        } else {
          if (typeof error === 'function') {
            error(xmlhttp.statusText, xmlhttp);
          }
        }
      }
    };
    xmlhttp.open('GET', url, true);
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

},{}]},{},[1]);
