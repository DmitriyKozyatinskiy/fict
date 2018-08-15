import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import 'sanitize.css';
import 'semantic-ui-css/semantic.min.css';
import './scss/index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
