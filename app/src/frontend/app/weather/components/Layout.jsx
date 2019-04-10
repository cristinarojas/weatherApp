import React from 'react';

import Weather from './weather/Weather';

const Layout = props => (
  <main>
    <Weather {...props}/>
  </main>
);

export default Layout;
