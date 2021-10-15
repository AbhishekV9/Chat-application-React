import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { HashRouter } from 'react-router-dom';


import './stylesheets/index.css';
import App from './components/App';
import rootReducer from './reducer';

//creating global store with createStore
const store=createStore(rootReducer,applyMiddleware(thunk,logger));

//Rrndering App Component
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


