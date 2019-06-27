// To perform HTTP requests
import axios from 'axios';

// End points
const apiKey = '6844b24412a14adf733d233afead26d8';
const API_TIC = `http://api.openweathermap.org/data/2.5/weather?q=`;

class Api {
  static fetchTic(city) {
    return axios.get(API_TIC + city + `&APPID=${apiKey}`)
  }
}

export default Api;
