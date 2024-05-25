import React from 'react';
import "./pagetitle.css";

const PageTitleArea = ({ title, homeLink }) => (
  <section className="page-title-area page-title-bg3">
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <div className="page-title-content">
            <h2>{title}</h2>
            <ul>
              <li><a href={homeLink}>Home</a></li>
              <li>{title}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PageTitleArea;
