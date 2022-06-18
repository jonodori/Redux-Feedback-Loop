import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from 'react-router-dom';


const FeelingForm = () => {
    // in order to use dispatch    
    const dispatch = useDispatch();

    //state is empty value 
    const [feeling, setFeeling] = useState(0);

    const handleSubmit = (evt) => {
        

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
        <form onSubmit={handleSubmit}>
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
            </div>
            <div>
                <button type ="submit">Next</button>
            </div>
                
        </form>
        </>
    )
}