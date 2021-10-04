import './loading.css';
import { BounceLoader } from 'react-spinners';


const Loading = () => {
    return(
        <div className = 'Loading'>
            <div id = 'loading-overlay'>
                <BounceLoader size = { 50 } color = 'rgb(153, 57, 1)' />
                <p id = 'wait'>Please wait</p>
            </div>
        </div>
    )
}


export default Loading;