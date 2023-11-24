function initMap() {
    // Create a map centered at (0, 0)
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 0, lng: 0},
      zoom: 3
    });

    // Update the ISS location every 5 seconds
    setInterval(function() {
      // Fetch ISS position from the API
      fetch('https://api.wheretheiss.at/v1/satellites/25544')
        .then(response => response.json())
        .then(data => {
          // Update the map marker position
          var issMarker = new google.maps.Marker({
            position: {lat: data.latitude, lng: data.longitude},
            map: map,
            title: 'ISS'
          });

          // Center the map on the ISS position
          map.setCenter({lat: data.latitude, lng: data.longitude});
        })
        .catch(error => console.error('Error fetching ISS location:', error));
    }, 5000); // Update every 5 seconds
  }