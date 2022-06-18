import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from 'react-router-dom';


const SupportedForm = () => {
    //let's you go to the next page 
    const history = useHistory();

    // in order to use dispatch    
    const dispatch = useDispatch();

    //state is empty value 
    const [supported, setSupported] = useState(1);

    const onAddSupported = (evt) => {
        
        evt.preventDefault()
        dispatch({
            type: 'ADD_SUPPORTED',
            payload: {
                supported,
            }
        })

        history.push('/comments')
    }


    return (
        <>
        <h2>How well are you being supported?</h2>
        <form onSubmit={onAddSupported}>
            <div>
                <label>
                    <input
                        type="range"
                        min="1"
                        max="10"
                        value={supported}
                        onChange={evt => setSupported(Number(evt.target.value))}
                        />
                </label>
                    {supported}
            </div>
            <div>
                <button type ="submit">Next</button>
            </div>
                
        </form>
        </>
    )
}

export default SupportedForm;