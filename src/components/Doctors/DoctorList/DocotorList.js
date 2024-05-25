import React from 'react';
import image1 from "../../../Assets/img/experts/1.png"
import { Link } from 'react-router-dom';
const DocotorList = ({ name, image, specialty, social }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="single-doctor-box">
        <div className="doctor-image">
          <img src={image1} alt={name} />
          <Link to="/doctors/1" className="details-btn"><i className="fas fa-plus"></i></Link>
        </div>
        <div className="doctor-content">
          <h3><a href="#">{name}</a></h3>
          <span>{specialty}</span>
          <ul className="social">
            {Object.entries(social).map(([platform, link], index) => (
              <li key={index}><a href={link}><i className={`fab fa-${platform}`}></i></a></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DocotorList;
