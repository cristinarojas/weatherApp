// Dependencies
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Containers
import Blog from './app/blog/container';
import Weather from './app/weather/container';
import Todo from './app/todo';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Blog} />
      <Route exact path="/weather" component={Weather} />
      <Route exact path="/todo" component={Todo} />
      <Route exact path="/blog/:id" component={Blog} />
    </Switch>
  </BrowserRouter>
);

export default App;
