import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import Home from './components/home';

// <Route path="*" component={NoMatch}/>

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>

    </Route>
  </Router>,
  document.getElementById('container')
);
