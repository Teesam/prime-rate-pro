import DashboardInfo from '../../dasboard/dashboard-info/dashboard-info';
import './create-investment.css';
import Footer from '../../footer/footer';
import AdminNavCreate from '../admin-nav/admin-nav-create-plan';
import { useState } from 'react';
import { apiErrorHandler, requests } from '../../../api';
import Loading from '../../loading/loading';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const AdminCreateInvestment = ({ token }) => {


    const history = useHistory();

    const [ loading, setLoading ] = useState(false);
    const [ createInvestmentData, setCreateInvestmentData ] = useState({
            name: "",
            slug: undefined,
            price: null,
            interestRate: null,
            tenor: null,
            coverImage: undefined,
            description: ""
    });

    const createInvestmentPlansHandler = async () => {
        try{
            const response = await requests.createInvestmentPlans(createInvestmentData);
            console.log(response);
            setLoading(false);
            history.push('/admin');
        }catch(error){
            const { message } = apiErrorHandler(error);
            console.log(message);
        }
    }

    return(
        <div className = 'Create-investment'>
            <div>

                <AdminNavCreate />

                <div id = 'profile-content'>
                    <h3 id = 'profile-title'>Create A New Investment Plan</h3>

                    <form onSubmit = { e => e.preventDefault() }>
                        <div className = 'Input-holder'>
                            <label>Investment Name</label>
                            <input 
                                onChange = { e => {
                                    setCreateInvestmentData({
                                        ...createInvestmentData, name: e.target.value
                                    });
                                }}
                                className = 'Input' 
                                type = 'text' 
                                placeholder = 'Investment name' 
                            />
                        </div>
                        <div className = 'Input-holder'>
                            <label>Price</label>
                            <input 
                                onChange = { e => {
                                    setCreateInvestmentData({
                                        ...createInvestmentData, price: Number(e.target.value)
                                    });
                                }}
                                className = 'Input' 
                                type = 'number' 
                                placeholder = 'Price' 
                            />
                        </div>
                        <div className = 'Input-holder'>
                            <label>Interest Rate</label>
                            <input 
                                onChange = { e => {
                                    setCreateInvestmentData({
                                        ...createInvestmentData, interestRate: Number(e.target.value)
                                    });
                                }}
                                className = 'Input' 
                                type = 'text' 
                                placeholder = 'Interest rate' 
                            />
                        </div>
                        <div className = 'Input-holder'>
                            <label>Tenure</label>
                            <input 
                                onChange = { e => {
                                    setCreateInvestmentData({
                                        ...createInvestmentData, tenor: Number(e.target.value)
                                    });
                                }}
                                className = 'Input' 
                                type = 'text' 
                                placeholder = 'Tenure' 
                            />
                        </div>
                        <div className = 'Input-holder'>
                            <label>Description</label>
                            <input 
                                onChange = { e => {
                                    setCreateInvestmentData({
                                        ...createInvestmentData, description: e.target.value
                                    });
                                }}
                                className = 'Input' 
                                type = 'text' 
                                placeholder = 'Description' 
                            />
                        </div>
                    </form>
                    <button 
                        onClick = { () => {
                            createInvestmentPlansHandler();
                            setLoading(true);
                            console.log(createInvestmentData);
                            console.log(token)
                        }}
                        id = 'register-button'
                    >
                        Create Plan
                    </button>
                </div>

                <DashboardInfo />

            </div>

            <Footer />

            {
                loading ?

                <Loading />

                : ''
            }
        </div>
    )
}

const mapStateToProps = ({ auth: {token}}) =>{
        return{
            token: token
        }
}

export default connect(mapStateToProps)(AdminCreateInvestment);