import "./slidearea.css";

const SliderArea = () =>{
    return (
        <div className="slider_area">
        <div className="slider_active">
            <div className="single_slider  d-flex align-items-center slider_bg_2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="slider_text ">
                                <h3>  <span>Empowering Wellness</span> <br/> 
                                Your Path to Holistic Balance
                                    </h3>
                                <p>Our mission is to offer accessible, compassionate, and comprehensive holistic <br/> treatment through online consultations. Committed to empowering individuals,<br/> we integrate traditional and alternative therapies, tailored to their unique needs, <br/>fostering optimal wellness and balance in mind, body, and spirit.</p>
                                <p className="boxed-btn3">Check Our Services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default SliderArea;