function initialize(){
    var mapOptions = {
        // Zoom of map on start
        zoom: 13,
        // Coordinates of map
        center: new google.maps.LatLng(13.0843 , 80.2705),
        // Type of map (ROADMAP, SATELLITE, HYBRID, TERRAIN)
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        //Minimum zoom level
        minZoom: 1,
        // Maximum zoom level
        maxZoom: 18,
    };

    // Create the map object
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // create the map info
    var infoWindow = new google.maps.InfoWindow();
    
    // Create a marker for each location
   var marker = new google.maps.Marker({
    //Cordinates for chennai
    position: new google.maps.LatLng(13.0843 , 80.2705),
    map: map,
    title: 'Chennai',
    animation: google.maps.Animation.DROP,
    // Icon for the marker
    icon: 'https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png'
   });
   
   // Add click event listener to the marker
   marker.addListener('click', function() {
    infoWindow.setContent('Chennai');
    infoWindow.open(map, marker);
   });

   //Adjust map center when the window is resized
   google.maps.event.addDomListener(window,'resize', function() {
    var center = map.getCenter();
    google.maps.event.trigger(map,'resize');
    map.setCenter(center);
   });
}
// Initialize the map when window loading finished
 google.maps.event.addDomListener(window, 'load', initialize);