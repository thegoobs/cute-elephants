// This is where it all goes :)
var json;
var ctr = 0;
var MAX_QUERIES = 100;
function loadImage() {
  ctr = ctr + 1;
  if (ctr > MAX_QUERIES) {
    ctr = 0;
    loadFlickr();
    return;
  }
  
  $(".button").addClass("is-loading");
  var cnt = Math.floor(Math.random() * json.photos.photo.length);
  $.each(json.photos.photo, function(i, item) {
    if (i == cnt) {
      var url = "https://farm" + item.farm + ".staticflickr.com/" + item.server + "/" + item.id + "_" + item.secret + ".jpg";
      $("#image").attr("src", url);
      $(".button").removeClass("is-loading");
    }//if
  });
};

function jsonFlickrApi(results) {
  json = results;
  loadImage();  
};

var API_key = "aaf4355f7bfacc29278caf8917a65363";
// function jsonFlickrFeed(json) {
  
//   $.each(json.items, function(i, item) {
//     $("<img />").attr("src", item.media.m).appendTo("#images");
//   });
// };

function loadFlickr() {
  $.ajax({
    url: 'https://api.flickr.com/services/rest/',
    dataType: 'jsonp', 
    data: {
      'method': 'flickr.photos.search',
      'api_key': API_key,
      'tags': 'elephant',
      'text': 'elephant, cute',
      'sort': 'relevance',
      'content_type': 1,
      'format': 'json',
      'page': 1,
      'per_page': 500
    }
  });
  
  $(".button").addClass("is-loading");
};

window.onload = loadFlickr;