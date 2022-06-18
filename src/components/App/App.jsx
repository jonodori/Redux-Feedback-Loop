import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

//components
import FeelingForm from '../FeelingFrom/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportedForm from '../SupportedForm/SupportedForm';
import CommentsForm from '../CommentsForm/CommentsForm';

function App() {
  const dispatch = useDispatch();

useEffect(() => {
  getFeedback();
}, []);

const getFeedback = () => {
  //we go to pizza router 
  axios({
    method: 'GET',
    url: '/api/feedback'
  }).then(response => {
    dispatch({
      type: 'SET_FEEDBACK_LIST',
      payload: response.data,
    });
  }).catch((err) => {
    console.error('GET /api/pizza failed', err)
  })
}


  return (
    <Router>

      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        <Route exact path='/'>
          <FeelingForm />
        </Route>

        <Route exact path='/understanding'>
          <UnderstandingForm />
        </Route>

        <Route exact path='/supported'>
          <SupportedForm />
        </Route>

        <Route exact path='/comments'>
          <CommentsForm />
        </Route>

      </div>
    </Router>
  );
}

export default App;
