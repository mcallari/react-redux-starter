import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Application components.
import AppIndex from './components/app_index';
import Page from './components/page';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/page" component={Page} />
        <Route path="/" component={AppIndex} />
      </Switch>
    </BrowserRouter>
  )
}
