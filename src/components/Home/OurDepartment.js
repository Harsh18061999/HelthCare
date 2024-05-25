import { Link } from "react-router-dom"
import d1 from "../../Assets/img/department/7.jpg"
import d2 from "../../Assets/img/department/2.png"
import d3 from "../../Assets/img/department/8.jpg"
import d4 from "../../Assets/img/department/9.webp"
import d5 from "../../Assets/img/department/10.jpeg"
import "./ourdepartment.css"

const OurDepartment = () =>{
    return (
        <div className="our_department_area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section_title text-center mb-55">
                            <h3>Core Values</h3>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="single_department">
                            <div className="department_thumb">
                                <img src={d1} alt="" className="core_image" />
                            </div>
                            <div className="department_content">
                                <h3><Link href="#">Compassion</Link></h3>
                                <p>Empathy, understanding, genuine support in every interaction on healing journey.</p>
                                <Link href="#" className="learn_more">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="single_department">
                            <div className="department_thumb">
                                <img src={d2} alt="" className="core_image" />
                            </div>
                            <div className="department_content">
                                <h3><Link href="#">Empowerment</Link></h3>
                                <p>Empower individuals: Provide knowledge, tools, resources for informed decisions.</p>
                                <Link href="#" className="learn_more">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="single_department">
                            <div className="department_thumb">
                                <img src={d3} alt="" className="core_image" />
                            </div>
                            <div className="department_content">
                                <h3><Link href="#">Integrity</Link></h3>
                                <p>Integrity, honesty, professionalism: Ensure transparency, trustworthiness.</p>
                                <Link href="#" className="learn_more">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="single_department">
                            <div className="department_thumb">
                                <img src={d4} alt="" className="core_image" />
                            </div>
                            <div className="department_content">
                                <h3><Link href="#">Collaboration</Link></h3>
                                <p>Collaborative, multidisciplinary approach: Foster holistic treatment.</p>
                                <Link href="#" className="learn_more">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="single_department">
                            <div className="department_thumb">
                                <img src={d5} alt="" className="core_image" />
                            </div>
                            <div className="department_content">
                                <h3><Link href="#">Innovation</Link></h3>
                                <p>Continuous improvement, innovation: Commitment to leveraging technology...</p>
                                <Link href="#" className="learn_more">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurDepartment;