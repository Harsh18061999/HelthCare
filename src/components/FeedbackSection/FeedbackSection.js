import React from 'react';
import Slider from 'react-slick';
import "./feedbacksection.css";
import image1 from "../../Assets/images/2.jpg";

const FeedbackSection = () => {
    const feedbacks = [
        { name: 'John Lucy', role: 'Founding Partner', feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.' },
        { name: 'John Smith', role: 'Web Developer', feedback: 'Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.' },
        { name: 'Maxwel Warner', role: 'Web Designer', feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.' },
        { name: 'Ross Taylor', role: 'Patient', feedback: 'Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.' },
        { name: 'James Anderson', role: 'CEO', feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.' },
        { name: 'Steven Smith', role: 'Manager', feedback: 'Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.' },
        { name: 'Steven Lucy', role: 'Patient', feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.' },
        { name: 'John Terry', role: 'Patient', feedback: 'Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.' },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="feedback-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Feedback</span>
                    <h2>Our Happy Clients Says Our Doctor</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="feedback-slides">
                  

                    <div className="client-feedback">
                        <Slider {...settings}>
                            {feedbacks.map((feedback, index) => (
                                <div key={index} className="item">
                                      <div className="client-thumbnails">
                                        <div key={index} className="item">
                                            <div className="img-fill">
                                                <img src={image1} alt="client" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-feedback">
                                        <h3>{feedback.name}</h3>
                                        <span>{feedback.role}</span>
                                        <p>{feedback.feedback}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeedbackSection;
