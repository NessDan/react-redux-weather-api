import React, { Component } from 'react';
import WeatherChecker from 'components/WeatherChecker';
import WeatherDisplayer from 'components/WeatherDisplayer';

class App extends Component {
  render() {
    return (
    	<div className="weather-app">
    		<WeatherChecker />
    		<WeatherDisplayer />
		</div>
    );
  }
}

export default App;
