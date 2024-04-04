import React, { useState } from "react";
import "../HeaderComponent/Header.css";
import Logo from "../../assets/images/Logo.svg";
import Arrow from "../../assets/images/arrow-down.svg";
import BurgerMenu from "../../assets/images/bars-solid.svg";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="header-section">
      <nav>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav-items">
          <ul className={`items ${showMenu ? "show" : ""}`}>
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
        <div className="burger-menu" onClick={() => setShowMenu(!showMenu)}>
          <img src={BurgerMenu} alt="burger-icon" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
