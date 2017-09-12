import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import fetchPosts from './reducers/post_reducers';

let store = createStore(fetchPosts);

import Home from './containers/home';

ReactDOM.render((
    <Provider store = {store}>
        <Router history = {browserHistory}>
            <Route path = "/" component = {App}>
                <IndexRoute component = {Home} />
                <Route path = "/" component = {Home} />
            </Route>
        </Router>
    </Provider>

), document.getElementById('react-main'));