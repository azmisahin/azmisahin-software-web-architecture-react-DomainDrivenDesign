/**
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 * Name          :   React Web Application Tests
 * Version       :   @package.json.version
 * Description   :   Web Application With React Tests
 * Author        :   Azmi ŞAHİN <bilgi@azmisahin.com>
 * Licence       :   MIT
 * ════════════════════════════════════════════════════════════════════════════════════════════════════
 * Package       :   No Package / Web Application
 * Repository    :   https://github.com/azmisahin/com.domain.www.react.web.git
 * Homepage      :   https://azmisahin.github.io
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 **/

// Require
import React from 'react';
import ReactDOM from 'react-dom';

// Referance
import App from './app';

// Test
it('Application Render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
