```
Location: /visit/map
Purpose: Used to adjust the parameters for the USC Map so the map can be rendered in an iframe.

```

$(document).ready(function() {
  //Check to see if there is a query string or  hash string
  if (window.location.search || window.location.hash) {

    var searchString = window.location.search;
    //Check for Id param
    if (getUrlParameter('id') === '') {

      //Set id to our map
      var id = '744';

      //prepend id param to the front of the search string
      searchString = '?id=' + id + '&' + searchString.slice(1, searchString.length);
      console.log(searchString);

    }

    var map_frame = document.getElementById('map_frame');
    //append url parameter to iframe
    var src = 'https://www.myatlascms.com/map/';
    src += searchString + window.location.hash;
    $('iframe#map_frame').attr("src", src);
  }
});

//Parse query string to get param name.
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
