
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
