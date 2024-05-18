import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PageRoutes } from './routes';

import ErrorBoundary from "./components/error-boundary"

import './css/style.css'
import './css/record.css'

const App = () => {

  return (
    <ErrorBoundary>
      <BrowserRouter>
        {/* <Global styles={globalStyles} /> */}
        <PageRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );

};

export default App;