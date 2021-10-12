import { useHistory } from 'react-router';
import './admin-nav.css';
import Logo from '../../asset/logo.png';

const AdminNavProfile = () => {

    const history = useHistory();

    return(
        <div className = 'Dashboard-nav'>
            <div>
                <img className = 'Logo' src = { Logo } alt = 'the logo' />
                <ul id = 'dashboard-ul'>
                    <li onClick = { () => history.push('/admin')}>
                        <i className = 'fas fa-columns'></i>
                        <button className = 'Dash-nav-button'>Dashboard</button>
                    </li>
                    <li onClick = { () => history.push('/admin/investors')}>
                        <i className = 'fas fa-compact-disc'></i>
                        <button className = 'Dash-nav-button'>Investors</button>
                    </li>
                    <li onClick = { () => history.push('/admin/createinvestment')}>
                        <i className = 'fas fa-plus'></i>
                        <button className = 'Dash-nav-button'>Create Investment</button>
                    </li>
                    <li onClick = { () => history.push('/admin/profile')} id = 'dash-active'>
                        <i id = 'dash-active-icon' className = 'fas fa-user-circle'></i>
                        <button id = 'dash-active-button' className = 'Dash-nav-button'>Profile</button>
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

export default AdminNavProfile;