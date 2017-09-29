const setCityConditions = ({ city, conditions, bringUmbrella, buyUmbrella }) => {
	return new Promise((resolve) => {
		resolve({
			type: 'SET_CITY_CONDITIONS',
			city,
			conditions,
			bringUmbrella,
			buyUmbrella,
		});
	});
};

const setConditionsError = ({ err }) => {
	return new Promise((resolve) => {
		resolve({
			type: 'SET_CONDITIONS_ERROR',
			err,
		});
	});
};

export {
	setCityConditions,
	setConditionsError,
};