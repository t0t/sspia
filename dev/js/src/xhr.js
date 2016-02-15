function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText)
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function getUsefulContents(url, callback) {
  getJSON(url, site => callback(JSON.parse(site)));
}


getUsefulContents("data/views/site.json", site => {
  console.log(site);
  // var site = data;
  console.log(site[0].description);
  console.log(site[0].name);
  console.log(site[0].url);

});
