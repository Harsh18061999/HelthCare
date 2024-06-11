import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
    // State to manage active accordion item
    const [activeIndex, setActiveIndex] = useState(null);

    // Function to toggle accordion item
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="feedback-area m-4">
            <div className="container-fluid">
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="faq-image">
                            <img src="images/faq-img1.jpg" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="faq-accordion">
                            <span className="sub-title">Frequently Asked Questions</span>
                            <h2>Get Every Single Answers There if you want</h2>

                            <ul className="accordion">
                                {faqData.map((item, index) => (
                                    <li className="accordion-item" key={index}>
                                        <button
                                            className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <i className={`fas  ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                                            {item.question}
                                        </button>

                                        <p className={`accordion-content ${activeIndex === index ? 'show' : ''}`}>
                                            {item.answer}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// FAQ data
const faqData = [
    {
        question: 'Why should I trust doctors associated with MyFitBoat.com?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.'
    },
    {
        question: ' How can I use MyFitBoat.com to find the best doctor for me?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.'
    },
    {
        question: 'How should I book my appointment?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.'
    },
    {
        question: 'How should I reschedule or cancel my appointment?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.'
    },
    {
        question: 'What are the charges for an appointment with a doctor?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.'
    }
];

export default FAQSection;
