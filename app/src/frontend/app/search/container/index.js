// Dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Layout from '../components/Layout';

// Actions
import { fetchSearch } from '../actions';

const mapStateToProps = (state) => {
  return {
    search: ''
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    fetchSearch
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
