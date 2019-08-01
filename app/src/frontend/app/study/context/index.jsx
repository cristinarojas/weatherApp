// Dependencies
import React, { Component, createContext } from 'react';

// Context
export const NamesContext = createContext();

export class NamesProvider extends Component  {
  state = {
    names: [{
      name: 'Cristina',
      lastName: 'Rojas'
    }, {
      name: 'Carlos',
      lastName: 'Santana'
    }],
    userValue: '',
    weatherResults: []
  }

  handleOnChange = ({ target: { value } }) => {
    if (value.length === 3) {
      this.setState({
        userValue: value
      }, () => {
        this.getWeather(this.state.userValue);
      });
    }
  }

  getWeather(city) {
    const apiKey = '6844b24412a14adf733d233afead26d8';
    const API_WEATHER = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

    fetch(API_WEATHER)
      .then(response => response.json())
      .then(data =>
        this.setState({
          weatherResults: data
        })
      )
  }


  render() {
    const { children } = this.props;
    const { weatherResults } = this.state;
    console.log('weatherResults-->', weatherResults)

    return(
      <NamesContext.Provider
        value={{
          actions: {
            handleOnChange: this.handleOnChange
          },
          data: this.state
        }}
      >
        {children}
      </NamesContext.Provider>
    )
  }
}
