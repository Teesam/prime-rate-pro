import DashboardInfo from './dashboard-info/dashboard-info';
import DashboardNav from './dashboard-nav/dashboard-nav';
import './dashboard.css';
import Footer from '../footer/footer';

const Dashboard = () => {
    return(
        <div className = 'Dashboard'>
            <div>

                <DashboardNav />
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

export default Dashboard;