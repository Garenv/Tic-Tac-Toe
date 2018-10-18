import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import winnerValueReducer from './store/reducers/winnerReducer';
import gameLockedValueReducer from './store/reducers/gameLockedReducer';
import gameEndedReducer from './store/reducers/gameEndedReducer';
import totalMovesReducer from './store/reducers/totalMovesReducer';
import turnValueReducer from './store/reducers/turnValueReducer';

const rootReducer = combineReducers({
    winnerValue: winnerValueReducer,
    gameLockedValue: gameLockedValueReducer,
    gameEndedValue: gameEndedReducer,
    totalMovesValue: totalMovesReducer,
    turnValue: turnValueReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
