// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hero, actividades } from '../components';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Actividades" component={Actividades} />
      </Switch>
    </Router>
  );
};

export default Routes;
