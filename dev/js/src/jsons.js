
import { App } from './xhr';


let getSkills = Object.create( App );
getSkills.xhr( '../../data/content/skills.json', function ( data, xmlhttp ) {
  let skills = JSON.parse(data);
  // console.log( skills[0].workflow );
  console.log( skills[0].tools );
}, function ( error, xmlhttp ) {
  console.log( 'Errorrr', error );
});

let getWorks = Object.create( App );
getWorks.xhr( '../../data/content/works.json', function ( data, xmlhttp ) {
  let works = JSON.parse(data);
  console.log( works[0] );
}, function ( error, xmlhttp ) {
  console.log( 'Error', error );
});

let getBrand = Object.create( App );
getBrand.xhr( '../../data/content/brand.json', function ( data, xmlhttp ) {
  let brand = JSON.parse(data);
  console.log( brand[0] );
}, function ( error, xmlhttp ) {
  console.log( 'Error', error );
});

let getSocial = Object.create( App );
getSocial.xhr( '../../data/content/social.json', function ( data, xmlhttp ) {
  let social = JSON.parse(data);
  console.log( social[0] );
}, function ( error, xmlhttp ) {
  console.log( 'Error', error );
});
