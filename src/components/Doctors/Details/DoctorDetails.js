import React,{useEffect } from 'react';
import "./detail.css";
import image1 from "../../../Assets/img/Doctor/docotr1.jpg";
import image2 from "../../../Assets/img/Doctor/signature.png";
import AppointmentForm from '../Appoinment/AppointmentForm';



const DoctorDetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            {/* Start Page Title Area */}
            <section className="page-title-area page-title-bg4">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-content">
                                <h2>Doctor Details</h2>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Dr. Hetal Vaidya Trivedi </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Page Title Area */}

            {/* Start Doctor Details Area */}
            <section className="doctor-details-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="doctor-details-image">
                                <img src={image1} alt="Dr. Hetal Vaidya Trivedi " className='w-100' />

                                <h3>Dr. Hetal Vaidya Trivedi </h3>
                                <span>Cardiologist</span>

                                <ul className="social">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="doctor-details-desc">
                                <h2>Hello I’m Dr. Hetal Vaidya Trivedi  Introducing Myself.</h2>
                                <p>I am a distinguished 7th-generation Ayurvedic doctor, deeply rooted in the traditions and practices handed down through my family for over two centuries. I hold a Bachelor of Ayurvedic Medicine and Surgery (B.A.M.S.) and a Master of Health Administration (MHA) from the USA. By combining ancient wisdom with modern techniques, I offer holistic healing and wellness solutions to promote overall well-being.</p>
                                <p>
                                    My specialties include Preventive Ayurveda, where I tailor lifestyle and nutrition plans based on individual Prakriti (constitution), and Panchakarma Therapy, providing expert detoxification treatments to rejuvenate the body and mind. I utilize a vast knowledge of herbal medicine, passed down through generations, to treat and prevent illness. Additionally, I am skilled in Pulse Diagnosis (Nadi Pariksha), a traditional technique used to assess the state of the doshas (Vata, Pitta, Kapha) and the health of various organ systems through the pulse.</p>
                                <div className="signature-image">
                                    <img src={image2} alt="Signature" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skill-education-desc">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="skill-desc">
                                    <span className="sub-title">My Skills</span>
                                    <h2>I Have Explained About Myself A Bit</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <ul>
                                        <li><span><i className="fa-solid fa-check"></i>Skin Diseases and Hair disorders such as Psoriasis, Eczema, Acne, Leucoderma, Allergies, Pruritus, Alopecia, Greying of Hair.</span></li>
                                        <li><span><i className="fa-solid fa-check"></i>. Arthritis (Joint and Bone Disorder)</span></li>
                                        <li><span><i className="fa-solid fa-check"></i>Metabolic Disorders such as Diabetes Mellitus, Hypertension, Hypothyroid, Hyperlipidemia, Uric Acid</span></li>
                                        <li><span><i className="fa-solid fa-check"></i> . Infertility and Gynecological Disorders </span></li>
                                        <li><span><i className="fa-solid fa-check"></i> . Digestive Disorder such as Gas, Acid Reflux, Constipation </span></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="education-desc">
                                    <span className="sub-title">My Education</span>
                                    <h2>Here is my 33 Years Qualifications</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                    <ul>
                                        <li>
                                            <div className="icon">
                                            <i class="fas fa-user-md fa-xl"></i>
                                            </div>
                                            <span>Masters in Hospital Administration </span>
                                            Salt Lake City, Utah ( USA)
                                        </li>
                                        <li>
                                            <div className="icon">
                                            <i class="fas fa-mortar-pestle fa-xl"></i>
                                            </div>
                                            <span>7th-Generation Ayurvedic Practitioner</span>
                                        </li>
                                        <li>
                                            <div className="icon">
                                            <i class="fas fa-user-graduate fa-xl"></i>
                                            </div>
                                            <span>B.A.M.S Jamnagar </span>
                                        </li>
                                        {/* <li>
                                            <div className="icon">
                                                <i className="flaticon-extraction"></i>
                                            </div>
                                            <span>Orthopedics</span>
                                            Oxford University (2011 - 2014)
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Doctor Details Area */}

            <AppointmentForm />
        </>
    );
}

export default DoctorDetails;
