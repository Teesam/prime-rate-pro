import DashboardInfo from '../dashboard-info/dashboard-info';
import DashboardNavProfile from '../dashboard-nav/dashboard-nav-profile';
import './profile.css';
import Footer from '../../footer/footer';

const Profile = () => {
    return(
        <div className = 'Profile'>
            <div>

                <DashboardNavProfile />

                <div id = 'profile-content'>
                    <h3 id = 'profile-title'>Profile Setting</h3>
                    <form>
                        <div className = 'Input-holder'>
                            <label>Full Name</label>
                            <input className = 'Input' type = 'text' placeholder = 'Full name' />
                        </div>
                        <div className = 'Input-holder'>
                            <label>Email Address</label>
                            <input className = 'Input' type = 'text' placeholder = 'e.g example@gmail.com' />
                        </div>
                        <div className = 'Input-holder'>
                            <label>Phone Number</label>
                            <input className = 'Input' type = 'number' placeholder = '081 300 000 00' />
                        </div>
                        <div className = 'Input-holder'>
                            <label>Password</label>
                            <input className = 'Input' type = 'password' placeholder = 'Password' />
                        </div>
                    </form>
                    <button id = 'dashboard-profile-button'>Save</button>
                </div>

                <DashboardInfo />

            </div>

            <Footer />
        </div>
    )
}

export default Profile;