import { useState } from 'react';
import './dashboard-info.css';
import DummyPerson from '../../asset/person-dummy.jpg';

const DashboardInfo = ({ children, id, style }) => {

    const [ userInfo ] = useState({});

    return(
        <div style = { style } id = { id } className = 'Dashboard-info'>
            <div id = 'user-info'>
                <img id = 'user-image' src = { !userInfo ? '' : DummyPerson } alt = 'the user'/>
                <i className = 'fas fa-bell'></i>
            </div>
            { children }
        </div>
    )
}

export default DashboardInfo;