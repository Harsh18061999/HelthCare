import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
function Footer() {
    return (
        <footer className="footer">
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className="footer_widget">
                                <div className="footer_logo">
                                    <Link href="#">
                                        <img src={logo} alt="" className="log_image" />
                                    </Link>
                                </div>
                                <p>
                                    Firmament morning sixth subdue darkness
                                    creeping gathered divide.
                                </p>
                                <div className="socail_links">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <i className="ti-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="ti-twitter-alt"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="fa fa-instagram"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-md-6 col-lg-3">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Departments
                                </h3>
                                <ul>
                                    <li><Link href="#">Eye Care</Link></li>
                                    <li><Link href="#">Skin Care</Link></li>
                                    <li><Link href="#">Pathology</Link></li>
                                    <li><Link href="#">Medicine</Link></li>
                                    <li><Link href="#">Dental</Link></li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 col-lg-2">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Useful Links
                                </h3>
                                <ul>
                                    <li><Link href="#">About</Link></li>
                                    <li><Link href="#">Blog</Link></li>
                                    <li><Link href="#">About</Link></li>
                                    <li><Link href="#"> Contact</Link></li>
                                    <li><Link href="#"> Appointment</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-lg-3">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Address
                                </h3>
                                <p>
                                    200, D-block, Green lane USA <br/>
                                        +10 367 467 8934 <br/>
                                            docmed@contact.com
                                        </p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right_text">
                    <div className="container">
                        <div className="footer_border"></div>
                        <div className="row">
                            <div className="col-xl-12">
                                <p className="copy_right text-center">
                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <Link href="https://colorlib.com" target="_blank">Colorlib</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer;