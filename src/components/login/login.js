import './login.css';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { apiErrorHandler, auth } from '../../api';
import Loading from '../loading/loading';
import Modal from '../modal/modal';
import CloseAlert from '../asset/close alert.png';
import { connect } from 'react-redux';
import Nav from '../nav/nav';
import { setUser, setToken } from '../../redux/auth/actions';
import Footer from '../footer/footer';


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
            console.log(response);
            const token = response.data.auth.token;
            localStorage.setItem('status', `${ response.data.status }`)
            dispatch({ type: 'SET_TOKEN', payload: token });
            dispatch({ type: 'SET_USER', payload: response.data});
            if(response.data.role == 'super_admin' && response.data.status == 'verified'){
                history.push('/dashboard');
                localStorage.setItem('role', `${ response.data.role }`)
                localStorage.setItem(`token, '${token}'`)
            }

            if(response.data.status.toLowerCase().includes('verified')){
                history.push('/dashboard');
                localStorage.setItem('token', `${token}`)
            }
        }catch(error){
            const { message } = apiErrorHandler(error);
            setUnsuccessfulModalSwitch(true);
            setLoginObject({
                ...setLoginObject, email: '', password: ''
            })
        }finally{
            setLoading(false);
        }
    }

    // const clearLocalStorage = async () => {
    //     try{
    //         const response = await localStorage.clear();
    //         loginHandler()
    //     }catch(error){
    //         const { message } = apiErrorHandler(error);
    //     }
    // }

    const history = useHistory();

    return(
        <div className = 'Register'>
            <div id = 'logo-holder'>
                {/* <h2 onClick = { () => history.push('/')} id = 'logo'>Logo</h2> */}
                <Nav />
            </div>
            
            <div id = 'top-blocker'></div>
            <div id = 'form-holder'>
                <h2>Login</h2>
                <div>
                    <p>Don't have an account?</p>
                    <button onClick = { () => history.push('/register')} id = 'login'>Sign up here</button>
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
                            // clearLocalStorage();
                            loginHandler();
                            setLoading(true);
                        }} 
                        id = 'register-button'
                    >
                        Proceed to Dashboard
                    </button>
                </form>
            </div>

            <Footer />


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
       state: state
    }
}

export default connect(mapStateToProps)(Login);