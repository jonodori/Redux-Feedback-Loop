import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from 'react-router-dom';


const FeelingForm = () => {
    // in order to use dispatch    
    const dispatch = useDispatch();

    //state is empty value 
    const [feeling, setFeeling] = useState('');

    const handleSubmit = (evt) => {
        const 
    }

        evt.preventDefault()
        dispatch({
            type: 
        })



    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <input type ="text" name="" id="feelings" 
                onChange={evt => {setFeeling(evt.target.value)}} />
            </div>
            <div>
                <button type ="submit">Next</button>
            </div>
        </form>
        </>
    )
}