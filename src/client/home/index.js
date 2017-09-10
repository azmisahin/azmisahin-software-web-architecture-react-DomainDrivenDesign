/**
 * ====================================================================================================
 * Name    : Home Script
 * File    : Home.js
 * Version : 0.0.1
 * ====================================================================================================
 */

// Require
import React, { Component } from 'react';

// Referance
import './style.css';
import logo from './favicon.png';

/**
 * Navigation Component
 */
class Nav extends Component {
    render() {
        return (
            <div className="container">
                <div className="page-header">
                    <img src={logo} alt="Azmi ŞAHİN" />
                    <h1>React With Bootstrap / Webpack</h1>
                </div>
                <div className="page-content">
                    <p>React, bootstrap, nodejs with frontend web application.</p>
                    <img alt="Continuous Integration" src="https://travis-ci.org/azmisahin/com.domain.www.react.web.svg?branch=master" />
                    <a href="https://azmisahin-react.herokuapp.com">Continuous Deployment.</a>
                    <a href="https://travis-ci.org/azmisahin/com.domain.www.react.web">Continuous Integration.</a>
                    <p>Heroku Pipeline</p>
                </div>
            </div>
        );
    }
}

// Export Navigation
export default Nav