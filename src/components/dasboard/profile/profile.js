import DashboardInfo from '../dashboard-info/dashboard-info';
import DashboardNavProfile from '../dashboard-nav/dashboard-nav-profile';
import './profile.css';
import { useState } from 'react';
import InvestmentPlans from '../../investment-plans/investment-plans';
import MobileDashboardInfo from '../dashboard-info/mobile-dashboard-inof';
import { useHistory } from 'react-router';
import Logo from '../../asset/logo.png';
import Footer from '../../footer/footer';

const Profile = ({ dispatch }) => {
    
    const [ makeInvestment, setMakeInvestment ] = useState(false);
    const [ showMenu, setShowMenu ] = useState(false);

    const history = useHistory();

    return(
        <div className = 'Create-investment'>
            <div>
                
                <img className = 'Mobile-dashboard-logo' src = { Logo } alt = 'the logo' />

                <div id = 'top-blocker'></div>

                <DashboardNavProfile
                    onClick = { () => setShowMenu(false)}
                />

                <div onClick = { () => setShowMenu(false)} id = 'profile-content'>
                    <h3 id = 'profile-title'>Profile Setting</h3>
                    <form>
                        <div className = 'Input-holder'>
                            <label>Full Name</label>
                            <input className = 'Input' type = 'text' placeholder = 'Full name' />
                        </div>
                        <div className = 'Input-holder'>
                            <label>Email Address</label>
                            <input className = 'Input' type = 'text' placeholder = 'e.g example@gmail.com' />
                        </div>
                        <div className = 'Input-holder'>
                            <label>Phone Number</label>
                            <input className = 'Input' type = 'number' placeholder = '081 300 000 00' />
                        </div>
                        <div className = 'Input-holder'>
                            <label>Password</label>
                            <input className = 'Input' type = 'password' placeholder = 'Password' />
                        </div>
                    </form>
                    <button id = 'register-button'>Save</button>
                </div>

                <div
                    id = 'navigate-dash-info' 
                    onClick = { () => setShowMenu(!showMenu) }
                    className = { showMenu == true ? 'Move-left' : '' }
                >
                    <i id = 'info-navigate-icon' className = { showMenu === false ? 'fas fa-chevron-left' : 'fas fa-chevron-right'}></i>
                </div>

                {
                    showMenu == true ?

                    <MobileDashboardInfo>
                        <div 
                            onClick = { () => {
                                history.push('/dashboard/investmentplans')
                            }}
                            id = 'make-investment'
                        >
                            <i id = 'invest-icon' className = 'fas fa-hand-holding-usd'></i>
                            <p>Make new investment</p>
                        </div>
                    </MobileDashboardInfo>

                    : ''
                }

                <DashboardInfo>
                    <div 
                        onClick = { () => {
                            setMakeInvestment(true);
                        }}
                        id = 'make-investment'
                    >
                        <i id = 'invest-icon' className = 'fas fa-hand-holding-usd'></i>
                        <p>Make new investment</p>
                    </div>
                </DashboardInfo>

            </div>

            <Footer />

            {
                makeInvestment ?
                
                <InvestmentPlans
                    onClick = { () => {
                        setMakeInvestment(false);
                    }}
                />

                : ''
            }
        </div>
    )
}

export default Profile;