import DashboardInfo from '../dasboard/dashboard-info/dashboard-info';
import './admin.css';
import AdminNav from './admin-nav/admin-nav';
import Footer from '../footer/footer';

const Admin = () => {


    return(
        <div className = 'Create-investment'>
            <div>

                <AdminNav />
                    
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

export default Admin;