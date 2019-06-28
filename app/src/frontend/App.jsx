// Dependencies
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Containers
import Blog from './app/blog/container';
import Weather from './app/weather/container';
import Todo from './app/todo/container';
import Tic from './app/tictactoe/container';
import String from './app/strings/container';
import Buttons from './app/buttons/container';

// React Exercises
import Search from './app/search/container';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Blog} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/todo" component={Todo} />
      <Route exact path="/tic" component={Tic} />
      <Route exact path="/string" component={String} />
      <Route exact path="/buttons" component={Buttons} />
      <Route exact path="/weather" component={Weather} />
      <Route exact path="/blog/:id" component={Blog} />
    </Switch>
  </BrowserRouter>
);

export default App;
