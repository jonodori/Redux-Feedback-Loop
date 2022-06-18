import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from 'react-router-dom';


const FeelingForm = () => {
    //let's you go to the next page 
    const history = useHistory();

    // in order to use dispatch    
    const dispatch = useDispatch();

    //state is empty value 
    const [feeling, setFeeling] = useState(0);

    const onAddFeeling = (evt) => {
        

        evt.preventDefault()
        dispatch({
            type: 'ADD_FEELING',
            payload: {
                feeling,
            }
        });
    }


    return (
        <>
        <h2>How are you feeling today?</h2>
        <form onSubmit={onAddFeeling}>
            <div>
                <label>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={feeling}
                        onChange={evt => setFeeling(Number(evt.target.value))}
                        />
                </label>
                    {feeling}
            </div>
            <div>
                <button type ="submit">Next</button>
            </div>
                
        </form>
        </>
    )
}

export default FeelingForm;