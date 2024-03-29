import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {CookiesProvider} from 'react-cookie';


import QueriesReducer from './store/reducers/v1/QueriesReducer';
import StationaryPointerReducer from './store/reducers/v1/StationaryPointsReducer';
import PlaylistsReducer from './store/reducers/v1/PlaylistReducer';
import AuthReducer from './store/reducers/v1/AuthReducer';
import UsersListReducer from './store/reducers/v1/UsersListReducer';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    query: QueriesReducer,
    stationaryPointer: StationaryPointerReducer,
    playlists: PlaylistsReducer,
    auth: AuthReducer,
    usersList: UsersListReducer,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
// const store = createStore(rootReducer);

const app = (
    <CookiesProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </CookiesProvider>

);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
