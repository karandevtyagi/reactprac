import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './assets/css/bootstrap.min.css';
import './assets/scss/now-ui-kit.scss';
import './assets/demo/demo.css';

ReactDOM.render(
<Router>
<App />
</Router>,
document.getElementById('root'),
);
