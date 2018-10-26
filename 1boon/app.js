var url = "https://1boon.kakao.com/ch/enter.json?pagesize=10&page=";

var info = document.getElementById('list');
var str = '';

var pageNum = 1;

var btn = document.getElementById('btnMore');

var loading = document.getElementById('loading');

getUrlData(url, func);

function func (result) {
    for(var i =0; i<result.data.length; i++) {
        var title = result.data[i].title;
        var coverImage  = result.data[i].coverImage;
        var path = result.data[i].path;
        var totalView = result.data[i].totalView;            
        str +='<div class="box">' +
            `<a href = "https://1boon.kakao.com/${path}">
            <img src="${coverImage}">
            <div>${title}</div>
            <div>${totalView}</div>
            </a>`
    }
    loading.style.display="";
    list.innerHTML = str;
}

function getUrlData(url, callback) {
    fetch(url)
      .then(function(response) {
        response.json().then(function(data) {
          callback(data);
        });
      })
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
  }

btn.addEventListener ('click', function() {
    pageNum += 1;
    getJSON(url + pageNum ,func );
});
function init() {
    getJSON(url + pageNum, func);
}

document.body.onload = init;
