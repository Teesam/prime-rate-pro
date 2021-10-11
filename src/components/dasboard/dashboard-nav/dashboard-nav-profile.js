import { useHistory } from 'react-router';
import './dashboard-nav.css';
import { connect } from 'react-redux';

const DashboardNavProfile = ({ onClick, dispatch }) => {

    const history = useHistory();

    return(
        <div onClick = { onClick } className = 'Dashboard-nav'>
            <div>
                <div id = 'dashboard-top-holder'>
                    <h2 id = 'dashboard-logo'>LOGO</h2>
                    <button 
                        onClick = { () =>{ 
                            history.push('/');
                            localStorage.removeItem('token');
                            dispatch({ type: 'LOGOUT' })
                        }} 
                        id = 'dashboard-top-logout'
                    >
                        <i id = 'logout-icon' className = 'fas fa-power-off'></i>
                        Logout
                    </button>
                </div>
                <ul id = 'dashboard-ul'>
                    <li onClick = { () => history.push('/dashboard')}>
                        <i className = 'fas fa-columns'></i>
                        <button className = 'Dash-nav-button'>Dashboard</button>
                    </li>
                    <li onClick = { () => history.push('/dashboard/transaction')}>
                        <i className = 'fas fa-compact-disc'></i>
                        <button className = 'Dash-nav-button'>Transaction</button>
                    </li>
                    <li onClick = { () => history.push('/dashboard/profile')} id = 'dash-active'>
                        <i  id = 'dash-active-icon' className = 'fas fa-user-circle'></i>
                        <button id = 'dash-active-button' className = 'Dash-nav-button'>Profile</button>
                    </li>
                </ul>
            </div>
            <button 
                onClick = { () =>{ 
                history.push('/');
                localStorage.removeItem('token');
                dispatch({ type: 'LOGOUT' })
                }} 
                id = 'dashboard-bottom-logout'
            >
                <i id = 'logout-icon' className = 'fas fa-power-off'></i>
                <p>Logout</p>
            </button>
        </div>
    )
}

const mapStateToProps = ( state ) => {
    return{
        state
    }
}

export default connect(mapStateToProps)(DashboardNavProfile);