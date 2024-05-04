import image1 from "../../Assets/img/about/1.png"
import image2 from "../../Assets/img/about/2.png"
import d1 from "../../Assets/img/department/1.png"
import d2 from "../../Assets/img/department/2.png"
import d3 from "../../Assets/img/department/3.png"
import d4 from "../../Assets/img/department/4.png"
import d5 from "../../Assets/img/department/5.png"
import d6 from "../../Assets/img/department/6.png"

function Home() {
    return (
        <div>
            <div className="slider_area">
                <div className="slider_active owl-carousel">
                    <div className="single_slider  d-flex align-items-center slider_bg_2">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="slider_text ">
                                        <h3> <span>Health care</span> <br />
                                            For Hole Family </h3>
                                        <p>In healthcare sector, service excellence is the facility of <br /> the hospital as
                                            healthcare service provider to consistently.</p>
                                        <a href="#" className="boxed-btn3">Check Our Services</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="service_area">
                <div class="container p-0">
                    <div class="row no-gutters">
                        <div class="col-xl-4 col-md-4">
                            <div class="single_service">
                                <div class="icon">
                                    <i class="flaticon-electrocardiogram"></i>
                                </div>
                                <h3>Hospitality</h3>
                                <p>Clinical excellence must be the priority for any health care service provider.</p>
                                <a href="#" class="boxed-btn3-white">Apply For a Bed</a>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4">
                            <div class="single_service">
                                <div class="icon">
                                    <i class="flaticon-emergency-call"></i>
                                </div>
                                <h3>Emergency Care</h3>
                                <p>Clinical excellence must be the priority for any health care service provider.</p>
                                <a href="#" class="boxed-btn3-white">+10 672 356 3567</a>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4">
                            <div class="single_service">
                                <div class="icon">
                                    <i class="flaticon-first-aid-kit"></i>
                                </div>
                                <h3>Chamber Service</h3>
                                <p>Clinical excellence must be the priority for any health care service provider.</p>
                                <a href="#" class="boxed-btn3-white">Make an Appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="welcome_docmed_area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6">
                            <div class="welcome_thumb">
                                <div class="thumb_1">
                                    <img src={image1} alt="" />
                                </div>
                                <div class="thumb_2">
                                    <img src={image2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6">
                            <div class="welcome_docmed_info">
                                <h2>Welcome to Docmed</h2>
                                <h3>Best Care For Your <br />
                                    Good Health</h3>
                                <p>Esteem spirit temper too say adieus who direct esteem.
                                    It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
                                <ul>
                                    <li> <i class="flaticon-right"></i> Apartments frequently or motionless. </li>
                                    <li> <i class="flaticon-right"></i> Duis aute irure dolor in reprehenderit in voluptate.</li>
                                    <li> <i class="flaticon-right"></i> Voluptatem quia voluptas sit aspernatur. </li>
                                </ul>
                                <a href="#" class="boxed-btn3-white-2">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="our_department_area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="section_title text-center mb-55">
                                <h3>Our Departments</h3>
                                <p>Esteem spirit temper too say adieus who direct esteem. <br />
                                    It esteems luckily or picture placing drawing. </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-4 col-md-6 col-lg-4">
                            <div class="single_department">
                                <div class="department_thumb">
                                    <img src={d1} alt="" />
                                </div>
                                <div class="department_content">
                                    <h3><a href="#">Eye Care</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                    <a href="#" class="learn_more">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6 col-lg-4">
                            <div class="single_department">
                                <div class="department_thumb">
                                    <img src={d2} alt="" />
                                </div>
                                <div class="department_content">
                                    <h3><a href="#">Physical Therapy</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                    <a href="#" class="learn_more">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6 col-lg-4">
                            <div class="single_department">
                                <div class="department_thumb">
                                    <img src={d3} alt="" />
                                </div>
                                <div class="department_content">
                                    <h3><a href="#">Dental Care</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                    <a href="#" class="learn_more">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6 col-lg-4">
                            <div class="single_department">
                                <div class="department_thumb">
                                    <img src={d4} alt="" />
                                </div>
                                <div class="department_content">
                                    <h3><a href="#">Diagnostic Test</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                    <a href="#" class="learn_more">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6 col-lg-4">
                            <div class="single_department">
                                <div class="department_thumb">
                                    <img src={d5} alt="" />
                                </div>
                                <div class="department_content">
                                    <h3><a href="#">Skin Surgery</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                    <a href="#" class="learn_more">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6 col-lg-4">
                            <div class="single_department">
                                <div class="department_thumb">
                                    <img src={d6} alt="" />
                                </div>
                                <div class="department_content">
                                    <h3><a href="#">Surgery Service</a></h3>
                                    <p>Esteem spirit temper too say adieus who direct esteem.</p>
                                    <a href="#" class="learn_more">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;