import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Map} from 'immutable'
import {setState} from './actions/application'
import reducer from './reducer';
import actionMiddleware from './action_middleware';
import routes from './routes'



let createStoreWithMiddleware = applyMiddleware(
    actionMiddleware
)(createStore)

const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);

