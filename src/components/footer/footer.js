import './footer.css';

const Footer = () => {
    return(
        <div className = 'Footer'>
            <div>
                ©PrimeRate Pro 2021 
            </div>
            <div>
                <p className = 'Footer-sub-item'>Terms and conditions</p>
                <p className = 'Footer-sub-item'>Privacy policy</p>
                <p className = 'Footer-sub-item'>FAQs</p>
                <p className = 'Footer-sub-item'>Testimonials</p>
            </div>
            <div>
                <i className = 'fab fa-facebook-f Footer-icon'></i>
                <i className = 'fab fa-instagram Footer-icon'></i>
                <i className = 'fab fa-twitter Footer-icon'></i>
            </div>
        </div>
    )
}

export default Footer;