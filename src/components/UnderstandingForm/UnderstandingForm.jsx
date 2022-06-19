import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from 'react-router-dom';


const UnderstandingForm = () => {
    //let's you go to the next page 
    const history = useHistory();

    // in order to use dispatch    
    const dispatch = useDispatch();

    //state is empty value 
    const [understanding, setUnderstanding] = useState(1);

    const onAddUnderstanding = (evt) => {
        
        evt.preventDefault()
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: 
                understanding,
            
        })

        history.push('/supported')
    }


    return (
        <>
        <h2>How well are you understanding the content?</h2>
        <form onSubmit={onAddUnderstanding}>
            <div>
                <label>
                    <input
                        type="range"
                        min="1"
                        max="10"
                        value={understanding}
                        onChange={evt => setUnderstanding(Number(evt.target.value))}
                        />
                </label>
                    {understanding}
            </div>
            <div>
                <button type ="submit">Next</button>
            </div>
                
        </form>
        </>
    )
}

export default UnderstandingForm;


