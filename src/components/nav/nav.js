import './nav.css';
import { useHistory } from 'react-router';
import { useState } from 'react';
import MobileNav from '../mobile-nav/mobile-nav';

const Nav = () => {

    const history = useHistory();
    const [ showMenu, setShowMenu ] = useState(false);

    return(
        <div className = 'Nav'>
            {/* <img className = 'Logo' src = {  } alt = 'the logo' /> */}
            <h2 className = 'Logo'>Logo</h2>

           
            <div id = 'nav-main'>
                <ul id = 'nav-ul'>
                    <li>
                        <button onClick = { () => history.push('/')} className = 'Nav-item'>Home</button>
                    </li>
                    <li>
                        <button className = 'Nav-item'>Investment Plans</button>
                    </li>
                    <li>
                        <button onClick = { () => history.push('/login')} className = 'Nav-item Login'>Login</button>
                    </li>
                    <li>
                        <button onClick = { () => history.push('/register')} className = 'Nav-item Sign-up-button'>Sign Up for Free</button>
                    </li>
                </ul>
            </div>

            <MobileNav 
                onClick = { () => setShowMenu(!showMenu)}
                showMenu = { showMenu }
            />

            {
                showMenu ?

                <div id = 'ham-menu'>
                        <li>
                            <button onClick = { () => history.push('/')} className = 'Nav-item'>.Home</button>
                        </li>
                        <li>
                            <button className = 'Nav-item'>.Investment Plans</button>
                        </li>
                        <li>
                            <button onClick = { () => history.push('/login')} className = 'Nav-item Login'>.Login</button>
                        </li>
                        <li>
                            <button id = 'sign-up' onClick = { () => history.push('/register')} className = 'Nav-item Sign-up-button'>.Sign Up for Free</button>
                        </li>
                </div>
                : ''
            }
        </div>
    )
}

export default Nav;