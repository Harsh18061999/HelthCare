import React, { Fragment, useState, useEffect } from "react";
import Logo from "../../components/Logo/Logo";
import { Link, Outlet } from "react-router-dom";
import "./navbar.css"; // Import CSS file for styling
import { MenuItem } from "./NavItem/MenuItem";
import { MobileMenu } from "./MobileMenu";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <header>
        <div className="header-area">
          <div className="header-top_area">
            <div className="container">
              <div className="row">
                {/* Social Media Links */}
                <div className="col-xl-4 col-md-4">
                  <div className="social_media_links">
                    <Link href="#"><i className="fab fa-linkedin "></i></Link>
                    <Link href="#"><i className="fab fa-facebook "></i></Link>
                    <Link href="#"><i className="fab fa-google-plus"></i></Link>
                  </div>
                </div>
                {/* Contact Info */}
                <div className="col-xl-8 col-md-8">
                  <div className="short_contact_list">
                    <ul>
                      <li><Link href="#"><i class="fa fa-clock"></i> Mon - Fri 09:00 - 19:00</Link></li>
                      <li><Link href="#"><i className="fa fa-envelope"></i> info@myfitboat.com</Link></li>
                      <li><Link href="#"><i className="fa fa-phone"></i> 160160002</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Main Header Area */}
          <div id="sticky-header" className={`main-header-area ${isScrolled ? 'sticky' : ''}`}>
            <div className="container">
              <div className="row align-items-center">
                {/* Logo Component */}
                <Logo />
                {/* Main Menu */}
                <div className="col-xl-6 col-lg-7">
                  <nav className="main-menu d-none d-lg-block">
                    <ul id="navigation">
                      <MenuItem to="/" text="Home" />
                      <MenuItem to="/department" text="Department" />
                      <MenuItem to="/" text="Blog" />
                      <MenuItem to="/doctors" text="Doctors" />
                      <MenuItem to="/contact" text="Contact" />
                    </ul>
                  </nav>
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
                  <MobileMenu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
};





export default NavBar;
