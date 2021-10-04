import DashboardInfo from '../dashboard-info/dashboard-info';
import DashboardNavProfile from '../dashboard-nav/dashboard-nav-profile';
import './profile.css';
import Footer from '../../footer/footer';
import { useState } from 'react';
import InvestmentPlans from '../../investment-plans/investment-plans';

const Profile = () => {
    
    const [ makeInvestment, setMakeInvestment ] = useState(false);

    return(
        <div className = 'Create-investment'>
            <div>

                <DashboardNavProfile />

                <div id = 'profile-content'>
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