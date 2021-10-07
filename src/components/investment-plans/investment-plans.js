import DashboardInfo from '../dasboard/dashboard-info/dashboard-info';
import DashboardNav from '../dasboard/dashboard-nav/dashboard-nav';
import '../dasboard/dashboard.css';
import './investment-plans.css';
import Footer from '../footer/footer';
import { useState, useEffect } from 'react';
import { apiErrorHandler, userRequest } from '../../api';
import Loading from '../loading/loading';
import { useHistory } from 'react-router';

const InvestmentPlans = () => {

    const history = useHistory();

    const [ makeInvestment, setMakeInvestment ] = useState(false);    
    const [ plans, setPlans ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect( () => {

        const getAllPlans = async () => {
            try{
                const response = await userRequest.getAllPlans();
                setPlans(response.docs);
                setLoading(true);
            }catch(error){
                const { message } = apiErrorHandler(error);
            }
        }

        getAllPlans();
    }, []);



    const investHandler = async (id, payload) => {
        try{
            const response = await userRequest.invest(id, payload);
            console.log(response);
        }catch(error){
            const { message } = apiErrorHandler(error);
        }
    }



    return(
        <div className = 'Create-investment'>
            <div>

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
                                                <p className = 'Plan-tenure'>{ `${'Tenure of' + ' ' + plan.tenor + ' ' + 'days'}` }</p>
                                            </div>
                                            <button
                                                onClick = { () => {
                                                    console.log(plan.id)
                                                    investHandler(plan.id, { slot: 1})
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
                !loading ?

                <Loading />

                : ''
            }

        </div>
    )
}

export default InvestmentPlans;