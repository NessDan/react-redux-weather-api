const apiKey = '24e3b0fa58162e6a';
const endpoint = `http://api.wunderground.com/api/${apiKey}/`;

const weatherConditions = (city) => {
	if (!city) {
		throw new Error('No city provided.');
	}

	return new Promise((resolve, reject) => {
		const urlCity = encodeURIComponent(city);
		const path = `conditions/q/${urlCity}.json`;
		const requestUrl = endpoint + path;

		fetch(requestUrl).then((res) => {
			return res.json();
		}).then(resJson => {
			const conditions = resJson.current_observation;

			resolve(conditions.weather);
		}).catch((err) => {
			reject(err);
		});
	});
}

export {
	weatherConditions,
};