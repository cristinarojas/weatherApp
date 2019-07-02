import React from 'react';

import Filters from './filters/Filters';

const Layout = props => (
  <main>
    <Filters {...props}/>
  </main>
);

export default Layout;
