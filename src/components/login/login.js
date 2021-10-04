import './login.css';
import { useHistory } from 'react-router';
import { useState } from 'react';
import API, { apiErrorHandler, auth } from '../../api';
import Loading from '../loading/loading';
import Modal from '../modal/modal';
import CloseAlert from '../asset/close alert.png';
import { SET_TOKEN } from '../../redux/constants/constants';
import { connect } from 'react-redux';


const Login = ({ dispatch }) => {

    
    const [ loading, setLoading ] = useState(false);
    const [ unsuccessfulModalSwitch, setUnsuccessfulModalSwitch ] = useState(false);
    const [ loginObject, setLoginObject ] = useState({
        email: "",
        password: ""

    })

    const loginHandler = async () => {
        try{
            const response = await auth.login(loginObject);
            const token = response.data.auth.token;
            if(response.data.role == 'super_admin'){
                dispatch({ type: SET_TOKEN, payload: token });
                history.push('/admin');
                setLoading(false);
                API.http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            }
        }catch(error){
            const { message } = apiErrorHandler(error);
            setLoading(false);
            setUnsuccessfulModalSwitch(true);
            setLoginObject({
                ...setLoginObject, email: '', password: ''
            })
        }
    }

    const history = useHistory();

    return(
        <div className = 'Register'>
            <div id = 'logo-holder'>
                <h2 onClick = { () => history.push('/')} id = 'logo'>Logo</h2>
            </div>
            <div id = 'form-holder'>
                <h2>Login</h2>
                <div>
                    <p>Don't have an account?</p>
                    <button onClick = { () => history.push('/register')} className = 'Nav-item Login'>Sign up here</button>
                </div>
                <form id = 'register-form' onSubmit = { e => e.preventDefault() }>
                    <div className = 'Input-holder'>
                        <label>Email Address</label>
                        <input
                            onChange = { (e) => {
                                setLoginObject({
                                    ...loginObject, email: e.target.value
                                })
                            }}
                            className = 'Input' 
                            type = 'text' 
                            placeholder = 'e.g example@gmail.com' 
                        />
                    </div>
                    <div className = 'Input-holder'>
                        <label>Password</label>
                        <input 
                            onChange = { (e) => {
                                setLoginObject({
                                    ...loginObject, password: e.target.value
                                })
                            }}
                            className = 'Input' 
                            type = 'password' 
                            placeholder = 'Password' />
                    </div>
                    
                    <button 
                        onClick = { () => {
                            loginHandler();
                            setLoading(true);
                            // console.log(loginObject);
                        }} 
                        id = 'register-button'
                    >
                        Proceed to Dashboard
                    </button>
                </form>
            </div>


            {
                unsuccessfulModalSwitch ? 
                <Modal>
                    <img src = { CloseAlert } alt = 'an error alert illustration' />
                    <p id = 'modal-unsuccessful-text'>Sign in not successful. Please enter the right credentials.</p>
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

const mapStateToProps = ( state ) => {
    return{

    }
}

export default connect(mapStateToProps)(Login);