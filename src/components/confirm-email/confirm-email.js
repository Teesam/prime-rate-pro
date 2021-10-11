import './confirm-email.css';


const ConfirmEmail = () => {


    return(
        <div className = 'Confirm-email'>
            <div id = 'confirm-email-logo-holder'>
                <h1 id = 'confirm-email-logo'>LOGO</h1>
            </div>

            <div id = 'confirm-email-holder'>
                <i id = 'check-icon' className = 'fas fa-check-circle'></i>
                <h2 id ='profile-title'>Verification successful</h2>
                <button id = 'register-button'>Proceed</button>
            </div>

            <div className = 'Confirm-email-footer'>
                <div>
                    <p>©PrimeRate Pro 2021</p>
                </div>
                <div>
                    <p className = 'Footer-sub-item'>Terms and conditions</p>
                    <p className = 'Footer-sub-item'>Privacy policy</p>
                    <p className = 'Footer-sub-item'>FAQs</p>
                    <p className = 'Footer-sub-item'>Testimonials</p>
                </div>
                <div id = 'socials-holder'>
                    <i className = 'fab fa-facebook-f Footer-icon'></i>
                    <i className = 'fab fa-instagram Footer-icon'></i>
                    <i className = 'fab fa-twitter Footer-icon'></i>
                </div>
            </div>
        </div>
    )
}


export default ConfirmEmail;