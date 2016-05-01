import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/app';
import Home from './components/home';
import Blog from './components/blog';
import Article from './components/blog/article';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// <Route path="*" component={NoMatch}/>

ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    <Route path="blog" component={Blog}>
      <Route path=":blogID" component={Article} />
    </Route>
    </Route>
  </Router>,
  document.getElementById('container')
);
