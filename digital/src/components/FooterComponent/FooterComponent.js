import React from "react";
import "../FooterComponent/FooterComponent.css";
import LogoFooter from "../../assets/images/logo-footer.svg";
import FacebookIcon from "../../assets/images/facebook.svg";
import InstagramIcon from "../../assets/images/instagram.svg";
import LinkedinIcon from "../../assets/images/LinkedIn.svg";
const FooterComponent = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <div className="first-col-footer">
          <img src={LogoFooter} alt="logofooter" className="logo-footer" />
          <p className="firstp-footer">Successful Careers Made Possible.</p>
        </div>
        <div className="second-col-footer">
          <div className="academies-footer">
            <h4>Bootcamps</h4>
            <p>Front End - Coming Soon! </p>
            <p>Data Science - Coming Soon! </p>
            <p>Digital Marketing</p>
            <p>Graphic Design - Coming Soon! </p>
          </div>
          <div className="socials-footer">
            <h4>Follow us</h4>
            <a href="https://www.facebook.com/creativehubmiami" target="_blank">
              <div className="media-social">
                <img src={FacebookIcon} alt="facebook" />
                <p>Facebook</p>
              </div>{" "}
            </a>
            <a
              href="https://www.instagram.com/creativehubacademy_"
              target="_blank">
              <div className="media-social">
                <img src={InstagramIcon} alt="instagram" />
                <p>Instagram</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/creative-hub-academy"
              target="_blank">
              <div className="media-social">
                <img src={LinkedinIcon} alt="linkedin" />
                <p>Linked In</p>
              </div>
            </a>
          </div>
        </div>
      </div>{" "}
      <div className="rights-reserved">
        <hr />

        <h4>© Copyright 2024 Creative Hub</h4>
      </div>
    </div>
  );
};

export default FooterComponent;
