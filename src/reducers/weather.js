const defaultState = {
	city: '',
	conditions: '',
	bringUmbrella: false,
	buyUmbrella: false,
	error: '',
};

const weather = (state = defaultState, action) => {
	switch (action.type) {
		case 'SET_CITY_CONDITIONS':
			return {
				city: action.city,
				conditions: action.conditions,
				bringUmbrella: action.bringUmbrella,
				buyUmbrella: action.buyUmbrella,
				error: '',
			};
		case 'SET_CONDITIONS_ERROR':
			return {
				error: action.err,
			};
		default:
			return state;
	}
};

export default weather;