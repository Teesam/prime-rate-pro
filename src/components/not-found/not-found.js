import './not-found.css';
import NotFoundImage from '../asset/not-found.jpg';
import Logo from '../asset/logo.png';

const NotFound = () => {
    return(
        <div className = 'Not-found'>
            <img id = 'not-found-logo' src = { Logo } alt = 'the logo' />
            <img id = 'not-found-background' src = { NotFoundImage } alt = 'an image' />
        </div>
    )
}

export default NotFound;