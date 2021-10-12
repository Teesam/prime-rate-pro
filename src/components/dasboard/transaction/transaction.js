import DashboardInfo from '../dashboard-info/dashboard-info';
import DashboardNavTransaction from '../dashboard-nav/dashboard-nav-transaction';
import './transaction.css';
import Footer from '../../footer/footer';
import { useState } from 'react';
import InvestmentPlans from '../../investment-plans/investment-plans';
import MobileDashboardInfo from '../dashboard-info/mobile-dashboard-inof';
import { useHistory } from 'react-router';

const Transaction = () => {

    const history = useHistory();
    const [ makeInvestment, setMakeInvestment ] = useState(false);
    const [ showMenu, setShowMenu ] = useState(false);


    return(
        <div className = 'Transaction'>
            <div>
                <DashboardNavTransaction />

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