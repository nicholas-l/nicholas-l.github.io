import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/lib/app-bar';

export default class App extends React.Component {
  render() {
    return (<div>
      <AppBar
        title="Github Page for Nicholas Latham"
      />
      {this.props.children}
      <div>Created using <a href="https://facebook.github.io/react/">ReactJS</a></div>
    </div>);
  }
}
