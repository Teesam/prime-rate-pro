import './register.css';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { apiErrorHandler, auth } from '../../api';
import Loading from '../loading/loading';
import Modal from '../modal/modal';
import CloseAlert from '../asset/close alert.png';
import Nav from '../nav/nav';

const Register = () => {

    const history = useHistory();
    const [ password, setPassword ] = useState('');
    const [ termsCheck, setTermsCheck ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ successfulModalSwitch, setSuccessfulModalSwitch ] = useState(false);
    const [ unsuccessfulModalSwitch, setUnsuccessfulModalSwitch ] = useState(false);
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ newUserData, setNewUserData ] = useState({
        email: "",
        password: password,
        client: "",
        mobilePhone: "",
        firstName: "",
        lastName: ""
    })

    const registerHandler = async () => {
        try{
            const response = await auth.register(newUserData);
            console.log(response);
            setLoading(false);
            setSuccessfulModalSwitch(true);
        }catch(error){
            const { message } = apiErrorHandler(error);
            setLoading(false);
            setUnsuccessfulModalSwitch(true);
            setNewUserData({ 
                ...newUserData, mobilePhone: '', password: '', email: '', firstName: '', lastName: ''
            });
            setPassword('');
            setConfirmPassword('');
        }
    }

    return(
        <div className = 'Register'>
            <div id = 'logo-holder'>
                {/* <h2 onClick = { () => history.push('/')} id = 'logo'>Logo</h2> */}
                <Nav />
            </div>
            <div id = 'form-holder'>
                <h2>Create Your Free Account</h2>
                <div>
                    <p>Already have an account?</p>
                    <button onClick = { () => history.push('/login')} id = 'login'>Login</button>
                </div>
                <form id = 'register-form' onSubmit = { e => e.preventDefault()}>
                    <div className = 'Input-holder'>
                        <label>First Name</label>
                        <input
                            onChange = { (e) => {
                                setNewUserData({ 
                                    ...newUserData, firstName: e.target.value
                                })
                            }}
                            className = 'Input' type = 'text' placeholder = 'First name' />
                    </div>
                    <div className = 'Input-holder'>
                        <label>Last Name</label>
                        <input
                            onChange = { (e) => {
                                setNewUserData({ 
                                    ...newUserData, lastName: e.target.value
                                })
                            }}
                            className = 'Input' type = 'text' placeholder = 'Last name' />
                    </div>
                    <div className = 'Input-holder'>
                        <label>Email Address</label>
                        <input
                            onChange = { (e) => {
                                setNewUserData({ 
                                    ...newUserData, email: e.target.value
                                })
                            }}
                            className = 'Input' 
                            type = 'text' 
                            placeholder = 'e.g example@gmail.com' />
                    </div>
                    <div className = 'Input-holder'>
                        <label>Phone Number</label>
                        <input
                            onChange = { (e) => {
                                setNewUserData({ 
                                    ...newUserData, mobilePhone: e.target.value
                                })
                            }}
                            className = 'Input' type = 'number' placeholder = '081 300 000 00'
                        />
                    </div>
                    <div className = 'Input-holder'>
                        <label>Password</label>
                        <input 
                            onChange = { (e) => {
                                setPassword( e.target.value )
                            }}
                            className = 'Input' type = 'password' placeholder = 'Password' 
                        />
                    </div>
                    <div className = 'Input-holder'>
                        <label>Confirm Password</label>
                        <input
                            onChange = { (e) => {
                                if(password === e.target.value){
                                    setNewUserData({
                                        ...newUserData, password: e.target.value
                                    });
                                    setConfirmPassword(e.target.value);
                                }
                            }}
                            style = { password !== confirmPassword ? { border: ' 1px solid red ' } : {} }
                            className = 'Input' type = 'password' placeholder = 'Confirm password'
                        />
                    </div>
                    <div className = 'Checkbox-input-holder'>
                        <input 
                            onChange = { () => {
                                setTermsCheck(!termsCheck);
                            }}
                            type = 'checkbox' 
                            className = 'Register-check-box'
                        />
                        <label>I have read and accepted the Terms and Conditions of trading with PrimeRate Pro</label>
                    </div>
                    <button 
                        onClick = { (e) => {
                            e.preventDefault()
                            registerHandler();
                            console.log(newUserData)
                            setLoading(true);
                        }}
                        id = 'register-button'
                        style = { newUserData.email == '' || newUserData.password == '' || newUserData.firstName == '' || newUserData.lastName == '' || newUserData.mobilePhone == '' ? { opacity: '0.4' } : {} }
                    >
                        Create Account
                    </button>
                </form>
            </div>

            {
                successfulModalSwitch == true ? 
                <Modal onClick = { () => {
                    setSuccessfulModalSwitch(false);
                }}>
                    <h2 id = 'modal-successful-text'>Account created. <br /> Verify Email</h2>
                    <p>An email has been sent to your mailbox.<br /> Kindly click the verification link in your mail to continue.</p>
                    <button 
                        id = 'register-modal-button'
                        onClick = { () => {
                            history.push('/');
                        }} 
                    >
                        Proceed
                    </button>
                </Modal>
                : ''
            }

            {
                unsuccessfulModalSwitch ? 
                <Modal>
                    <img src = { CloseAlert } alt = 'an error alert illustration' />
                    <p id = 'modal-unsuccessful-text'>Account created not successful. Please try again.</p>
                    <button 
                        id = 'register-modal-button'
                        onClick = { () => {
                            setUnsuccessfulModalSwitch(false);
                        }} 
                    >
                        Close
                    </button>
                </Modal>
                : ''
            }

            { 
                loading ?

                <Loading />

                : ''
            }
        </div>
    )
}

export default Register;