import { Link } from "react-router-dom";
import { MenuItem } from "./NavItem/MenuItem";

export const MobileMenu = () => (
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
          <MenuItem to="/" text="Home" />
          <MenuItem to="/department" text="Department" />
          <li className="slicknav_collapsed slicknav_parent">
            <Link to="/blog" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row">
              Blog
            </Link>
          </li>
          <MenuItem to="/doctors" text="Doctors" />
          <MenuItem to="/contact" text="Contact" />
        </ul>
      </div>
    </div>
  );