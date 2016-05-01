import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/lib/app-bar';
import AppCanvas from 'material-ui/lib/app-canvas';

export default class App extends React.Component {
  render() {
    return (<AppCanvas>
      <AppBar  />
      {this.props.children}
    </AppCanvas>);
  }
}
