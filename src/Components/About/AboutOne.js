import videoBg from '../../assets/img/video_bg_1.jpg';
import imgBlock1 from '../../assets/img/home1/img-block1.png';
import tabImg1 from '../../assets/img/home1/tab-img.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';


const AboutOne = ({pt}) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
        <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="EZ9DrY43wtw"
            onClose={() => setOpen(false)}
        />
        <section className={pt ? 'about-section section-padding' : 'about-section section-padding pt-0'}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-5 col-12">
                        <div className="img-block-pop-video">
                            <img src={imgBlock1} alt="busico"/>
                            {/* <div className="popup-video-block d-flex justify-content-center align-items-center bg-cover" style={{backgroundImage: `url(${videoBg})`}}>
                                <div className="video-play-btn">
                                    <span className="popup-video" onClick={() => setOpen(true)} style={{cursor: 'pointer'}}><i className="fas fa-play"></i></span>                     
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-10 col-12">
                        <div className="block-contents">
                            <div className="section-title">
                                <span>What we do</span>
                                <h2>Transforming Offices, Powering Spaces</h2>
                            </div>
                            <p>LIDO MECHANICAL & ELECTRICAL ENGINEERING PTE LTD, An established company since Year 1986 and located at 21 Toh Guan Road East.</p>
                            <p> We are specialize in Electrical Power Distribution Design and Consultation, M&E installation for Commercial & Industrial, Facilities Management & Technical support and EMA Licensing for Electrical Installation.</p>
                        </div>
                        <div className="tab-content-block">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <p>- Electrical Engineering Services</p>
                                    <p>- Mechanical Engineering Services</p>
                                    <p>- ACMV & Fire Protection & Plumbling Services</p>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-technology" role="tabpanel" aria-labelledby="pills-technology-tab">
                                    <div className="tab-inner-contents">
                                        {/* <div className="img-box">
                                            <img src={tabImg1} alt=""/>
                                        </div> */}
                                        {/* <div className="checked-features-list">
                                            <ul>
                                                <li>Intentional development authority</li>
                                                <li>Stylistic formula method</li>
                                                <li>Royal ability to listen design</li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-materials" role="tabpanel" aria-labelledby="pills-materials-tab">
                                    <div className="tab-inner-contents">
                                        {/* <div className="img-box">
                                            <img src={tabImg1} alt=""/>
                                        </div> */}
                                        {/* <div className="checked-features-list">
                                            <ul>
                                                <li>Stylistic formula method</li>
                                                <li>Intentional development authority</li>
                                                <li>Royal ability to listen design</li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-approved" role="tabpanel" aria-labelledby="pills-approved-tab">
                                    <div className="tab-inner-contents">
                                        {/* <div className="img-box">
                                            <img src="assets/img/home1/tab-img.jpg" alt=""/>
                                        </div> */}
                                        {/* <div className="checked-features-list">
                                            <ul>
                                                <li>Intentional development authority</li>
                                                <li>Stylistic formula method</li>
                                                <li>Royal ability to listen design</li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                            </div>                          
                        </div>
                        {/* <Link to="/about" className="plus-text-btn mt-lg-5 mt-4">
                            <div className="icon">
                                <i className="fas fa-plus"></i>
                            </div>
                            <div className="link-text">
                                <span>Explore</span> More about Us
                            </div>
                        </Link> */}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutOne;