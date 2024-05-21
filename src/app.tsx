import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PageRoutes } from './routes';
import { Global } from "@emotion/react";

import ErrorBoundary from "./components/error-boundary"
import { GlobalStyles } from './global-styles';

const App = () => {

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Global styles={GlobalStyles} />
        <PageRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );

};

export default App;