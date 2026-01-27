// Wait for the page to load before initializing the map
document.addEventListener('DOMContentLoaded', function() {
    // Initialize map with a default location (London)
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Create a marker with default location
    const marker = L.marker([51.5, -0.09]).addTo(map);

    // Bind popup to marker - this will show when clicked
    marker.bindPopup('You are here');

    // Get user's current location
    navigator.geolocation.getCurrentPosition(
        function (pos) {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;

            // Update marker position and map view to user's location
            marker.setLatLng([lat, lon]).update();
            map.setView([lat, lon], 13);

            // Update popup text
            marker.bindPopup('You are here');
            
            // Update status
            document.getElementById('status').textContent = 'Location found!';
        },
        function (error) {
            // Handle geolocation errors
            document.getElementById('status').textContent = 'Error getting location';
            document.getElementById('error').innerHTML = 
                `<p>Error: ${error.message}</p>`;
        }
    );

    // Add click event to marker to ensure popup opens
    marker.on('click', function() {
        marker.openPopup();
    });
});