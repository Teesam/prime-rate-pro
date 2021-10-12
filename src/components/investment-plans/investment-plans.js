import DashboardInfo from '../dasboard/dashboard-info/dashboard-info';
import DashboardNav from '../dasboard/dashboard-nav/dashboard-nav';
import '../dasboard/dashboard.css';
import './investment-plans.css';
import Footer from '../footer/footer';
import { useState, useEffect } from 'react';
import { apiErrorHandler, userRequest } from '../../api';
import Loading from '../loading/loading';
import { Redirect, useHistory } from 'react-router';
import { connect } from 'react-redux';
import MobileDashboardInfo from '../dasboard/dashboard-info/mobile-dashboard-inof';
import Logo from '../asset/logo.png';

const InvestmentPlans = ({ dispatch }) => {

    const history = useHistory();

    const [ goToPay, setGoTOPay ] = useState(false);
    const [ plans, setPlans ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ showMenu, setShowMenu ] = useState(false);

    useEffect( () => {

        const getAllPlans = async () => {
            try{
                const response = await userRequest.getAllPlans();
                setPlans(response.docs);
                setLoading(true);
            }catch(error){
                const { message } = apiErrorHandler(error);
                console.log(message);
            }
        }

        getAllPlans();
    }, []);



    const investHandler = async (id, payload) => {
        try{
            const response = await userRequest.invest(id, payload);
            const route = response.data.instrument.action;
            let url = '';
            window.location.replace(route);
            
        }catch(error){
            const { message } = apiErrorHandler(error);
            console.log(message);
        }
    }



    return(
        <div className = 'Create-investment'>
            <div>
                
                <img className = 'Mobile-dashboard-logo' src = { Logo } alt = 'the logo' />
                
                <div className = 'Mobile-top-blocker'></div>

                <DashboardNav />

                <div id = 'dashboard-content'>

                    <h3 id = 'profile-title'>Investment Plans</h3>
                    <div id = 'plans-holder'>

                        {
                            plans?.length > 0 && plans.map( (plan, index) => {
                                return  <div className = 'Plan' key = { index }>
                                        <div id = 'plans-overlay'></div>
                                            <div className = 'Plans-details'>   
                                                <p className = 'Plan-name'>{ plan.name }</p>
                                                <p className = 'Plan-price'>{ `${'N' + plan.price}` }</p>
                                                <p className = 'Plan-interest-rate'>{ `${plan.interestRate + '%'}` }</p>
                                                <p className = 'Plan-tenure'>{ `${'Tenor of' + ' ' + plan.tenor + ' ' + 'days'}` }</p>
                                            </div>
                                            <button
                                                onClick = { () => {
                                                    investHandler(plan.id, { slots: 1, description: 'Test description'})
                                                }}
                                                className = 'Invest-button'
                                            >
                                                Invest
                                            </button>
                                        </div>
                            })
                    }
                    
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
                                history.push('/dashboard')
                            }}
                            id = 'make-investment'
                        >
                            <i id = 'invest-icon' className = 'fas fa-hand-holding-usd'></i>
                            <p>Active Plans</p>
                        </div>
                        <button 
                            onClick = { () =>{ 
                                history.push('/');
                                localStorage.removeItem('token');
                                dispatch({ type: 'LOGOUT' })
                            }} 
                            id = 'dashboard-info-logout'
                        >
                            <i id = 'logout-icon' className = 'fas fa-power-off'></i>
                            <p>Logout</p>
                        </button>
                    </MobileDashboardInfo>

                    : ''
                }

                <DashboardInfo>
                    <div 
                        onClick = { () => {
                            history.push('/dashboard')
                        }}
                        id = 'make-investment'
                    >
                        <i id = 'invest-icon' className = 'fas fa-hand-holding-usd'></i>
                        <p>Active Plans</p>
                    </div>
                </DashboardInfo>

            </div>

            <Footer />

            {
                goToPay == true ?

                <Redirect to = '' />

                : ''
            }

            
            {
                !loading ?

                <Loading />

                : ''
            }

        </div>
    )
}


const mapStateToProps = (state) => {
    console.log(state)
}

export default connect(mapStateToProps)(InvestmentPlans);