const setCityConditions = ({ city, conditions }) => {
	return new Promise((resolve) => {
		resolve({
			type: 'SET_CITY_CONDITIONS',
			city,
			conditions,
		});
	});
};

export {
	setCityConditions,
};