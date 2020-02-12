import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import resultsReducer from './store/reducers/result';
import counterReducer from './store/reducers/counter';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
});

const logger = (store) => {
    return (next) => {      // next itself a function (this fx not next but returned fx will be exectued by redux itself)
        return (action) => {     // this fx also executed by redux for you.  
            console.log('[Middleware] dispatching', action);
            const result  = next(action);
            console.log('[Middleware] after action passed', store.getState());

            return result;
        };
    };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
