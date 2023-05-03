import { Link } from "react-router-dom";

const CtaOne = () => {
    return (
        <section className="cta-wrapper cta-theme-bg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8 col-xl-7 offset-xl-1 col-12">
                        <div className="cta-text align-items-center d-md-flex text-center text-md-start">
                            <i className="flaticon-email"></i>
                            <h2>Looking for a quality Engineering  for your project?</h2>
                        </div>
                    </div>
                    <div className="col-md-4 text-center text-md-end">
                        <div className="theme-btn border-btn text-center"><a href="https://wa.me/">Whatsapp</a></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaOne;