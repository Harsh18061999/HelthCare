import logo from "../../Assets/logo.png";

function Logo() {
    return (
        <div className="col-xl-3 col-lg-2">
            <div className="logo">
                <a href="index.html">
                    <img src={logo} alt="" className="log_image" />
                </a>
            </div>
        </div>
    )
}

export default Logo;