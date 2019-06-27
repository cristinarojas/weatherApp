// To perform HTTP requests
import axios from 'axios';

// End points
const apiKey = '6844b24412a14adf733d233afead26d8';
const API_SEARCH = `http://api.openweathermap.org/data/2.5/weather?q=`;

class Api {
  static fetchSearch(city) {
    console.log('entra AC!')
    return axios.get(API_SEARCH + city + `&APPID=${apiKey}`)
  }
}

export default Api;
