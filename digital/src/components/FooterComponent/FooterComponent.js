import React from "react";
import "../FooterComponent/FooterComponent.css";
import LogoFooter from "../../assets/images/logo-footer.svg";
import EmailContact from "../../assets/images/sms.svg";
import TelContact from "../../assets/images/call-footer.svg";
import FacebookIcon from "../../assets/images/facebook.svg";
import InstagramIcon from "../../assets/images/instagram.svg";
import TiktokIcon from "../../assets/images/ic_baseline-tiktok.svg";
import LinkedinIcon from "../../assets/images/LinkedIn.svg";
import YoutubeIcon from "../../assets/images/youtube.svg";
const FooterComponent = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <div className="first-col-footer">
          <img src={LogoFooter} alt="logofooter" className="logo-footer" />
          <p className="firstp-footer">
            Стекни знаење, поврзи се и најди ја твојата идеална кариерна насока
          </p>
          <p className="secondp-footer">Локации:</p>
          <span>Скопје, Приштина, Мајами</span>
          <p className="thirdp-footer">Контакт:</p>
          <div className="contact-footer">
            <img src={EmailContact} alt="emailcontact" />
            <p>contact@creativehubkos.com</p>
          </div>
          <div className="contact-footer">
            <img src={TelContact} alt="mobcontact" />
            <p>+383 49 334 437</p>
          </div>
        </div>
        <div className="second-col-footer">
          <div className="academies-footer">
            <h4>Академии</h4>
            <p>Графички дизајн</p>
            <p>Дигитален маркетинг</p>
            <p>Човечки ресурси</p>
            <p>UX/UI </p>
            <p>Front End</p>
            <p>Women’s Leadership</p>
            <p>Software Testing</p>
          </div>
          <div className="socials-footer">
            <h4>Социјални мрежи</h4>
            <div className="media-social">
              <img src={FacebookIcon} alt="facebook" />
              <p>Facebook</p>
            </div>
            <div className="media-social">
              <img src={InstagramIcon} alt="instagram" />
              <p>Instagram</p>
            </div>
            <div className="media-social">
              <img src={TiktokIcon} alt="tiktok" />
              <p>Tik Tok</p>
            </div>
            <div className="media-social">
              <img src={LinkedinIcon} alt="linkedin" />
              <p>Linked In</p>
            </div>
            <div className="media-social">
              <img src={YoutubeIcon} alt="youtube" />
              <p>YouTube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
