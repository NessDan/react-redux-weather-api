import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return state;
}

class WeatherDisplayer extends Component {
	render() {
		const {
			city,
			conditions,
			bringUmbrella,
			buyUmbrella,
			error,
		} = this.props.weather;
		let weatherConditionsRender = null;

		if (error) {
			weatherConditionsRender = (
				<div className="city-weather-info city-weather-error">
					{error}
				</div>
			);
		} else if (city && conditions && typeof bringUmbrella === 'boolean' && typeof buyUmbrella === 'boolean') {
			let bringUmbrellaRender = "You don't need an umbrella for now...";
			let buyUmbrellaRender = "Don't bother buying an umbrella.";

			if (bringUmbrella) {
				bringUmbrellaRender = "You might want to bring an umbrella.";
			}

			if (buyUmbrella) {
				buyUmbrellaRender = "You should invest in buying one if you don't have one already!";
			}

			weatherConditionsRender = (
				<div className="city-weather-info">
					The weather in {city} is {conditions}. {bringUmbrellaRender} {buyUmbrellaRender}
				</div>
			);
		}

		return weatherConditionsRender;
	}
}

WeatherDisplayer = connect(mapStateToProps)(WeatherDisplayer);

WeatherDisplayer.propTypes = {
	city: PropTypes.string,
	conditions: PropTypes.string,
};

export default WeatherDisplayer;
