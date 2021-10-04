import './nav.css';
import { useHistory } from 'react-router';

const Nav = () => {

    const history = useHistory();

    return(
        <div className = 'Nav'>
            {/* <img className = 'Logo' src = {  } alt = 'the logo' /> */}
            <h2 className = 'Logo'>Logo</h2>
            <div id = 'nav-main'>
                <ul id = 'nav-ul'>
                    <li>
                        <button className = 'Nav-item'>Invest</button>
                    </li>
                    <li>
                        <button onClick = { () => history.push('/login')} className = 'Nav-item Login'>Login</button>
                    </li>
                    <li>
                        <button onClick = { () => history.push('/register')} className = 'Nav-item Sign-up-button'>Sign Up for Free</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;