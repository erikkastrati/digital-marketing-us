import TitleComponent from "../TitleComponent/TitleComponent";
import "../SecureChance/SecureChance.css";
import ActiveCampaignForm from '../ActiveCampaignForm/ActiveCampaignForm';

const SecureChance = () => {
  return (
    <div className="securechance-container">
      <div className="securechance-section">
        <TitleComponent
          title=" Submit your application for a chance to secure a $3,500 - $5,000 Scholarship."
          paragraph1="We will be in touch within 24 hours to guide you towards potentially receiving a 50% scholarship for our May 15th classes."
        />
        <div className="form-section">
          <ActiveCampaignForm/>
        </div>
      </div>
    </div>
  );
};

export default SecureChance;
