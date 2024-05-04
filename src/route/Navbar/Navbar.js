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
                            <Logo />
                            <div className="col-xl-6 col-lg-7">
                                <div className="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><Link className="active">home</Link></li>
                                            <li><a href="Department.html">Department</a></li>
                                            <li><a>blog <i className="ti-angle-down"></i></a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">blog</a></li>
                                                    <li><a href="single-blog.html">single-blog</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">pages <i className="ti-angle-down"></i></a>
                                                <ul className="submenu">
                                                    <li><a href="elements.html">elements</a></li>
                                                    <li><a href="about.html">about</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="Doctors.html">Doctors</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                <div className="Appointment">
                                    <div className="book_btn d-none d-lg-block">
                                        <a className="popup-with-form" href="#test-form">Make an Appointment</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-none">
                                    <div className="slicknav_menu">
                                        <a href="#" aria-haspopup="true" role="button" tabindex="0" className="slicknav_btn slicknav_collapsed" >
                                            <span className="slicknav_menutxt">MENU</span>
                                            <span className="slicknav_icon">
                                                <span className="slicknav_icon-bar"></span>
                                                <span className="slicknav_icon-bar"></span>
                                                <span className="slicknav_icon-bar"></span>
                                            </span>
                                        </a>
                                        <ul className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" >
                                            <li>
                                                <a className="active" href="index.html" role="menuitem" tabindex="-1">home</a>
                                            </li>
                                            <li><a href="Department.html" role="menuitem" tabindex="-1">Department</a></li>
                                            <li className="slicknav_collapsed slicknav_parent">
                                                <a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" className="slicknav_item slicknav_row" >
                                                    <a href="#" tabindex="-1">blog
                                                        <i className="ti-angle-down"></i>
                                                    </a>
                                                    <span className="slicknav_arrow">+</span></a><ul className="submenu slicknav_hidden" role="menu" aria-hidden="true">
                                                    <li><a href="blog.html" role="menuitem" tabindex="-1">blog</a></li>
                                                    <li><a href="single-blog.html" role="menuitem" tabindex="-1">single-blog</a></li>
                                                </ul>
                                            </li>
                                            <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" className="slicknav_item slicknav_row" ><a href="#" tabindex="-1">pages <i className="ti-angle-down"></i></a>
                                                <span className="slicknav_arrow">+</span></a><ul className="submenu slicknav_hidden" role="menu" aria-hidden="true">
                                                    <li><a href="elements.html" role="menuitem" tabindex="-1">elements</a></li>
                                                    <li><a href="about.html" role="menuitem" tabindex="-1">about</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="Doctors.html" role="menuitem" tabindex="-1">Doctors</a></li>
                                            <li><a href="contact.html" role="menuitem" tabindex="-1">Contact</a></li>
                                        </ul></div>
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