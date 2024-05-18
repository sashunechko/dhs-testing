import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { URLs } from './__data__/urls';
import Main from './pages/main'
import Lk from './pages/lk'
import Testlist from './pages/testlist'
import Rec from './pages/record'
import Reg from './pages/registration'
import Enter from './pages/enter'

export const PageRoutes = () => (
    <Routes>
        <Route path={URLs.baseUrl} element={<Main />} />
        {URLs.ui.main && <Route path={URLs.ui.main} element={<Main />} />}
        {URLs.ui.lk && <Route path={URLs.ui.lk} element={<Lk />} />}
        {URLs.ui.record && <Route path={URLs.ui.record} element={<Rec />} />}
        {URLs.ui.testlist && <Route path={URLs.ui.testlist} element={<Testlist />} />}
        {URLs.ui.registration && <Route path={URLs.ui.registration} element={<Reg />} />}
        {URLs.ui.enter && <Route path={URLs.ui.enter} element={<Enter />} />}

        <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
)