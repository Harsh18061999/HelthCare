import { Link } from "react-router-dom"
import image1 from "../../Assets/img/about/1.png"
import image2 from "../../Assets/img/about/2.png"
import "./welcomearea.css"

const WelocmeArea = () => {
    return (
        <div className="welcome_docmed_area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="welcome_thumb">
                            <div className="thumb_1">
                                <img src={image1} alt="" />
                            </div>
                            <div className="thumb_2">
                                <img src={image2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="welcome_docmed_info">
                            <h2>Welcome to MyfitBoat</h2>
                            <h3>Global Holistic Healthcare Access</h3>
                            <p> Our vision is to revolutionize healthcare by making holistic treatment accessible to everyone, regardless of their geographical location or socioeconomic status. </p>
                            <ul>
                                <li className="list_type">
                                    Break geographical barriers through online platforms.
                                </li>
                                <li className="list_type">
                                    Enable access to holistic healthcare worldwide via the internet.
                                </li>
                                <li className="list_type">
                                    Connect individuals with experienced practitioners globally through online networks.
                                </li>
                            </ul>
                            <Link href="#" className="boxed-btn3-white-2 mt-4">
                                <span className="mx-2">Learn More</span>
                                <i className="fa-solid fa-circle-chevron-right  fa-xl pt-2"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelocmeArea;