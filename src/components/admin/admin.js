import DashboardInfo from '../dasboard/dashboard-info/dashboard-info';
import './admin.css';
import AdminNav from './admin-nav/admin-nav';
import Footer from '../footer/footer';
import { useState } from 'react';
import InvestmentPlans from '../investment-plans/investment-plans';

const Admin = () => {


    const [ makeInvestment, setMakeInvestment ] = useState(false);

    return(
        <div className = 'Create-investment'>
            <div>

                <AdminNav />
                    
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
                    onClick = { () => setMakeInvestment(false)}
                />

                : ''
            }
        </div>
    )
}

export default Admin;