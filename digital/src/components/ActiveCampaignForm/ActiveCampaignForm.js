import {useState} from 'react';
import './ActiveCampaignForm.css';

const ActiveCampaignForm = (props) => {
  const {showTitle} = props;
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [academy, setAcademy] = useState('Foundation Track');
  const [referralCode, setReferralCode] = useState('');

  const onChangeFullNameHandler = (event) => {
    setFullName(event.target.value);
  };

  const onChangeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const onChangePhoneHandler = (event) => {
    setPhone(event.target.value);
  };

  const onChangeReferralCodeHandler = (event) => {
    setReferralCode(event.target.value);
  };

  const onSubmitFormHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const activeCampaignSubmitUrl =
      `https://akoskarova.activehosted.com/proc.php?u=570&f=570&s=&c=0&m=0&act=sub&v=2
      &or=8beb7dde5c1bb2035c2d2f64692a2764
      &fullname=${fullName}
      &email=${email}
      &phone=${phone}
      &field[35]=${academy}
      &field[37]=${referralCode}
      &jsonp=true`;

    fetch(activeCampaignSubmitUrl)
      .then(() => {
        setIsLoading(false);
        setFullName('');
        setPhone('');
        setEmail('');
        setAcademy('Foundation Track');
        setReferralCode('');
        setIsSubmitted(true);
      });
  };

  return (
    <form className="hero__form" onSubmit={onSubmitFormHandler}>
      {showTitle && (
        <>
          <h2>New Cohort Begins May 15th!</h2>
          <span>
            Complete the form and our Scholarship Specialist will be in touch!
          </span>
        </>
      )}
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
      </div>
      <div className="form-group">
        <input type="text" name="field[37]" placeholder="Referral Code" value={referralCode} onChange={onChangeReferralCodeHandler}/>
      </div>
      <button type="submit" style={{backgroundColor: isLoading ? "gray" : "blue"}} disabled={isLoading}>
        {isLoading ? "Applying..." : "Apply Now"}
      </button>
      {isSubmitted && (
        <div className="submission-successful">
          <p>Thank you for your application, we will be in touch!</p>
        </div>
      )}
    </form>
  );
};

export default ActiveCampaignForm;