import { useState } from 'react';
import './dashboard-info.css';
import DummyPerson from '../../asset/person-dummy.jpg';

const MobileDashboardInfo = ({ children }) => {

    const [ userInfo ] = useState({});

    return(
        <div className = 'Mobile-dashboard-info'>
            <div id = 'user-info'>
                <img id = 'user-image' src = { !userInfo ? '' : DummyPerson } alt = 'the user'/>
                <i className = 'fas fa-bell'></i>
            </div>
            { children }
        </div>
    )
}

export default MobileDashboardInfo;