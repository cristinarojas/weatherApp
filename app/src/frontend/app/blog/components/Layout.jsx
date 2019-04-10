import React from 'react';

import { Link } from 'react-router-dom';
import Posts from './Posts';


const Layout = props => (
  <main>
    <h1><Link to="/">Blog Posts</Link></h1>
    <Posts {...props} />
  </main>
);

export default Layout;
