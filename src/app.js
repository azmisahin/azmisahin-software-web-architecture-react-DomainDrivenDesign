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

// Require
import React, { Component } from 'react';

// Referance
import './app.css';
import Header from './components/header';
import Footer from './components/footer';

// Home Page
import HomePage from './client/home';

/**
 * Layout
 */
class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <HomePage></HomePage>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
