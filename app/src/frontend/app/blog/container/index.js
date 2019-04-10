// Dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Layout from '../components/Layout';

// Actions
import { fetchPosts, fetchPost } from '../actions';

const mapStateToProps = (state) => {
  return {
    posts: state.blog.posts,
    post: state.blog.post
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    fetchPosts,
    fetchPost
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
