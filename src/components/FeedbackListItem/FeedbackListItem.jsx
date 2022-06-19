import { useState } from 'react';
import { useDispatch } from 'react';
import axios from 'axios';

const FeedbackListItem = ({feedback, fetchFeedback}) => {

    const handleDelete = () => {
        axios.delete(`/api/feedback/${feedback.id}`
        ).then(() => {
            console.log('delete success!', feedback.id);
            // refreshes the page, so you don't have to click the refresh button
            fetchFeedback();
        }).catch((error) => {
            console.log('error in delete', error)
            //missing delete route 
        })
    }



    return(
        <tr>
            <td>{feedback.feeling}</td>
            <td> {feedback.understanding} </td>
            <td> {feedback.support} </td>
            <td> {feedback.comments} </td>
            <td> <button onClick={handleDelete}>Delete</button> </td>
        </tr>
    )
}

export default FeedbackListItem;


