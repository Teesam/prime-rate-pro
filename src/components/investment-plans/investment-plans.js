import './investment-plans.css';
import { useState } from 'react';
import { useEffect } from 'react';


const InvestmentPlans = ({  }) => {

    const [ plans, setPlans ] = useState([]);

    useEffect( () => {
        const getAllPlans = async () => {

        }

        getAllPlans();
    }, []);

    return(
        <div id = 'investment-plans-overlay'>
            <div className = 'Investment-plans'>
                <div id = 'investment-plans-top'>
                    
                </div>
            </div>
        </div>
    )
}


export default InvestmentPlans;