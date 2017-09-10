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
import React from 'react';
import ReactDOM from 'react-dom';

// Referance
import App from './app';
import registerServiceWorker from './registerServiceWorker';

// Render Application
ReactDOM.render(<App />, document.getElementById('root'));

// Service
registerServiceWorker();