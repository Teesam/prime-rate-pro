import './investment-plans.css';
import { useState, useEffect } from 'react';
import { apiErrorHandler, userRequest } from '../../api';
import Loading from '../loading/loading';


const InvestmentPlans = ({ onClick }) => {

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

    const investHandler = async (payload) => {
        try{
            const response = await userRequest.invest(payload);
            console.log(response);
        }catch(error){
            const { message } = apiErrorHandler(error);
        }
    }

    return(
        <div id = 'investment-plans-overlay'>
            <div className = 'Investment-plans'>
                <div id = 'investment-plans-holder'>
                    <div id = 'close-icon-holder'>
                        <i onClick = { onClick } id = 'exit-icon' className = 'fas fa-times'></i>
                    </div>
                    {
                        plans?.length > 0 && plans.map( (plan, index) => {
                            return  <div className = 'Plan' key = { index }>
                                    <div id = 'plans-overlay'></div>
                                        <div className = 'Plans-details'>   
                                            <p className = 'Plan-name'>{ plan.name }</p>
                                            <p className = 'Plan-price'>{ `${'N' + plan.price}` }</p>
                                            <p className = 'Plan-interest-rate'>{ `${plan.interestRate + '%'}` }</p>
                                            <p className = 'Plan-tenure'>{ `${'Tenure of' + ' ' + plan.tenor + ' ' + 'months'}` }</p>
                                        </div>
                                        <button 
                                            onClick = { () => {
                                                console.log(plan.id)
                                                investHandler(plan.id)
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

            {
                !loading ?

                <Loading />

                : ''
            }
        </div>
    )
}


export default InvestmentPlans;