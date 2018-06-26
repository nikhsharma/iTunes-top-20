import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Top20List from './containers/Top20List';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Top20List />, document.getElementById('root'));
registerServiceWorker();
