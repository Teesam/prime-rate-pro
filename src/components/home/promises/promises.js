import './promises.css';
import ROIPaid from '../../asset/roi paid.jpg';
import SwiftPayment from '../../asset/swift payment.jpg';
import FlexiblePlan from '../../asset/flexible plan.jpg';
import Support from '../../asset/support.jpg';
import EasyTracking from '../../asset/easy tracking.jpg';

const Promises = () => {
    return(
        <div className = 'Promises'>
            <div>
                <div className = 'Promises-first'>
                    <div  className = 'Promises-image-holder-first'>
                        <img className = 'Promises-image' src = { ROIPaid } alt = 'roi payment pictorial representation' />
                    </div>
                </div>
                <div className = 'Promises-second-word'>
                    <h2>ROI Paid Duely</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
                </div>
            </div>
            <div>
                <div className = 'Promises-first-word'>
                    <h2>Swift Payment</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
                </div>
                <div className = 'Promises-second'>
                    <div  className = 'Promises-image-holder-second'>
                        <img className = 'Promises-image' src = { SwiftPayment } alt = 'roi payment pictorial representation' />
                    </div>
                </div>
            </div>
            <div>
                <div className = 'Promises-first'>
                    <div  className = 'Promises-image-holder-first'>
                        <img className = 'Promises-image' src = { FlexiblePlan } alt = 'roi payment pictorial representation' />
                    </div>
                </div>
                <div className = 'Promises-second-word'>
                    <h2>Flexible Investment Plans</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
                </div>
            </div>
            <div>
                <div className = 'Promises-first-word'>
                    <h2>24/7 Support</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
                </div>
                <div className = 'Promises-second'>
                    <div  className = 'Promises-image-holder-second'>
                        <img className = 'Promises-image' src = { Support } alt = 'roi payment pictorial representation' />
                    </div>
                </div>
            </div>
            <div>
                <div className = 'Promises-first'>
                    <div  className = 'Promises-image-holder-first'>
                        <img className = 'Promises-image' src = { EasyTracking } alt = 'roi payment pictorial representation' />
                    </div>
                </div>
                <div className = 'Promises-second-word'>
                    <h2>Easy Investment Tracking</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Promises;