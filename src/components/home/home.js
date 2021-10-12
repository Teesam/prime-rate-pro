import './home.css';
import Nav from '../nav/nav';
import Hero from '../asset/Hero\ Image.png';
import Ball from '../asset/ball.png';
import Money from '../asset/money.png';
import Shield from '../asset/shield.png';
import Thumb from '../asset/thumb.png';
import Promises from './promises/promises';
import JourneyImage from '../asset/phone.png';
import Footer from '../footer/footer';
import { useHistory } from 'react-router';

const Home = () => {

    const history = useHistory();

    return(
        <div className = 'Home'>
            <Nav />

            <div id = 'top-blocker'></div>

            <header id = 'home-header'>
                <div id = 'header-top'>
                    <div id = 'header-left'>
                        <h1 id = 'header-statement'>Get up to <br /> 11.5% ROI <br /> monthly</h1>
                        <h3>Let your money work for you!</h3>
                        <button onClick = { () => history.push('/register')} id  = 'header-button' className = 'Sign-up-button'>Sign Up for Free</button>
                    </div>
                    <div id = 'header-right'>
                        <div id = 'header-image-holder'>
                            <img id = 'header-image' src = { Hero } alt = 'An image' />
                            <img id = 'ball-image' src = { Ball } alt = 'An image' />
                            <img id = 'money-image' src = { Money } alt = 'An image' />
                        </div>
                    </div>
                </div>
                <div id = 'header-bottom'>
                    <div id = 'header-bottom-left'>
                        <p>Investment Trusted <br /> All Over Nigeria</p>
                    </div>
                    <div id = 'header-bottom-right'>
                        <div>
                            <img className = 'Icon-image' src = { Shield } alt = 'An image' />
                            <h3>100% Secure</h3>
                        </div>
                        <div>
                            <img className = 'Icon-image' src = { Thumb } alt = 'An image' />
                            <h3>ROI Guaranteed</h3>
                        </div>
                    </div>
                </div>
            </header>

            <Promises />

            <div id  = 'investment-journey'>
                <h1 id = 'journey-header'>Start Your Investment Journey <br /> In 4 Easy Steps.</h1>
                <div id  = 'journey-content'>
                    <img id = 'journey-image' src = { JourneyImage } alt = 'a phone' />
                    <div>
                        <div className = 'Journey-text'>
                            <div className = 'Journey-content-header-holder'>
                                <h3>Create a free account</h3>
                                <p className = 'Step'>01</p>
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                            </p>
                        </div>
                        <div className = 'Journey-text'>
                            <div className = 'Journey-content-header-holder'>
                                <h3>Add a payment method</h3>
                                <p className = 'Step'>02</p>
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                            </p>
                        </div>
                        <div className = 'Journey-text'>
                            <div className = 'Journey-content-header-holder'>
                                <h3>Choose an investment</h3>
                                <p className = 'Step'>03</p>
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                            </p>
                        </div>
                        <div className = 'Journey-text'>
                            <div className = 'Journey-content-header-holder'>
                                <h3>Watch your money grow</h3>
                                <p className = 'Step'>04</p>
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id = 'investment-action'>
                <h2>Make your money move. <br /> Start with as little as N50,000</h2>
                <div>
                    <button id = 'see-plans-button'>See investment plans</button>
                </div>
            </div>

            <div className = 'Home-footer'>
                <div>
                    <p>©PrimeRate Pro 2021</p>
                </div>
                <div>
                    <p className = 'Footer-sub-item'>Terms and conditions</p>
                    <p className = 'Footer-sub-item'>Privacy policy</p>
                    <p className = 'Footer-sub-item'>FAQs</p>
                    <p className = 'Footer-sub-item'>Testimonials</p>
                </div>
                <div id = 'socials-holder'>
                    <i className = 'fab fa-facebook-f Footer-icon'></i>
                    <i className = 'fab fa-instagram Footer-icon'></i>
                    <i className = 'fab fa-twitter Footer-icon'></i>
                </div>
            </div>
        </div>
    )
}

export default Home;