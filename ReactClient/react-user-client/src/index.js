import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import store from './state.js';
window.React = require('react');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

store.subscribe(() => console.log("New state", store.getState()));

for (var index = 0; index < 100; index++) {
    store.dispatch({
        type: 'ADD_NEW_USER',
        payload: {
            user: {
                Id: index,
                Name: 'Bodya',
                Surname: 'Balanyk',
                Email: 'bb@leobit.co',
                Gender: 1
            }
        }
    });
}

