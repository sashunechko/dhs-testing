import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PageRoutes } from './routes';
import { Global } from "@emotion/react";

import ErrorBoundary from "./components/error-boundary"
import { GlobalStyles } from './global-styles';
import { Provider } from 'react-redux';
import { store } from './__data__/store';

const App = () => {

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <Global styles={GlobalStyles} />
          <PageRoutes />
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  );

};

export default App;