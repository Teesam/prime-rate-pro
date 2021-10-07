import DashboardInfo from './dashboard-info/dashboard-info';
import DashboardNav from './dashboard-nav/dashboard-nav';
import './dashboard.css';
import Footer from '../footer/footer';
import { useState } from 'react';
import InvestmentPlans from '../investment-plans/investment-plans';
import { useHistory } from 'react-router';
const Dashboard = ({ token }) => {


    const history = useHistory();

    const [ makeInvestment, setMakeInvestment ] = useState(false);

    return(
        <div className = 'Create-investment'>
            <div>

                <DashboardNav />

                <div id = 'dashboard-content'>
                    <h3>Dashboard</h3>
                </div>

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


export default Dashboard;