import './investment-plans.css';
import { useState } from 'react';
import { useEffect } from 'react';
import api, { apiErrorHandler, userRequest } from '../../api';


const InvestmentPlans = ({ onClick }) => {

    const [ plans, setPlans ] = useState([]);

    useEffect( () => {

        const getAllPlans = async () => {
            try{
                const response = await userRequest.getAllPlans();
                console.log(response);
                setPlans(response.docs);
            }catch(error){
                const { message } = apiErrorHandler(error);
            }
        }

        getAllPlans();
    }, []);

    return(
        <div id = 'investment-plans-overlay'>
            <div className = 'Investment-plans'>
                <div id = 'investment-plans-top'>
                    <div id = 'close-icon-holder'>
                        <i onClick = { onClick } id = 'exit-icon' className = 'fas fa-times'></i>
                    </div>
                    {
                        plans?.length > 0 && plans.map( (plan, index) => {
                            return  <div className = 'Plan' key = { index }>
                                        { plan.name }
                                    </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default InvestmentPlans;