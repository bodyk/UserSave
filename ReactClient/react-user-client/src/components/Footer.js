import React from 'react';
import './Footer.css';

export class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container fixed-bottom">
                <div className="separator-horiz"></div>
                <div className="footer-wrapper">
                    <div className="footer-container">
                        <p>&copy; 2017 Bogdan Balanyk</p>
                        <div className="icons-container">
                        <a href="mailto:bb@leobit.co"><i className="fa fa-envelope"></i></a>
                        <a href="https://www.facebook.com/balanyk.bv"><i className="fa fa-facebook"></i></a>
                        <a href="https://vk.com/id151666199"><i className="fa fa-vk"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}