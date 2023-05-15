import { Link } from "react-router-dom";

const ContactPageContents = () => {

    return (
        <div className="contact-us-wrapper section-padding">
            <div className="container">
                <div className="row eq-height">
                <div className="col-lg-8 col-12">
                    <div className="contact-form"> 
                    <h2>Get in Touch</h2>                                                       
                    
                    <form action="mail.php" method="POST" className="row" id="contact-form">
                    <div className="col-md-6 col-12">
                        <div className="single-personal-info">
                        <input type="text" name="name" placeholder="Name" />                                         
                        </div>
                    </div>                            
                    <div className="col-md-6 col-12">
                        <div className="single-personal-info">
                        <input type="email" name="email" placeholder="Email" />                                         
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="single-personal-info">
                        <input type="text" name="phone" placeholder="Number" />                                         
                        </div>
                    </div>                                      
                    <div className="col-md-6 col-12">
                        <div className="single-personal-info">
                        <input type="text" name="subject" placeholder="Subject" />                                         
                        </div>
                    </div>                                      
                    <div className="col-md-12 col-12">
                        <div className="single-personal-info">
                        <textarea name="message" placeholder="message" defaultValue={""} />                                        
                        </div>
                    </div>                                      
                    <div className="col-md-12 col-12">
                        <input className="submit-btn" type="submit" defaultValue="Submit Now" />
                    </div>                                      
                    </form>
                    <span className="form-message" />
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="contact-us-sidebar mt-5 mt-lg-0">
                        <div className="contact-info">
                            <h2>CONTACT INFO</h2>
                            <div className="single-info">
                                <div className="icon">
                                    <i className="flaticon-email" />
                                </div>
                                <div className="text">
                                    <span>Email Us</span>
                                    <h5>admin@lidomech.com</h5>
                                </div>
                            </div>
                            <div className="single-info">
                                <div className="icon">
                                    <i className="flaticon-phone-call-1" />
                                </div>
                                <div className="text">
                                    <span>Call Us</span>
                                    <h5>+65 6896 9933</h5>
                                </div>
                            </div>
                            <div className="single-info">
                                <div className="icon">
                                    <i className="flaticon-pin" />
                                </div>
                                <div className="text">
                                    <span>Location</span>
                                    <h5>21 Toh Guan Rd E, #06-03, Singapore 608609</h5>
                                </div>
                            </div>
                        </div>
                        <div className="live-chat">
                            <h2>Live Chat</h2>
                            <p>You can contact us on chat and explain 
                            your problems</p>
                            <Link to="/about"><i className="flaticon-chatting" /> Live Chat to Executive</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}

export default ContactPageContents;