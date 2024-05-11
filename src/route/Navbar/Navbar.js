import React, { useState } from "react";
import Logo from "../../components/Logo/Logo";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <header>
        <div className="header-area">
          <div id="sticky-header" className="main-header-area sticky">
            <div className="container">
              <div className="row align-items-center">
                {/* Logo component */}
                <Logo />
  
                {/* Main Menu */}
                <div className="col-xl-6 col-lg-7">
                  <div className="main-menu  d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li><Link to="/" className="active">home</Link></li>
                        <li><Link to="/department">Department</Link></li>
                        <li>
                          <Link to="/">blog <i className="ti-angle-down"></i></Link>
                        </li>
                        <li><Link to="/doctors">Doctors</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                      </ul>
                    </nav>
                  </div>
                </div>
  
                {/* Make an Appointment Button */}
                <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                  <div className="Appointment">
                    <div className="book_btn d-none d-lg-block">
                      <Link to="#test-form" className="popup-with-form">Make an Appointment</Link>
                    </div>
                  </div>
                </div>
  
                {/* Mobile Menu */}
                <div className="col-12">
                  <div className="mobile_menu d-block d-none">
                    <div className="slicknav_menu">
                      <Link to="#" aria-haspopup="true" role="button" tabIndex="0" className="slicknav_btn slicknav_collapsed">
                        <span className="slicknav_menutxt">MENU</span>
                        <span className="slicknav_icon">
                          <span className="slicknav_icon-bar"></span>
                          <span className="slicknav_icon-bar"></span>
                          <span className="slicknav_icon-bar"></span>
                        </span>
                      </Link>
                      <ul className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu">
                        <li>
                          <Link to="/" className="active" role="menuitem" tabIndex="-1">home</Link>
                        </li>
                        <li><Link to="/department" role="menuitem" tabIndex="-1">Department</Link></li>
                        <li className="slicknav_collapsed slicknav_parent">
                          <Link to="/blog" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row">
                           blog
                          </Link>
                        </li>
                        <li><Link to="/doctors" role="menuitem" tabIndex="-1">Doctors</Link></li>
                        <li><Link to="/contact" role="menuitem" tabIndex="-1">Contact</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default NavBar;