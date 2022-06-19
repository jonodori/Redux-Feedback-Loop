import React from "react";
import {useState, useEffect} from 'react';
import axios from "axios";

const AdminFeedback = () => {

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
            </tr>
        </thead>
        <tbody>
            {currentFeedback.map(feedback => (
                <tr>
                    
                </tr>
            ))}
        </tbody>  
</table>
    )

}

export default AdminFeedback;