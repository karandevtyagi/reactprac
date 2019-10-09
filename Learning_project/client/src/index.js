
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/css/bootstrap.min.css';
import './assets/scss/now-ui-kit.scss';
import './assets/demo/demo.css';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import index from './store/reducers/index';
import App from './App';


const middleware = [thunk];
const store = createStore(index, composeWithDevTools(applyMiddleware(...middleware)));
ReactDOM.render(
    <Provider store={store}>
<Router>
<App />
</Router>
    </Provider>,
    document.getElementById('root'),
);
