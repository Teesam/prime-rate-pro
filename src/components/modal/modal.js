import './modal.css';


const Modal = ({ title, children, onClose, id }) => {
    return(
        <div id = 'modal-overlay'>
            <div className = 'Modal'>
                <div id = 'modal-top'>
                    <h4 id = { id }>{title}</h4>
                </div>
               {children}
            </div>
        </div>
    )
}


export default Modal;