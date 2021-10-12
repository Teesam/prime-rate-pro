import { useState } from 'react';
import './dashboard-info.css';
import DummyPerson from '../../asset/person-dummy.jpg';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const MobileDashboardInfo = ({ children, dispatch }) => {

    const history = useHistory();

    const [ userInfo ] = useState({});

    return(
        <div className = 'Mobile-dashboard-info'>
            <div id = 'user-info'>
                <img id = 'user-image' src = { !userInfo ? '' : DummyPerson } alt = 'the user'/>
                <i className = 'fas fa-bell'></i>
            </div>
            { children }
            <button 
                onClick = { () =>{ 
                    history.push('/');
                    localStorage.clear();
                    dispatch({ type: 'LOGOUT' })
                }} 
                id = 'dashboard-info-logout'
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

export default connect(mapStateToProps)(MobileDashboardInfo);