/**
 * ====================================================================================================
 * Name    : Footer Script
 * File    : Footer.js
 * Version : 0.0.1
 * ====================================================================================================
 */

// Require
import React, { Component } from 'react';

// Layout
import './style.css';

/**
 * Footer Component
 */
class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <p className="text-muted">Open source web page: http://azmisahin.github.io</p>
                </div>
            </footer>
        );
    }
}

// Export Footer
export default Footer