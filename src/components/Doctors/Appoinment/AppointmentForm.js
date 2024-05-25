import React, { useState } from 'react';
import "./appointment.css";
import img1 from "../../../Assets/img/Doctor/appoinrment-1.jpg";

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        service: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log(formData);
    };

    return (
        <section className="my-4 py-4 jarallax">
            <div className="container shadow p-4">
                <div className='text-center'>
                        <h2>Make An Appointment</h2>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <img className='w-100 h-100'  src={img1} />
                    </div>
                    <div className="col-md-6 appointment-content">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <div className="icon">
                                            <i className="flaticon-user"></i>
                                        </div>
                                        <label>Your Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Enter Your Name" 
                                            id="name" 
                                            name="name" 
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <div className="icon">
                                            <i className="flaticon-phone-call"></i>
                                        </div>
                                        <label>Your Phone</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Enter Your Phone" 
                                            id="phone" 
                                            name="phone" 
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <div className="icon">
                                            <i className="fas fa-calendar-alt"></i>
                                        </div>
                                        <label>Select Date</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="mm/dd/yy" 
                                            id="date" 
                                            name="date" 
                                            value={formData.date}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <div className="icon">
                                            <i className="far fa-clock"></i>
                                        </div>
                                        <label>Add Time</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="15.00AM" 
                                            id="time" 
                                            name="time" 
                                            value={formData.time}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <div className="icon">
                                            <i className="flaticon-support"></i>
                                        </div>
                                        <label>Select Your Services</label>
                                        <select 
                                            name="service" 
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="form-control"
                                        >
                                            <option value="">Select a Service</option>
                                            <option value="Cardiology">Cardiology</option>
                                            <option value="Urologic Oncology">Urologic Oncology</option>
                                            <option value="Neurology">Neurology</option>
                                            <option value="Medicine">Medicine</option>
                                            <option value="Surgery">Surgery</option>
                                            <option value="Urology">Urology</option>
                                            <option value="Radiology">Radiology</option>
                                            <option value="Neurosurgery">Neurosurgery</option>
                                            <option value="Bariatric Surgery">Bariatric Surgery</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="submit-btn">
                                        <button className="btn btn-primary" type="submit">
                                            Book an Appointment <i className="flaticon-right-chevron"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentForm;
