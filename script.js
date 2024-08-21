const url = 'https://weather221.p.rapidapi.com/callback';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e76481a762mshe5c8efce46539d1p1e8e4bjsn75f6cf60a793',
		'x-rapidapi-host': 'weather221.p.rapidapi.com'
	}
};

// Wrap the code in an async function
async function fetchWeatherData() {
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

// Call the async function
fetchWeatherData();
