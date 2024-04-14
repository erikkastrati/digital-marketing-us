import "../HeroComponent/Hero.css";
import GoogleReview from "../../assets/images/google-review.svg";
import HeroTick from "../../assets/images/Group 44671.svg";
import ActiveCampaignForm from '../ActiveCampaignForm/ActiveCampaignForm';

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
        <ActiveCampaignForm showTitle/>
      </div>
    </div>
  );
};

export default Hero;
