import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const feedbackList = (state = [], action) => {
    switch (action.type) {
        case 'GET_FEEDBACK_LIST':
            return action.payload;
    }
    return state;
}

const addFeeling = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FEELING': 
        return action.payload;
    }
    return state;
}

const addUnderstanding = (state = [], action) => {
    switch (action.type) {
        case 'ADD_UNDERSTANDING': 
        return action.payload;
    }
    return state;
}




const storeFeedback = createStore(
    combineReducers({
        feedbackList,
        addFeeling,
        addUnderstanding
    }),
    applyMiddleware(logger)
);


ReactDOM.render(
    <Provider store={storeFeedback}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
