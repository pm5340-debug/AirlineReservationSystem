document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('flightSearchForm');
    const flightList = document.getElementById('flight-list');

    // Sample "fake" flight data
    const mockFlights = [
        { id: 'FL101', airline: 'Air Demo', departure: '08:00', arrival: '11:30', duration: '3h 30m', price: 250 },
        { id: 'FL102', airline: 'TravelJet', departure: '12:45', arrival: '16:00', duration: '3h 15m', price: 320 },
        { id: 'FL103', airline: 'GlobalWings', departure: '19:10', arrival: '22:40', duration: '3h 30m', price: 199 }
    ];

    // Function to render the flights
    function renderFlights(flights) {
        flightList.innerHTML = ''; // Clear previous results

        if (flights.length === 0) {
            flightList.innerHTML = '<p>No flights found for your search criteria. Try a different date.</p>';
            return;
        }

        flights.forEach(flight => {
            const flightCard = document.createElement('div');
            flightCard.classList.add('flight-card');
            
            // Note: In a real app, origin/destination would come from the form input
            const origin = document.getElementById('origin').value.toUpperCase() || 'JFK'; 
            const destination = document.getElementById('destination').value.toUpperCase() || 'LAX';

            flightCard.innerHTML = `
                <div class="flight-info">
                    <h3>${flight.airline} (${flight.id})</h3>
                    <div class="flight-route">
                        <strong>${origin}</strong> ${flight.departure} &rarr; <strong>${destination}</strong> ${flight.arrival}
                    </div>
                </div>
                <div class="flight-details">
                    <span>Duration: ${flight.duration}</span>
                </div>
                <div class="flight-action">
                    <span class="flight-price">$${flight.price}</span>
                    <button class="book-btn" onclick="handleBooking('${flight.id}', '${flight.price}')">Book Now</button>
                </div>
            `;
            flightList.appendChild(flightCard);
        });
    }

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the form from submitting and refreshing the page
        
        // In a real application, you would collect the form data:
        // const origin = document.getElementById('origin').value;
        // const destination = document.getElementById('destination').value;
        // const date = document.getElementById('departureDate').value;
        
        // Then send an AJAX/Fetch request to your backend server here:
        // fetch('/api/flights?origin=...', { ... })
        //     .then(response => response.json())
        //     .then(data => renderFlights(data))
        //     .catch(error => console.error('Error fetching flights:', error));

        // For this demo, we just use the mock data:
        renderFlights(mockFlights);
        
        // Optional: Show a confirmation message
        flightList.scrollIntoView({ behavior: 'smooth' });
    });
});

// Global function for the "Book Now" button (simplified)
function handleBooking(flightId, price) {
    alert(`Booking flight ${flightId} for $${price}. (This is a demo. Actual booking would happen on the next page!)`);
}