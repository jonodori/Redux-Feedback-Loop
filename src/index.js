import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';



const addFeeling = (state = 1, action) => {
    switch (action.type) {
        case 'SET_FEELING': 
        return action.payload;
        case 'RESET_DATA':
        return 1; 
    }
    return state;
}

const addUnderstanding = (state = 1, action) => {
    switch (action.type) {
        case 'SET_UNDERSTANDING': 
        return action.payload;
        case 'RESET_DATA':
        return 1; 
    }
           
    return state;
}

const addSupported = (state = 1, action) => {
    switch (action.type) {
        case 'SET_SUPPORTED': 
        return action.payload;
        case 'RESET_DATA':
        return 1; 
    }
    return state;
}

const addComments = (state = '', action) => {
    switch (action.type) {
        case 'SET_COMMENTS':
        return action.payload;
        case 'RESET_DATA':
        return ''; 
    }
    return state;
}


const storeFeedback = createStore(
    combineReducers({
        addFeeling,
        addSupported,
        addUnderstanding,
        addComments
    }),
    applyMiddleware(logger)
);


ReactDOM.render(
    <Provider store={storeFeedback}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
