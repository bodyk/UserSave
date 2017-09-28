import React, { Component } from 'react';
import { Header } from './menu/Header';
import { Main } from './Main';
import { Footer } from './Footer';

export class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteName: "React User Client"
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <Header brand={this.state.siteName}/>
          </div>
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <Main />
            </div>
          </div>
          <div className="col-xs-10 col-xs-offset-1">
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}
