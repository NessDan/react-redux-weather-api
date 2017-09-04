import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getWeatherConditions } from 'api/weather';
import { setCityConditions } from 'actions/weather';
import './index.css';

class WeatherChecker extends Component {
	constructor(props) {
		super(props);

		this.state = {
			location: '48226',
		}
	}

	// https://facebook.github.io/react/docs/handling-events.html
	checkWeather = (event) => {
		event.preventDefault();

		const location = this.state.location;

		getWeatherConditions(location)
			.then(setCityConditions) // generate our action
			.then(this.props.dispatch) // then dispatch it
			.catch((err) => {
				console.error('Something went wrong while getting your weather.', err);
			});
	}

	handleLocationChange = (event) => {
		this.setState({
			location: event.target.value,
		});
	}

	render() {
		return (
	        <div className="weather-checker">
		        <div className="city-weather-check">
			        <label htmlFor="city">Enter your ZIP or City and State</label>
			        <form onSubmit={this.checkWeather}>
				        <input
				        	autoFocus
				        	id="city"
				        	type="text"
				        	placeholder="Detroit, MI"
				        	value={this.state.location}
				        	onChange={this.handleLocationChange}
			        	/>

				        <input type="submit" value="Check the Weather" />
			        </form>
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

WeatherChecker = connect()(WeatherChecker);

export default WeatherChecker;
