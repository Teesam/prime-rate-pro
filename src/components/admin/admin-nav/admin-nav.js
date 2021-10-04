import { useHistory } from 'react-router';
import { LOGOUT } from '../../../redux/constants/constants';
import './admin-nav.css';
import { connect } from 'react-redux';

const AdminNav = ({ dispatch }) => {

    const history = useHistory();

    return(
        <div className = 'Dashboard-nav'>
            <div>
                <h2>LOGO</h2>
                <ul id = 'dashboard-ul'>
                    <li onClick = { () => history.push('/admin')} id = 'dash-active'>
                        <i id = 'dash-active-icon' className = 'fas fa-columns'></i>
                        <button id = 'dash-active-button' className = 'Dash-nav-button'>Dashboard</button>
                    </li>
                    <li onClick = { () => history.push('/admin/investors')}>
                        <i className = 'fas fa-compact-disc'></i>
                        <button className = 'Dash-nav-button'>Investors</button>
                    </li>
                    <li onClick = { () => history.push('/admin/createinvestment')}>
                        <i className = 'fas fa-plus'></i>
                        <button className = 'Dash-nav-button'>Create Investment</button>
                    </li>
                    <li onClick = { () => history.push('/admin/profile')}>
                        <i className = 'fas fa-user-circle'></i>
                        <button className = 'Dash-nav-button'>Profile</button>
                    </li>
                </ul>
            </div>
            <button 
                onClick = { () => {
                    dispatch({ type: LOGOUT })
                    history.push('/');
                }}
                id = 'dashboard-logout'
            >
                <i id = 'logout-icon' className = 'fas fa-power-off'></i>
                <p>Logout</p>
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{

    }
}

export default connect(mapStateToProps)(AdminNav);