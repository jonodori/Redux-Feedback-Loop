import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';



const ReviewForm = () => {
    const history = useHistory;

    const feeling = useSelector(store => store.addFeeling)
    const understanding = useSelector(store => store.addUnderstanding);
    const supported = useSelector(store => store.addSupported);
    const comments = useSelector(store => store.addUnderstanding);


}

export default ReviewForm;