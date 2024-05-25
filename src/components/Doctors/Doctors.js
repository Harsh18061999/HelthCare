import React, { Fragment } from 'react';
import doctorsData from './doctor.json'; // Assuming the JSON data is in a file named doctorsData.json
import PageTitleArea from '../PageTitle/PageTitleArea';
import "./doctor.css"
import { Route, Routes } from 'react-router-dom';
import DoctorDetails from './Details/DoctorDetails';
import DocotorList from './DoctorList/DocotorList';

const Doctors = () => {
  console.log(doctorsData);
  return (
    <Fragment>
      <Routes>
        <Route index path="/" element={
          <div>
            <PageTitleArea title="Doctor" homeLink="index.html" />
            <section className="doctor-area ptb-100 mt-4">
              <div className="container">
                <div className="section-title">
                  <span>Doctors</span>
                  <h2>Meet Our Qualified Doctors</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="container">
                  <div className="row">
                    {doctorsData.doctors.map((doctor, index) => (
                      <DocotorList key={index} {...doctor} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        } />
        <Route path=":doctorId" element={<DoctorDetails />} />
      </Routes>


    </Fragment>
  );
}

export default Doctors;
