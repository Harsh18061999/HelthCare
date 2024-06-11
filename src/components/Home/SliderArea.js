import "./slidearea.css";
import banner from "../../Assets/img/banner/banner2.jpg"
import { Link } from "react-router-dom";

const SliderArea = () => {
    return (
        <div className="slider_area">
            <div className="slider_active">
                <div className="single_slider  d-flex align-items-end slider_bg_2">
                    {/* <img src={banner} alt="img" /> */}
                    <div className="container text-overlay">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="slider_text text-center">
                                    <h3> Empowering Wellness
                                        Your Path to Holistic Balance
                                    </h3>
                                    <div className="d-flex justify-content-center">
                                        <p>Our mission is to offer accessible, compassionate, and comprehensive holistic treatment through online consultations. Committed to empowering individuals, we integrate traditional and alternative therapies, tailored to their unique needs, fostering optimal wellness and balance in mind, body, and spirit.</p>
                                    </div>
                                    {/* <span className="btn btn-primary">Check Our Services</span> */}
                                    <div className="d-lg-block mb-2">
                                        <div className="Appointment d-flex justify-content-center">
                                            <div className="book_btn d-none d-lg-block">
                                                <Link to="#test-form" className="popup-with-form">Check Our Services</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderArea;