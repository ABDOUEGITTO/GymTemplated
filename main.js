 // Initialize and add the map
 function initMap() {
    // The location of Uluru
    const italy = { lat:41.871941, lng: 12.567380};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: italy,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: italy,
      map: map,
    });
  }