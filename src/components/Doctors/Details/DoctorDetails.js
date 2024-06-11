import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./detail.css";
import DoctorImage from "../../../Assets/img/Doctor/docotr1.jpg";
import DoctorImage1 from "../../../Assets/img/Doctor/doctor2.jpeg";
import SignatureImage from "../../../Assets/img/Doctor/signature.png";
import AppointmentForm from '../Appoinment/AppointmentForm';
import { useParams } from 'react-router-dom';

const doctorDetailsData = [{
    name: "Dr. Hetal Vaidya Trivedi",
    specialization: "Cardiologist",
    image: DoctorImage,
    signature: SignatureImage,
    intro: `Hello I’m Dr. Hetal Vaidya Trivedi Introducing Myself`,
    intro1: "I am a distinguished 7th-generation Ayurvedic doctor, deeply rooted in the traditions and practices handed down through my family for over two centuries. I hold a Bachelor of Ayurvedic Medicine and Surgery (B.A.M.S.) and a Master of Health Administration (MHA) from the USA. By combining ancient wisdom with modern techniques, I offer holistic healing and wellness solutions to promote overall well-being.",
    intro2: "My specialties include Preventive Ayurveda, where I tailor lifestyle and nutrition plans based on individual Prakriti (constitution), and Panchakarma Therapy, providing expert detoxification treatments to rejuvenate the body and mind. I utilize a vast knowledge of herbal medicine, passed down through generations, to treat and prevent illness. Additionally, I am skilled in Pulse Diagnosis (Nadi Pariksha), a traditional technique used to assess the state of the doshas (Vata, Pitta, Kapha) and the health of various organ systems through the pulse.",
    socialLinks: [
        { name: "Facebook", icon: "fab fa-facebook-f", link: "#" },
        { name: "Twitter", icon: "fab fa-twitter", link: "#" },
        { name: "LinkedIn", icon: "fab fa-linkedin-in", link: "#" },
        { name: "Instagram", icon: "fab fa-instagram", link: "#" }
    ],
    skills: [
        "Skin Diseases and Hair disorders such as Psoriasis, Eczema, Acne, Leucoderma, Allergies, Pruritus, Alopecia, Greying of Hair.",
        "Arthritis (Joint and Bone Disorder)",
        "Metabolic Disorders such as Diabetes Mellitus, Hypertension, Hypothyroid, Hyperlipidemia, Uric Acid",
        "Infertility and Gynecological Disorders",
        "Digestive Disorder such as Gas, Acid Reflux, Constipation"
    ],
    education: [
        { title: "Masters in Hospital Administration", location: "Salt Lake City, Utah (USA)", icon: "fas fa-user-md fa-xl" },
        { title: "7th-Generation Ayurvedic Practitioner", icon: "fas fa-mortar-pestle fa-xl" },
        { title: "B.A.M.S Jamnagar", icon: "fas fa-user-graduate fa-xl" }
    ]
},
{
    name: "Dr. Milind Tapodhan",
    specialization: "Practicing Ayurveda in synchronization with Astrology since 2010",
    image: DoctorImage1,
    signature: "SignatureImage",
    intro: "Ayurveda - Reg. No - GB - I - 17875. BAMS - Govt. Akhandanand Ayurved College, Ahmedabad",
    intro1: "Astrology - Certificate course and Diploma course in Medical Astrology - AADAR. Jyotish Gnyata and Jyotish Bhaskar - Gujarat University - First Rank. Conducted two Medical Astrology workshops for Ayurveda Doctors/Students with AADAR as an only Tutor.",
    intro2: "Speciality - Medical Astrology - can be used as preventive measures and supportive tool in the current disease",
    socialLinks: [
        { name: "Facebook", icon: "fab fa-facebook-f", link: "#" },
        { name: "Twitter", icon: "fab fa-twitter", link: "#" },
        { name: "LinkedIn", icon: "fab fa-linkedin-in", link: "#" },
        { name: "Instagram", icon: "fab fa-instagram", link: "#" }
    ],
    skills: [
        "Skin Diseases and Hair disorders such as Psoriasis, Eczema, Acne, Leucoderma, Allergies, Pruritus, Alopecia, Greying of Hair.",
        "Arthritis (Joint and Bone Disorder)",
        "Metabolic Disorders such as Diabetes Mellitus, Hypertension, Hypothyroid, Hyperlipidemia, Uric Acid",
        "Infertility and Gynecological Disorders",
        "Digestive Disorder such as Gas, Acid Reflux, Constipation"
    ],
    education: [
        { title: "Masters in Hospital Administration", location: "Salt Lake City, Utah (USA)", icon: "fas fa-user-md fa-xl" },
        { title: "7th-Generation Ayurvedic Practitioner", icon: "fas fa-mortar-pestle fa-xl" },
        { title: "B.A.M.S Jamnagar", icon: "fas fa-user-graduate fa-xl" }
    ]
}];


const DoctorDetails = (props) => {
    const { doctorId } = useParams();
    console.log(doctorId, "propspropspropspropsprops")
    const[doctorDetails,updteDoctorDetails] = useState(doctorDetailsData[doctorId - 1]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="page-title-area page-title-bg4">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-content">
                                <h2>Doctor Details</h2>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>{doctorDetails.name}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="doctor-details-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="doctor-details-image">
                                <img src={doctorDetails.image} alt={doctorDetails.name} className='doctor_image' />
                                <h3>{doctorDetails.name}</h3>
                                <span>{doctorDetails.specialization}</span>
                                <ul className="social">
                                    {doctorDetails.socialLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link to={link.link}><i className={link.icon}></i></Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="doctor-details-desc">
                                <h3>{doctorDetails.intro}</h3>
                                <p>{doctorDetails.intro1}</p>
                                <p>{doctorDetails.intro2}</p>
                                <div className="signature-image">
                                    <img src={doctorDetails.signature} alt="Signature" />
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
                                    <ul>
                                        {doctorDetails.skills.map((skill, index) => (
                                            <li key={index}><span><i className="fa-solid fa-check"></i>{skill}</span></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="education-desc">
                                    <span className="sub-title">My Education</span>
                                    <h2>Here is my 33 Years Qualifications</h2>
                                    <ul>
                                        {doctorDetails.education.map((edu, index) => (
                                            <li key={index}>
                                                <div className="icon">
                                                    <i className={edu.icon}></i>
                                                </div>
                                                <span>{edu.title}</span>
                                                {edu.location && ` ${edu.location}`}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AppointmentForm />
        </>
    );
}

export default DoctorDetails;
