import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          routeInfo: [
              {
                title: "Dashboard",
                route: "/"
              },
              {
                title: "Add user",
                route: "/user"
              }
          ]
        };
    }

    render() {
        return (
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        {this.state.routeInfo.map((info, i) => <li key={i}><Link to={info.route}>{info.title}</Link></li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

Menu.propTypes = {
    brand: PropTypes.string
};