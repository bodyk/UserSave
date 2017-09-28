import React from 'react';
import { Menu } from './Menu';
import './Header.css';
import PropTypes from 'prop-types';

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