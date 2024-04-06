import React from "react";
import TitleComponent from "../TitleComponent/TitleComponent";
import "../SecureChance/SecureChance.css";

const SecureChance = () => {
  return (
    <div className="securechance-container">
      <div className="securechance-section">
        <TitleComponent
          title=" Submit your application for a chance to secure a $3,500 - $5,000 Scholarship."
          paragraph1="We will be in touch within 24 hours to guide you towards potentially receiving a 50% scholarship for our May 15th classes."
        />
        <div className="form-section">
          <form className="hero__form">
            <div className="form-group firstchild">
              <input
                type="text"
                name="fullname"
                placeholder="Name and Surname"
              />
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
              </select>
              <button type="submit">Apply Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SecureChance;
