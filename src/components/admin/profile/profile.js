import DashboardInfo from '../../dasboard/dashboard-info/dashboard-info';
import './profile.css';
import Footer from '../../footer/footer';
import AdminNavProfile from '../admin-nav/admin-nav-profile';

const AdminProfile = () => {
    return(
        <div className = 'Dashboard'>
            <div>

                <AdminNavProfile />
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

export default AdminProfile;