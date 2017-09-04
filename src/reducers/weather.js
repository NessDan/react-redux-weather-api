const defaultState = {
	city: '',
	conditions: '',
};

const weather = (state = defaultState, action) => {
	switch (action.type) {
		case 'SET_CITY_CONDITIONS':
			return {
				city: action.city,
				conditions: action.conditions,
			};
		default:
			return state;
	}
};

export default weather;