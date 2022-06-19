import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function SuccessForm(){
    //let's you go to the next page 
    const history = useHistory();

    // in order to use dispatch    
    const dispatch = useDispatch();

    // reset data to it's default state
    const resetData = () => {

        dispatch({
            type: 'RESET_DATA'
        })

        history.push('/')
    }


    return(
        <div>
            
            <h1>Thank You!</h1>
            
            <button onClick={resetData}>Leave New Feedback</button>
        </div>
        
    )

}

export default SuccessForm;