import React, {useState} from "react";
import "../HeroComponent/Hero.css";
import GoogleReview from "../../assets/images/google-review.svg";
import HeroTick from "../../assets/images/Group 44671.svg";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [academy, setAcademy] = useState('Foundation Track');

  const onChangeFullNameHandler = (event) => {
    setFullName(event.target.value);
  };

  const onChangeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const onChangePhoneHandler = (event) => {
    setPhone(event.target.value);
  };

  const onSubmitFormHandler = (event) => {
    setIsLoading(true);
    event.preventDefault();

    fetch(`https://akoskarova.activehosted.com/proc.php?u=570&f=570&s=&c=0&m=0&act=sub&v=2&or=8beb7dde5c1bb2035c2d2f64692a2764&fullname=${fullName}&email=${email}&phone=${phone}&field[35]=${academy}&jsonp=true`)
        .then(() => {
          setIsLoading(false);
        });
  };

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
        <form className="hero__form" onSubmit={onSubmitFormHandler}>
          <h2>New Cohort Begins May 15th!</h2>
          <span>
            Complete the form and our Scholarship Specialist will be in touch!{" "}
          </span>
          <div className="form-group firstchild">
            <input type="text" name="fullname" placeholder="Name and Surname" value={fullName} onChange={onChangeFullNameHandler}/>
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email Address" value={email} onChange={onChangeEmailHandler}/>
          </div>
          <div className="form-group">
            <input type="text" name="phone" placeholder="Phone" value={phone} onChange={onChangePhoneHandler}/>
          </div>
          <div className="form-group">
            <select name="field[35]" value={academy} onChange={(event) => setAcademy(event.target.value)}>
              <option value="Foundation Track" onClick={() => setAcademy("Foundation Track")}>Foundation Track</option>
              <option value="Growth Track" onClick={() => setAcademy("Growth Track")}>Growth Track</option>
              <option value="Leadership Track" onClick={() => setAcademy("Leadership Track")}>Leadership Track</option>
            </select>
            <button type="submit" style={{backgroundColor: isLoading ? "gray" : "blue"}}>{isLoading ? "Applying..." : "Apply Now"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
