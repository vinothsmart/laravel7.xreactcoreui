require('../bootstrap');

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { HashRouter, Route, Switch } from 'react-router-dom';
import DefaultLayout from './DefaultLayout';
import Reducers from './reducers';
import './app.scss';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(Reducers, composeWithDevTools(applyMiddleware(thunk)));

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route path="/" name="Home" component={DefaultLayout} />
                    </Switch>
                </HashRouter>
            </Provider>
        );
    }
}

render(<App />, document.getElementById('app'));