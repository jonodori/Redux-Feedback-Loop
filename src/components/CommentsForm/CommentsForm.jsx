import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from 'react-router-dom';

const CommentsForm = () => {
      //let's you go to the next page 
      const history = useHistory();

      // in order to use dispatch    
      const dispatch = useDispatch();

    const [comments, setComments] = useState('');

    const onAddComments = (evt) => {

        evt.preventDefault()
        dispatch({
            type: 'SET_COMMENTS',
            payload: {
                comments
            }
        })

        history.push('/review')
    }
    

    return (
        <>
        <h2>Any comments you want to leave?</h2>
        <form onSubmit={onAddComments}>
            <div>
                <label>
                    <h4>Comments</h4>

                    <input type="text" id="comments" onChange={evt => {setComments(evt.target.value)}}
                        />
                </label>
            </div>
            <div>
                <button type ="submit">Next</button>
            </div>
                
        </form>
        </>
    )
}

export default CommentsForm;
