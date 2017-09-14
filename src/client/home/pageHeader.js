/**
 * ====================================================================================================
 * Name    : Page Header Script
 * File    : pagaHeader.js
 * Version : 0.0.1
 * ====================================================================================================
 */

// Require
import React, { Component } from 'react';

// Referance
import logo from './favicon.png';

/**
 * Page Header
 */
class PageHeader extends Component {
    render() {
        return (
            <div className="page-header">
                <img src={logo} alt="Azmi ŞAHİN" />
                <h1>React With Bootstrap / Webpack</h1>
            </div>
        );
    }
}

// Export Module
export default PageHeader