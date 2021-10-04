import DashboardInfo from '../dashboard-info/dashboard-info';
import DashboardNavTransaction from '../dashboard-nav/dashboard-nav-transaction';
import './transaction.css';
import Footer from '../../footer/footer';

const Transaction = () => {
    return(
        <div className = 'Transaction'>
            <div>
                <DashboardNavTransaction />

                <DashboardInfo />

            </div>

            <Footer />
        </div>
    )
}

export default Transaction;