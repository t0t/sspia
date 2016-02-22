



class Template {

  constructor( clase ) {
    this.clase = clase;
    this.list = [];
    this.elements = {
      div: "div",
      p: "p",
    };
  }

  addItem(listItem) {
    this.list.push(listItem);
  }

}

let tpl = new Template( 'tpl' );

tpl.addItem( 'elements' );
tpl.addItem( 'edcrece' );
tpl.addItem( 'kjlkjlkjlkjlkj' );


console.log( tpl );
console.log( tpl.list );
console.log( tpl.elements.div );

// console.table(list());
//
// var divEl = document.addItemElement( 'div' );
//
// divEl.className = 'div_el';
//
//
// console.table( template );
// console.table( template.addItemElements( 'li' ) );













// Invoice mini app
import './components/invoice';

// Objeto App
import Xhr from './xhr';
var xhr = new Xhr( { json: true } );

// Skills
xhr.send( '../../data/content/skills.json' )
.then( function (skills) {

  for (var i = 0; i < skills[0].tools.length; i++) {
    skills[0].tools[i];
  }
  // DOM
  let mainDiv = document.getElementById('main');
  // mainDiv.innerHTML = templateSkills;
  console.log(mainDiv);

});

// Works
xhr.send( '../../data/content/works.json' )
.then( function(works) {

  console.log(works);
  console.log(works[0].frontend);

},function(err){ console.log('Joder error'); });
