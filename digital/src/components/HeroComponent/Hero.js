import React from "react";
import "../HeroComponent/Hero.css";
import GoogleReview from "../../assets/images/google-review.svg";
import HeroTick from "../../assets/images/Group 44671.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <h3>Digital Marketing Academy</h3>
        <p className="firstparagaph">Designed for Aspiring</p>
        <span className="first-bluespan">Digital Marketing Specialists</span>
        <div className="hero-tick">
          <img src={HeroTick} alt="herotick" />
          <p>Skill Mastery</p>
        </div>
        <div className="hero-tick">
          <img src={HeroTick} alt="herotick" />
          <p>Hands-On Internship</p>
        </div>
        <div className="hero-tick">
          <img src={HeroTick} alt="herotick" />
          <p>Accredited US Diploma</p>
        </div>
        <div className="hero-tick">
          <img src={HeroTick} alt="herotick" />
          <p>
            Hiring Contests = <span className="circleline">Career Success</span>{" "}
          </p>
        </div>

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
          <h2>New Cohort Begins May 15th!</h2>
          <span>
            Complete the form and our Scholarship Specialist will be in touch!{" "}
          </span>
          <div className="form-group firstchild">
            <input type="text" name="fullname" placeholder="Name and Surname" />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <input type="text" name="phone" placeholder="Phone" />
          </div>
          <div className="form-group">
            <select name="academy">
              <option value="">Choose A Program</option>
              <option value="digitalMarketing"></option>
              <option value="webDevelopment"></option>
              <option value="graphicDesign"></option>
            </select>
            <button type="submit">Apply Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
