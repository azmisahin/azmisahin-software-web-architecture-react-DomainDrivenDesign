/**
 * ====================================================================================================
 * Name    : Page Content Script
 * File    : pageContent.js
 * Version : 0.0.1
 * ====================================================================================================
 */

// Require
import React, { Component } from 'react';

// Referance

/**
 * Page Content
 */
class PageContent extends Component {
    render() {
        return (
            <div className="page-content">
                <p>React, bootstrap, nodejs with frontend web application.</p>
                <img alt="Continuous Integration" src="https://travis-ci.org/azmisahin/com.domain.www.react.web.svg?branch=master" />
                <a href="https://azmisahin-react.herokuapp.com">Continuous Deployment.</a>
                <a href="https://travis-ci.org/azmisahin/com.domain.www.react.web">Continuous Integration.</a>
                <p>Heroku Pipeline</p>
            </div>
        );
    }
}

// Export Module
export default PageContent