import  './mobile-nav.css';


const MobileNav = ({ onClick, showMenu }) => {
    

    return(
        <div
                onClick = { onClick }
                id = 'hambugger'
            >
                <div id = { showMenu === false ? 'ham1' : 'ham1-alt' }></div>
                <div id = { showMenu === false ? 'ham2' : 'ham2-alt' }></div>
                <div id = { showMenu === false ? 'ham3' : 'ham3-alt' }></div>
            </div>
    )
}

export default MobileNav;