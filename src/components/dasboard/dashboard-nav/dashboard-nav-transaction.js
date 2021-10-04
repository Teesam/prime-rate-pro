import { useHistory } from 'react-router';
import './dashboard-nav.css';

const DashboardNavTransaction = () => {

    const history = useHistory();

    return(
        <div className = 'Dashboard-nav'>
            <div>
                <h2>LOGO</h2>
                <ul id = 'dashboard-ul'>
                    <li onClick = { () => history.push('/dashboard')}>
                        <i className = 'fas fa-columns'></i>
                        <button className = 'Dash-nav-button'>Dashboard</button>
                    </li>
                    <li onClick = { () => history.push('/dashboard/transaction')} id = 'dash-active'>
                        <i id = 'dash-active-icon' className = 'fas fa-compact-disc'></i>
                        <button id = 'dash-active-button' className = 'Dash-nav-button'>Transaction</button>
                    </li>
                    <li onClick = { () => history.push('/dashboard/profile')}>
                        <i className = 'fas fa-user-circle'></i>
                        <button className = 'Dash-nav-button'>Profile</button>
                    </li>
                </ul>
            </div>
            <button onClick = { () => history.push('/')} id = 'dashboard-logout'>
                <i id = 'logout-icon' className = 'fas fa-power-off'></i>
                <p>Logout</p>
            </button>
        </div>
    )
}

export default DashboardNavTransaction;