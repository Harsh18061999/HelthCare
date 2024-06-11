import { Fragment } from "react";
import OurDepartment from "./OurDepartment";
import SliderArea from "./SliderArea"
import WelocmeArea from "./WelcomeArea";
import image1 from "../../Assets/img/experts/1.png"
import image2 from "../../Assets/img/experts/2.png"
import image3 from "../../Assets/img/experts/3.png"
import image4 from "../../Assets/img/experts/4.png"
import step1 from "../../Assets/img/three_step/step1.jpg"
import step2 from "../../Assets/img/three_step/step2.jpg"
import step3 from "../../Assets/img/three_step/step3.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import FeedbackSection from "../FeedbackSection/FeedbackSection";
import FAQSection from "../FAQSection/FAQSection";
import doctor1 from "../../Assets/img/Doctor/docotr1.jpg";
import doctor2 from "../../Assets/img/Doctor/doctor2.jpeg";

function Home() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <Fragment>
            <SliderArea />
            <WelocmeArea />
            {/* <div className="container">
                <p>Core Values:</p>
            </div> */}
            <div className="three_step_process">
                <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section_title text-center mb-55">
                            <h3>Three Step Process</h3>
                        </div>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="card p-2">
                                <div className="card-body text-center">
                                    <p> 1. Book my appointment</p>
                                </div>
                                <img className="card-img-top" src={step1} alt="" />

                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                        <div className="card p-2">
                                <div className="card-body text-center">
                                    <p> 2. Talk to our expert doctors online</p>
                                </div>
                                <img className="card-img-top" src={step2} alt="" />

                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                        <div className="card p-2">
                                <div className="card-body text-center">
                                    <p> 3. Medication delivered at your door step</p>
                                </div>
                                <img  src={step3} alt="" className="card-img-top" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OurDepartment />
            <div className="expert_doctors_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section_title doctors_title mb-55 text-center">
                                <h3>Expert Doctors</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <Slider {...settings}>
                                <Link to="/doctors/1">
                                    <div className="single_expert mx-2">
                                        <div className="expert_thumb">
                                            <img src={doctor1} alt="" className="doctor_home_image" />
                                        </div>
                                        <div className="experts_name text-center">
                                            <h3>Hetal Vaidya Trivedi</h3>
                                            <span>Neurologist</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/doctors/2">
                                <div className="single_expert">
                                    <div className="expert_thumb">
                                        <img src={doctor2} alt="" className="doctor_home_image" />
                                    </div>
                                    <div className="experts_name text-center">
                                        <h3>Dr. Milind Tapodhan</h3>
                                        <span>Neurologist</span>
                                    </div>
                                </div>
                                </Link>
                                <div className="single_expert">
                                    <div className="expert_thumb">
                                        <img src={image3} alt="" />
                                    </div>
                                    <div className="experts_name text-center">
                                        <h3>Mirazul Alom</h3>
                                        <span>Neurologist</span>
                                    </div>
                                </div>
                                <div className="single_expert">
                                    <div className="expert_thumb">
                                        <img src={image4} alt="" />
                                    </div>
                                    <div className="experts_name text-center">
                                        <h3>Mirazul Alom</h3>
                                        <span>Neurologist</span>
                                    </div>
                                </div>
                                <div className="single_expert">
                                    <div className="expert_thumb">
                                        <img src={image1} alt="" />
                                    </div>
                                    <div className="experts_name text-center">
                                        <h3>Mirazul Alom</h3>
                                        <span>Neurologist</span>
                                    </div>
                                </div>
                                <div className="single_expert">
                                    <div className="expert_thumb">
                                        <img src={image1} alt="" />
                                    </div>
                                    <div className="experts_name text-center">
                                        <h3>Mirazul Alom</h3>
                                        <span>Neurologist</span>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <FeedbackSection/>
            <FAQSection/>
        </Fragment>
    );
}

export default Home;