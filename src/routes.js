// ==================================================
// Routes
// ==================================================
// This file exports the routes file imported in the
// Root file.
// ==================================================

import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MainView from './views/main';
import HomeView from './views/home';

export default (
  <Route path="/" component={MainView}>
    <IndexRoute component={HomeView} />
  </Route>
);
