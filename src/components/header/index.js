/**
 * ====================================================================================================
 * Name    : Header Script
 * File    : Header.js
 * Version : 0.0.1
 * ====================================================================================================
 */

// Require
import React, { Component } from 'react';

// Referance
import './style.css';
import Nav from './nav';

/**
 * Header Component
 */
class Header extends Component {
    render() {
        return (
            <Nav></Nav>
        );
    }
}

// Export Header
export default Header