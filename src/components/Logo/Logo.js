import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";

function Logo() {
    return (
        <div className="col-xl-3 col-lg-2">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="" className="log_image" />
                </Link>
            </div>
        </div>
    )
}

export default Logo;