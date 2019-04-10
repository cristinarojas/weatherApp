// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

// Components
import App from './frontend/App';

// Redux Store
import configureStore from './shared/redux/configureStore';

// Configuring Redux Store
const store = configureStore(window.initialState);

// Root element
const rootElement = document.querySelector('#root');

// App Wrapper
const renderApp = Component => {
  render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    rootElement
  );
};

// Rendering app
renderApp(App);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept('./frontend/App', () => {
    renderApp(require('./frontend/App').default);
  });
}
