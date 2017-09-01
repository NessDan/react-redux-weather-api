import React, { Component } from 'react';
import { weatherConditions } from 'api/weather';
import './index.css';

class WeatherChecker extends Component {
	constructor(props) {
		super(props);

		this.state = {
			location: null,
			weatherConditions: null,
		}
	}

	// https://facebook.github.io/react/docs/handling-events.html
	handleCheckWeather = () => {
		const location = this.state.location;

		weatherConditions(location).then((weatherConditions) => {
			// Send up to redux and update global app state at this point.
			this.setState({
				weatherConditions,
				conditionsCity: location, // separate the found location vs. textbox input
			});
		}).catch((err) => {
			console.error('Something went wrong while getting your weather.', err);
		});
	}

	handleLocationChange = (event) => {
		this.setState({
			location: event.target.value,
		});
	}

	generate

	render() {
		let weatherConditionsRender;

		if (this.state.weatherConditions) {
			weatherConditionsRender = (
				<div className="city-weather-info">
					The weather in {this.state.conditionsCity} is {this.state.weatherConditions}.
				</div>
			);
		}

		return (
	        <div className="weather-checker">
	        	{weatherConditionsRender}

		        <div className="city-weather-check">
			        <label htmlFor="city">Enter your City</label>

			        <input
			        	id="city"
			        	type="text"
			        	placeholder="City"
			        	value={this.state.location}
			        	onChange={this.handleLocationChange}
		        	/>

			        <input type="button" value="Check the Weather" onClick={this.handleCheckWeather} />
		        </div>

		        <div className="weather-underground-attribution">
		        	<p>All weather data from <a href="https://www.wunderground.com/">Weather Underground</a></p>

		        	<img
		        		width="300"
		        		src="https://icons.wxug.com/logos/JPG/wundergroundLogo_4c_horz.jpg"
		        		alt="Weather Underground"
	        		/>
		        </div>
	        </div>
        );
	}
}

export default WeatherChecker;
