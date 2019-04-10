// Dependencies.
import React, { Component, Fragment } from 'react';

// Styles.
import styles from './Weather.scss';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    };
  }

  // When component mounted
  componentDidMount() {
    const { fetchWeather } = this.props;
  }

  // To obtain the user value
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // To submit the request to the API (AC - Redux)
  handleSumbit = (e) => {
    e.preventDefault();
    const { fetchWeather } = this.props;
    const city = this.state.city;

    fetchWeather(city); // AC
  }

  render() {
    console.log('this.props response -->', this.props)
    return(
      <>
        <div className={styles.weatherContainer}>
          <form onSubmit={this.handleSumbit} className={styles.submitContainer}>
            <input
              id="city"
              type="text"
              placeholder="Type the city..."
              name="city"
              className={styles.city}
              onChange={this.handleChange}  />

            <button
              type="button"
              id="sumbitCity"
              type="submit"
              name="sumbitCity"
              className={styles.submit}>Search Weather</button>

          </form>

          <div className={styles.weatherResult}>
            <p>Weather for <span className={styles.city}>{this.state.city}</span> is: </p>
          </div>
        </div>
      </>
    )
  }
}

export default Weather;
