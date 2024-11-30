import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { URLs } from './__data__/urls';

const Hello = () => <h1>Hello</h1>;

export const Dashboard = () => {
  return (
    <Routes>
      <Route
        path={URLs.baseUrl}
        element={<Navigate replace to={URLs.auth.url} />}
      />
      <Route path={URLs.auth.url} element={<Hello />} />
    </Routes>
  );
};