const flightSearchForm = document.getElementById('flight-search-form');
const flightResultsList = document.getElementById('flight-results-list');

flightSearchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const origin = flightSearchForm.elements['origin'].value;
  const destination = flightSearchForm.elements['destination'].value;
  const departureDate = flightSearchForm.elements['departure-date'].value;
  const returnDate = flightSearchForm.elements['return-date'].value;
  const numPassengers = flightSearchForm.elements['num-passengers'].value;
  const url = `/api/flights?origin=${origin}&destination=${destination}&departureDate=${departureDate}&returnDate=${returnDate}&numPassengers=${numPassengers}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      flightResultsList.innerHTML = '';
      data.results.forEach(flight => {
        const li = document.createElement('li');
        li.innerText = `${flight.airline} - ${flight.departureAirport} to ${flight.arrivalAirport} - ${flight.price}`;
        flightResultsList.appendChild(li);
      });
    })
    .catch(error => console.error(error));
});
