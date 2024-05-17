import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PageRoutes } from './routes';

import './css/style.css'
import './css/record.css'

const App = () => {

  return (
    <BrowserRouter>
      {/* <Global styles={globalStyles} /> */}
      <PageRoutes />
    </BrowserRouter>
  );

};

export default App;