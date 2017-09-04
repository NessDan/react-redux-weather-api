const apiKey = '24e3b0fa58162e6a';
const apiPath = `http://api.wunderground.com/api/${apiKey}/`;

const getWeatherConditions = (city) => {
	if (!city) {
		throw new Error('No city provided.');
	}

	return new Promise((resolve, reject) => {
		const urlCity = encodeURIComponent(city);
		const endpoint = `conditions/q/${urlCity}.json`;
		const requestUrl = apiPath + endpoint;

		fetch(requestUrl).then((res) => {
			return res.json();
		}).then(resJson => {
			if (resJson.response.error) {
				// TODO: Adding this to the store and properly showing it on page
				reject(resJson.response.error.description);
			}

			const { city } = resJson.current_observation.display_location;
			const conditions = resJson.current_observation.weather;

			resolve({
				city,
				conditions,
			});
		}).catch((err) => {
			reject(err);
		});
	});
}

export {
	getWeatherConditions,
};