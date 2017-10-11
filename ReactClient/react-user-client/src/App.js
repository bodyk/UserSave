import React, { Component } from 'react';
import { Root } from './components/Root';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    );
  }
}

export default connect( state => {
    return {
      users: state
    }
  }
)(App);
