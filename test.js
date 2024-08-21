let cityInput=document.getElementById('city_input'),
searchButton=document.getElementById('searchButton'),
// api_key='170b7ead1973cd5d0380bd119ac111b2';
api_key='0816957e79b7f5e0cd9c48b78ff614bb';

function getWeatherDetails(name,lat,lon,country,state){
	let FORECAST_API_URL=`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`,
	Weather_API_URL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`,
	days = [
		'sunday',
		'mondday',
		'tuesday',
		'wednesday',
		'thursday',
		'friday',
		'saturday'
	],
	months = [
		'jan',
		'feb',
		'mar',
		'apr',
		'may',
		'jun',
		'july',
		'aug',
		'sep',
		'oct',
		'nov',
		'dec'
	];
	fetch(Weather_API_URL).then(res => res.json()).then(data => {
         console.log(data);
	}).catch(()=>{
		alert('failed to catch caurrnet weather');
	});
}

function getCityCoordinates(){
	let cityName=cityInput.value.trim();
	// console.log(cityName);
	cityInput.value='';
	if(!cityName) return;
	let GEOCODING_API_URL=`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${api_key}`;
	fetch(GEOCODING_API_URL).then(res => res.json()).then(data=>{
		let {name,lat,lon,country,state} =data[0];
		getWeatherDetails(name,lat,lon,country,state);
	}).catch(() => {
		alert(`failed to fetch coordinates of ${cityName}`);
	});
}

searchButton.addEventListener('click', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    getCityCoordinates();
});