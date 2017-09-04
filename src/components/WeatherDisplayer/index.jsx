import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return state;
}

class WeatherDisplayer extends Component {
	render() {
		const { city, conditions } = this.props.weather;
		let weatherConditionsRender = null;

		if (city && conditions) {
			weatherConditionsRender = (
				<div className="city-weather-info">
					The weather in {city} is {conditions}.
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
