import { useState } from 'react';
import './dashboard-info.css';
import DummyPerson from '../../asset/person-dummy.jpg';

const DashboardInfo = ({ children }) => {

    const [ userInfo ] = useState({});

    return(
        <div className = 'Dashboard-info'>
            <div id = 'user-info'>
                <img id = 'user-image' src = { !userInfo ? '' : DummyPerson } alt = 'the user'/>
                <i className = 'fas fa-bell'></i>
            </div>
            { children }
        </div>
    )
}

export default DashboardInfo;