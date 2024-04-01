import React from "react";
import "../HeaderComponent/Header.css";
import Logo from "../../assets/images/Logo.svg";
import Arrow from "../../assets/images/arrow-down.svg";
const Header = () => {
  return (
    <div className="header-section">
      <nav>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav-items">
          <ul className="items">
            <li>
              <a href="/">
                Bootcamps
                <img src={Arrow} alt="arrow" />
              </a>
            </li>
            <li>
              <a href="/">
                Careers
                <img src={Arrow} alt="arrow" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
