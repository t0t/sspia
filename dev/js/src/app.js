

import { renderSiteInfo } from './xhr';
renderSiteInfo("data/views/site.json", site => {
  console.log(site);
  var siteInfo = `
  <div class="site-info">
    <em>${site[0].description}</em>
    <p>${site[0].name}</p>
    <p>${site[0].url}</p>
    <p></p>
  </div>
  `;
  document.querySelector('.container h2').innerHTML = siteInfo;
});


import { sumTwo } from './components/invoice';
console.log( sumTwo(1000, 90, 6));
