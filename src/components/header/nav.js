/**
 * ====================================================================================================
 * Name    : Nav Script
 * File    : Nav.js
 * Version : 0.0.1
 * ====================================================================================================
 */

// Require
import React, { Component } from 'react';

// Referance

/**
 * Nav Component
 */
class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#Home">React</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#Home">Home <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

// Export Nav
export default Nav