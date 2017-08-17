"""
Used to adjust the parameters for the USC Map so the map can be rendered in an iframe. 

"""

$( document ).ready(function() {
  if (window.location.search) {

    var urlParams = new URLSearchParams(window.location.search);
    var searchString = window.location.search;
    //Check for Id param
  if (!urlParams.get('id')){

      //Set id to our map
      var id = '744';

      //prepend id param to the front of the search string
      searchString = '?id='+id+'&'+searchString.slice(1,searchString.length);
      console.log(searchString);

    }

    var map_frame = document.getElementById('map_frame');
    //append url parameter to iframe
    var src = 'https://www.myatlascms.com/map/';
    src += searchString + window.location.hash;
    $('iframe#map_frame').attr( "src", src );
  }
});
