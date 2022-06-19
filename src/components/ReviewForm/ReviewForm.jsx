import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';



const ReviewForm = () => {
    const history = useHistory;

    // useSelectors to display
    const feeling = useSelector(store => store.addFeeling)
    const understanding = useSelector(store => store.addUnderstanding);
    const support = useSelector(store => store.addSupported);
    const comments = useSelector(store => store.addUnderstanding);

    //post to the Database
    const submitFeedback = () => {
        const feedback = {
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: comments,
        }

        axios.post('/api/feedback', feedback
        ).then(() => {
            console.log('post success', feedback)
        }).catch(err => {
            console.log('error in POST', error)
        })
    }

    

    const handleSubmit = () => {
        submitFeedback();
        history.push('/success')
    }

    return(
        <>
        <div>

            <h2>Review Your Feedback</h2>

            <h4>Feelings: {feeling}</h4>
            <h4>Understanding: {understanding}</h4>
            <h4>Support: {support}</h4>
            <h4>Comments: {comments}</h4>
        </div>
        <button onClick={handleSubmit}>Submit</button>
        </>
        
    )

}

export default ReviewForm;

