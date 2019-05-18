import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Format from './Format';
import Downloads from './Downloads';

const Content = () => (
  <main className="flex-grow-1 bg-light shadow py-4 px-3">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/format" component={Format} />
      <Route path="/downloads" component={Downloads} />
      <Redirect to="/" />
    </Switch>
  </main>
);

export default Content;
