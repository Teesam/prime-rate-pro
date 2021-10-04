import DashboardInfo from '../dashboard-info/dashboard-info';
import DashboardNavTransaction from '../dashboard-nav/dashboard-nav-transaction';
import './transaction.css';
import Footer from '../../footer/footer';
import { useState } from 'react';
import InvestmentPlans from '../../investment-plans/investment-plans';

const Transaction = () => {

    
    const [ makeInvestment, setMakeInvestment ] = useState(false);


    return(
        <div className = 'Transaction'>
            <div>
                <DashboardNavTransaction />

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

export default Transaction;