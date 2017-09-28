import React, { Component } from 'react';
import { Root } from './components/Root';
import { User } from './components/User';
import { Dashboard } from './components/Dashboard';
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    );
  }
}

export default App;
