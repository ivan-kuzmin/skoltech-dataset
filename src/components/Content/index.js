import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';

const Content = () => (
  <main className="flex-grow-1 bg-light shadow py-4 px-3">
    <Route exact path="/" component={Home} />
    {/* <Route path="/about" component={About} /> */}
    {/* <Route path="/topics" component={Topics} /> */}
  </main>
);

export default Content;
