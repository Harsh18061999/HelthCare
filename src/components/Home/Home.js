import { Fragment } from "react";
import OurDepartment from "./OurDepartment";
import SliderArea from "./SliderArea"
import WelocmeArea from "./WelcomeArea";
import image1 from "../../Assets/img/experts/1.png"
import image2 from "../../Assets/img/experts/2.png"
import image3 from "../../Assets/img/experts/3.png"
import image4 from "../../Assets/img/experts/4.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

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
            <OurDepartment />
            <div className="expert_doctors_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="doctors_title mb-55">
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
                                            <img src={image1} alt="" />
                                        </div>
                                        <div className="experts_name text-center">
                                            <h3>Mirazul Alom</h3>
                                            <span>Neurologist</span>
                                        </div>
                                    </div>
                                </Link>
                                <div className="single_expert">
                                    <div className="expert_thumb">
                                        <img src={image2} alt="" />
                                    </div>
                                    <div className="experts_name text-center">
                                        <h3>Mirazul Alom</h3>
                                        <span>Neurologist</span>
                                    </div>
                                </div>
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
        </Fragment>
    );
}

export default Home;