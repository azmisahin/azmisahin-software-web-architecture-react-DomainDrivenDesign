/**
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 * Name          :   React Web Application
 * Version       :   @package.json.version
 * Description   :   Web Application With React
 * Author        :   Azmi ŞAHİN <bilgi@azmisahin.com>
 * Licence       :   MIT
 * ════════════════════════════════════════════════════════════════════════════════════════════════════
 * Package       :   No Package / Web Application
 * Repository    :   https://github.com/azmisahin/com.domain.www.react.web.git
 * Homepage      :   https://azmisahin.github.io
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 **/

import React, { Component } from 'react';
import logo from './favicon.png';
import './app.css';

class App extends Component {
  render() {
    return (
      <div>

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

        <div className="container">
          <div className="page-header">
            <img src={logo} alt="Azmi ŞAHİN" />
            <h1>React With Bootstrap / Webpack</h1>
          </div>
          <div className="page-content">
            <p>React, Webpack, bootstrap, nodejs with frontend web application.</p>
            <img alt="Continuous Integration" src="https://travis-ci.org/azmisahin/com.domain.www.react.web.svg?branch=master" />
            <a href="https://azmisahin-react.herokuapp.com">Continuous Deployment.</a>
            <a href="https://travis-ci.org/azmisahin/com.domain.www.react.web">Continuous Integration.</a>
            <p>Heroku Pipeline</p>
          </div>
        </div>

        <footer className="footer">
          <div className="container">
            <p className="text-muted">Open source web page: http://azmisahin.github.io</p>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
