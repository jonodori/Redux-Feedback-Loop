import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from 'react-router-dom';


const FeelingForm = () => {
    //let's you go to the next page 
    const history = useHistory();

    // in order to use dispatch    
    const dispatch = useDispatch();

    //state is empty value 
    const [feeling, setFeeling] = useState(1);

    const onAddFeeling = (evt) => {
        

        evt.preventDefault()
        dispatch({
            type: 'SET_FEELING',
            payload: 
                feeling,
            
        })  

        history.push('/understanding')

    }


    return (
        <>
        <h2>How are you feeling today?</h2>
        <form onSubmit={onAddFeeling}>
            <div>
                <label>
                    <input
                        type="range"
                        min="1"
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