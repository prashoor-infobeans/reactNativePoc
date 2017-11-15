import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/main.css';
import Header from './header';
import App from './App';
import DummyForm from './dummyForm';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('one'));
ReactDOM.render(<DummyForm />, document.getElementById('two'));
//registerServiceWorker();
