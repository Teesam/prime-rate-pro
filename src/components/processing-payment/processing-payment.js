import './processing-payment.css';
import Nav from '../nav/nav';
import { useHistory } from 'react-router';
import Logo from '../asset/logo.png';


const PaymentProcessing = () => {

    const history = useHistory();

    return(
        <div className = 'Confirm-email'>
            <div id = 'confirm-email-logo-holder'>
                <img className = 'Logo' src = { Logo } alt = 'the logo' />
            </div>
            {/* <Nav /> */}

            <div id = 'confirm-email-holder'>
                <i id = 'sync-icon' className = 'fas fa-sync-alt'></i>
                <h2 id ='profile-title'>Payment Processing</h2>
                <p>Transaction list will be populated when payment processing is completed.</p>
                <button onClick = { () => history.push('/dashboard')} id = 'register-button'>Proceed to dashboard</button>
            </div>

        </div>
    )
}


export default PaymentProcessing;