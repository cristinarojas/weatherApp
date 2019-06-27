import React from 'react';

import Todo from './todo/Todo';

const Layout = props => (
  <main>
    <Todo {...props}/>
  </main>
);

export default Layout;
