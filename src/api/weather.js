const apiKey = '24e3b0fa58162e6a';
const apiPath = `http://api.wunderground.com/api/${apiKey}/`;

const getWeatherConditions = (city) => {
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
			} else if (resJson.response.results) {
				reject('Multiple cities match your request. Please be more specific.');
			}

			const { city } = resJson.current_observation.display_location;
			const conditions = resJson.current_observation.weather;
			const precipitation = parseFloat(resJson.current_observation.precip_today_in);
			let umbrella = false;

			if (precipitation > 0) {
				umbrella = true;
			}

			resolve({
				city,
				conditions,
				bringUmbrella: umbrella,
			});
		}).catch((err) => {
			reject(err);
		});
	});
}

const getTenDayForecast = (city) => {
	return new Promise((resolve, reject) => {
		const urlCity = encodeURIComponent(city);
		const endpoint = `forecast10day/q/${urlCity}.json`;
		const requestUrl = apiPath + endpoint;

		fetch(requestUrl).then((res) => {
			return res.json();
		}).then(resJson => {
			if (resJson.response.error) {
				// TODO: Adding this to the store and properly showing it on page
				reject(resJson.response.error.description);
			} else if (resJson.response.results) {
				reject('Multiple cities match your request. Please be more specific.');
			}

			const tenDayForecast = resJson.forecast.simpleforecast.forecastday;
			const sevenDayForecast = tenDayForecast.slice(0, 6);
			const isThereRainThisWeek = sevenDayForecast.some((day) => {
					if (day.pop > 0) {
						return true;
					}
				});

			resolve({
				buyUmbrella: isThereRainThisWeek,
			});
		}).catch((err) => {
			reject(err);
		});
	});
}

const getCityWeather = (city) => {
	if (!city) {
		throw new Error('No city provided.');
	}

	return Promise.all([
		getWeatherConditions(city),
		getTenDayForecast(city),
	]).then((apiValues) => {
		const conditions = apiValues[0];
		const forecast = apiValues[1];
		const mergedPromise = {
			...conditions,
			...forecast,
		};

		return new Promise((resolve) => {
			resolve(mergedPromise)
		});
	});


}

export {
	getCityWeather,
};