function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText)
  };
  xhr.open("GET", url, true);
  xhr.send();
}

export function renderSiteInfo(url, callback) {
  getJSON(url, site => callback(JSON.parse(site)));
}

// var xhr = new XMLHttpRequest();
// xhr.open('GET', '/user/1', true);
// xhr.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     var user = JSON.parse(xhr.responseText);
//   }
// };
// xhr.send();
