import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
// import {createStore } from 'redux';
// import {mainReducer} from './reducer.js'
// import {Provider} from 'react-redux';

// let store = createStore(mainReducer);

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));