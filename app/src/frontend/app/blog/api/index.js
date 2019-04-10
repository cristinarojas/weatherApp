import axios from 'axios';

// Endpoints
const API_POSTS = 'https://jsonplaceholder.typicode.com/posts';
const API_POST = 'https://jsonplaceholder.typicode.com/posts/';

class Api {
  static fetchPosts() {
    return axios.get(API_POSTS).then(response => response);
  }

  static fetchPost(id) {
    return axios.get(API_POST + id).then(response => response);
  }
}

export default Api;
