// Dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Layout from '../components/Layout';

// Actions
import { fetchTic } from '../actions';

const mapStateToProps = (state) => {
  return {
    todo: ''
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    fetchTic
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
