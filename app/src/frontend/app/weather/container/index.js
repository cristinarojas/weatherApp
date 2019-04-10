// Dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Layout from '../components/Layout';

// Actions
import { fetchWeather } from '../actions';

const mapStateToProps = (state) => {
  return {
    weather: state.weather.weatherResult
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    fetchWeather
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
