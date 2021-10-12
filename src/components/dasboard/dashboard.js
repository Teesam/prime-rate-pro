import DashboardInfo from './dashboard-info/dashboard-info';
import DashboardNav from './dashboard-nav/dashboard-nav';
import './dashboard.css';
import Footer from '../footer/footer';
import { useState } from 'react';
import InvestmentPlans from '../investment-plans/investment-plans';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import MobileDashboardInfo from './dashboard-info/mobile-dashboard-inof';


const Dashboard = ({ token }) => {

    const history = useHistory();

    const [ makeInvestment, setMakeInvestment ] = useState(false);
    const [ strokeDashOffsetValue ] = useState(251);
    const [ daysLeft ] = useState(2);
    const [ showMenu, setShowMenu ] = useState(false);

    let subtractValue = strokeDashOffsetValue / daysLeft;


    return(
        <div className = 'Create-investment'>
            <div>

                <DashboardNav 
                    onClick = { () => setShowMenu(false)}
                />

                <div onClick = { () => setShowMenu(false)} id = 'dashboard-content'>
                    <h3 id = 'profile-title'>Dashboard</h3>

                    <h5>My active plans</h5>
                    <div className = 'Active-plan'>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div id = 'svg-holder'>
                            <svg xmlns = 'http://www.w3.org/2000/svg' version = '1.1' height="100" width="100">
                                <circle 
                                    cx="50" cy="50" r="40" 
                                    stroke="rgb(153, 57, 1)" 
                                    stroke-width="20px" 
                                    fill="none" 
                                    strokeDasharray = '251' 
                                    strokeDashoffset = { strokeDashOffsetValue - subtractValue }
                                />
                            </svg>
                        </div>
                    </div>
                </div>


                <div
                    className = { showMenu == true ? 'Move-left' : '' }
                    id = 'navigate-dash-info' 
                    onClick = { () => setShowMenu(!showMenu) }
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
                            history.push('/dashboard/investmentplans')
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

const mapStateToProps = ( state ) => {
    console.log(state)
}


export default connect(mapStateToProps)(Dashboard);