import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Header from '../components/Header.js'
import LandingPage from '../components/LandingPage.js';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route component={LandingPage} path="/" exact />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
