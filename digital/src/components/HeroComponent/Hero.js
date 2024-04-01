import React from "react";
import "../HeroComponent/Hero.css";
import GoogleReview from "../../assets/images/google-review.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <h3>Digital Marketing Academy</h3>
        <p className="firstparagaph">for people who want to work as</p>
        <span className="first-bluespan">digital marketing specialist</span>
        <p className="second-paragraph">
          Skills+Flexible Internship + Official US Diploma + <br />
          Hiring Contests = <span>Guaranteed Success</span>
        </p>
        <h5>What Happens After the Academy?</h5>
        <p className="third-paragraph">
          Enjoy in the Mega Courses that will bring you to the next level in
          your career. ❤️
        </p>
        <img
          src={GoogleReview}
          alt="google-review"
          style={{
            width: "204px",
            padding: "14px 14.873px",
          }}
        />
      </div>
      <div className="hero__right">
        <form className="hero__form">
          <h2>Next Group Starts on May 15!</h2>
          <span>Fill up the form and our coordinator will contact you! </span>
          <div className="form-group firstchild">
            <input type="text" name="fullname" placeholder="Име и презиме" />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Емаил Адреса" />
          </div>
          <div className="form-group">
            <input type="text" name="phone" placeholder="Телефон" />
          </div>
          <div className="form-group">
            <select name="academy">
              <option value="">Одбери Академија</option>
              <option value="digitalMarketing">
                Академија за Дигитален Маркетинг
              </option>
              <option value="webDevelopment">
                Академија за Веб Девелопмент
              </option>
              <option value="graphicDesign">
                Академија за Графички Дизајн
              </option>
            </select>
            <button type="submit">Apply Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
