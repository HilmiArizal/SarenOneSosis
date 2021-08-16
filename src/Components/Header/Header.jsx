import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Logo from "../../Assets/Image/logo.png";
import "./Header.scss";

function Header() {
  const [addClass, setAddClass] = useState();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setAddClass(
        "navbar navbar-expand-lg navbar-light bg-light fixed-top scroll"
      );
    } else {
      setAddClass("navbar navbar-expand-lg navbar-light bg-light fixed-top");
    }
  };

  return (
    <div className="header">
      <nav onScroll={handleScroll} className={addClass}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={Logo} alt="img-logo" className="img-logo" />
            <div>
              <div>CV. Heaven Sentosa</div>
              <div>SarenOne</div>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div className="navbar-nav me-auto mb-2 mb-lg-0"></div>
            <form className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link
                  activeClass="link-active"
                  to="section-home"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={100}
                >
                  <li> Home</li>
                </Link>
                <Link
                  activeClass="link-active"
                  to="section-product"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={100}
                >
                  <li> Product</li>
                </Link>
                <Link
                   activeClass="link-active"
                   to="section-team"
                   spy={true}
                   smooth={true}
                   offset={-30}
                   duration={100}
                >
                  <li> Team</li>
                </Link>
                <Link
                  activeClass="link-active"
                  to="section-about"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={100}
                >
                  <li> About</li>
                </Link>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
