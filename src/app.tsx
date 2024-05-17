import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PageRoutes } from './routes';

import { Main } from './pages/main'
import { Testlist } from './pages/testlist'
import { Lk } from './pages/lk'
import { Rec } from './pages/record'
import { Reg } from './pages/registration'
import { Enter } from './pages/enter'
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