import React from 'react';
import { Menu } from './Menu';
import PropTypes from 'prop-types';
import './Header.css';

export class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <Menu brand={this.props.brand}/>
            </nav>
        );
    }
}

Menu.propTypes = {
    brand: PropTypes.string
};