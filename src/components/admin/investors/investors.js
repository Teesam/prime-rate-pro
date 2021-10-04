import DashboardInfo from '../../dasboard/dashboard-info/dashboard-info';
import './investors.css';
import Footer from '../../footer/footer';
import AdminNavInvestors from '../admin-nav/admin-nav-investors';

const AdminInvestors = () => {
    return(
        <div className = 'Create-investment'>
            <div>

                <AdminNavInvestors />

                <div id = 'dashboard-content'>
                    <h3>Dashboard</h3>
                </div>
                  
                <DashboardInfo>
                    <div id = 'make-investment'>
                        <i id = 'invest-icon' className = 'fas fa-hand-holding-usd'></i>
                        <p>Make new investment</p>
                    </div>
                </DashboardInfo>

            </div>

            <Footer />
        </div>
    )
}

export default AdminInvestors;