import React from "react";
import {useState, useEffect} from 'react';
import axios from "axios";
import FeedbackListItem from "../FeedbackListItem/FeedbackListItem";


const FeedbackList = () => {

    useEffect(() => {
        fetchFeedback();
    }, [])

    //where data is getting pushed to 
    const [currentFeedback, setCurrentFeedback] = useState([]);

    //grabs the data from the database
    const fetchFeedback= () => {
        axios({
            method: 'GET',
            url: '/api/feedback'
        }).then(response => {
            console.log('Get success!', response);
            setCurrentFeedback(response.data);
        }).catch((error) => {
            console.log('Error on Get', error)
        })
    }


    return (
        <table>
        <thead>
            <tr>
            <th>Feeling</th>
            <th>Understanding</th>
            <th>Support</th>
            <th>Comments</th>
            <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {currentFeedback.map(feedback => (
                //calls the component and sends the feedback data and calls the function fetchFeedback
                <FeedbackListItem key={feedback.id} feedback={feedback} fetchFeedback={fetchFeedback} />
            ))}
        </tbody>  
</table>
    )

}

export default FeedbackList;