import React, {useState} from "react";
import TitleComponent from "../TitleComponent/TitleComponent";
import "../SecureChance/SecureChance.css";

const SecureChance = () => {
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
          setFullName('');
          setPhone('');
          setEmail('');
          setAcademy('Foundation Track');
        })
  };

  return (
    <div className="securechance-container">
      <div className="securechance-section">
        <TitleComponent
          title=" Submit your application for a chance to secure a $3,500 - $5,000 Scholarship."
          paragraph1="We will be in touch within 24 hours to guide you towards potentially receiving a 50% scholarship for our May 15th classes."
        />
        <div className="form-section">
          <form className="hero__form" onSubmit={onSubmitFormHandler}>
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
                <option value="Foundation Track" onClick={() => setAcademy("Foundation Track")}>Foundation Track
                </option>
                <option value="Growth Track" onClick={() => setAcademy("Growth Track")}>Growth Track</option>
                <option value="Leadership Track" onClick={() => setAcademy("Leadership Track")}>Leadership Track
                </option>
              </select>
              <button type="submit" style={{backgroundColor: isLoading ? "gray" : "blue"}} disabled={isLoading}>
                {isLoading ? "Applying..." : "Apply Now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SecureChance;
