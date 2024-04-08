import React, { useState } from "react";
import Plus from "../../assets/images/tabler_plus.svg";
import "../ProgramComponent/ProgramComponent.css";
import Team from "../../assets/images/Edited Photos 1.png";
import ButtonPractice from "../ButtonPracticeComponent/ButtonPractice";
import Modal from "react-modal";
import TickModal from "../../assets/images/Group 44670.svg";
import CloseCircle from "../../assets/images/close-circle.png";

const ProgramComponent = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const renderProgramContent = () => {
    switch (selectedProgram) {
      case "Facebook & Instagram Advertising":
        return (
          <div className="program-content">
            <hr />
            <div className="section-2">
              <h3>In this module you will: </h3>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Create convertible ads using the Facebook Ads Manager</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Verify a Business and use Business Manager for running ads
                </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Measure the performance of the ads</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Learn the different stages upon ad creation</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Learn targeting & retargeting audience strategies</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Work with different ad sets and ad</p>
              </div>
            </div>
            <hr />
            {/* <div className="section-3">
              <h3>Овие вештини ќе ти помогнат да работиш како:</h3>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Facebook Ads Specialist</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Social Media Specialist</p>
              </div>
            </div> */}
          </div>
        );
      case "Ad Copy Creation ( + Copywriting)":
        return (
          <div className="program-content">
            <hr />
            <div className="section-2">
              <h3>In this module you will: </h3>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Learn strategies on content writing for ads</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p> Understand the process of storytelling</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Work on your own copy using practices and create high quality
                  content strategy
                </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Create different ad copy for different stages at the sales
                  cycle, leads, prospects and customers
                </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Learn Wordpress basics in order to be able to use it when
                  optimizing blogs for clients
                </p>
              </div>
            </div>
            <hr />
            {/* <div className="section-3">
              <h3>Овие вештини ќе ти помогнат да работиш како:</h3>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>PR Manager</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Content Creator</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Copywriter</p>
              </div>
            </div> */}
          </div>
        );
      case "Email Marketing":
        return (
          <div className="program-content">
            <hr />
            <div className="section-2">
              <h3>In this module you will:</h3>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Create Email Marketing Strategy for a client and execute it
                </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Embed the Email Marketing as part of the overall digital
                  marketing strategy{" "}
                </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Automate the processes, using Email Marketing Software</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Selecting Data Providers for Cold Email Campaigns - What are
                  you selling / Influencers / Ecom stores / Apollo / Intention
                  database
                </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Create lead magnets, website forms, pop ups, using Email
                  Marketing Software and embed them on a website
                </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  {" "}
                  Measure if your Email Marketing Strategy is converting leads
                  into clients
                </p>
              </div>
            </div>
            <hr />
            {/* <div className="section-3">
              <h3>Овие вештини ќе ти помогнат да работиш како:</h3>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Email Marketing Strategist</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>B2B Lead Gen </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Cold Outreach Specialist </p>
              </div>
            </div> */}
          </div>
        );
      case "Google Advertising":
        return (
          <div className="program-content">
            <hr />
            <div className="section-2">
              <h3>In this module you will:</h3>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Set up Search and Display Ads</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Optimize for different audiences</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Create custom behaviors, and retarget customers</p>
              </div>
            </div>
            <hr />
          </div>
        );
      case "Google Analytics and Google Tag Manager":
        return (
          <div className="program-content">
            <hr />
            <div className="section-2">
              <h3>In this module you will:</h3>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Work with Google Analytics 4</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Set up tags, triggers, variables in Google Tag Manager</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Create Events in GA4 and track real-time reports</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Use GA4 and GTM to understand the users and their behavior on
                  a website
                </p>
              </div>
            </div>
            <hr />
          </div>
        );
      case "Digital Marketing Strategy ( Targeting and Re targeting Strategies )":
        return (
          <div className="program-content">
            <hr />
            <div className="section-2">
              <h3>In this module you will:</h3>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Connect different elements in the Digital Marketing</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Strategy such as Facebook Ads, Website & Email</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Marketing to create retargeting strategies that will convert
                  prospects into buyers
                </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Work on a real-project and practice conversions on your own
                </p>
              </div>
            </div>
            <hr />
          </div>
        );
      case "Go-to-Market Strategy":
        return (
          <div className="program-content">
            <hr />
            <div className="section-2">
              <h3>In this module you will:</h3>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Understand all the elements prior to launching a digital
                  marketing strategy on a target market
                </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Understand the process of Go-to-market and setting the plan
                </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Create a checklist for go-to-market strategy</p>
              </div>
            </div>
            <hr />
          </div>
        );
      case "Buyer Persona":
        return (
          <div className="program-content">
            <hr />
            <div className="section-2">
              <h3>In this module you will:</h3>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Create buyer personas for business</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Create a value proposition for a buyer persona</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Convert that value into an ad copy</p>
              </div>
            </div>
            <hr />
          </div>
        );
      case "Create a Buyer Persona and Structure a Go-to-Market Strategy around":
        return (
          <div className="program-content">
            <hr />
            <div className="section-2">
              <h3>In this module you will:</h3>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Create buyer personas for business</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Create a value proposition for a buyer persona</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Convert that value into an ad copy</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Understand all the elements prior to launching a digital
                  marketing strategy on a target market
                </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Understand the process of Go-to-market and setting the plan
                </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Create a checklist for go-to-market strategy</p>
              </div>
            </div>
            <hr />
          </div>
        );
      case "Embedding Digital Marketing Strategy in UX UI   Design":
        return (
          <div className="program-content">
            <hr />
            <div className="section-2">
              <h3>In this module you will:</h3>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Suggest lead magnets and convertible content while working on
                  design mockups with the team
                </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Work with UX UI Designers to create high quality copy that
                  will convert prospects to leads
                </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Learn multiple strategies and build a track record on it</p>
              </div>
            </div>
            <hr />
          </div>
        );
      case "Digital Marketing KPI’s ":
        return (
          <div className="program-content">
            <hr />
            <div className="section-2">
              <h3>In this module you will:</h3>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Measure your own performance by setting up the right KPI’s for
                  you
                </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Draft reports for clients based on conversion data from your
                  work
                </p>
              </div>
            </div>
            <hr />
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="program_section">
      <div className="programs-left">
        <ButtonPractice>months 1 - 8 </ButtonPractice>
        <h3>Foundational Learning </h3>
        <div className="programs">
          <div className="program">
            <img
              src={Plus}
              alt="plus"
              onClick={() =>
                handleProgramClick("Facebook & Instagram Advertising")
              }
            />
            <h4>Facebook & Instagram Advertising ( Social Media Ads ) </h4>
          </div>
          <div className="program">
            <img
              src={Plus}
              alt="plus"
              onClick={() =>
                handleProgramClick("Google Analytics and Google Tag Manager")
              }
            />
            <h4>Google Analytics and Google Tag Manager</h4>
          </div>
          <div className="program">
            <img
              src={Plus}
              alt="plus"
              onClick={() =>
                handleProgramClick("Ad Copy Creation ( + Copywriting)")
              }
            />
            <h4>Ad Copy Creation ( + Copywriting)</h4>
          </div>
          <div className="program">
            <img
              src={Plus}
              alt="plus"
              onClick={() => handleProgramClick("Buyer Persona")}
            />
            <h4>Buyer Persona </h4>
          </div>
          <div className="program">
            <img
              src={Plus}
              alt="plus"
              onClick={() =>
                handleProgramClick(
                  "Digital Marketing Strategy ( Targeting and Re targeting Strategies )"
                )
              }
            />
            <h4>
              Digital Marketing Strategy ( Targeting and Re targeting Strategies
              )
            </h4>
          </div>
          <div className="program">
            <img
              src={Plus}
              alt="plus"
              onClick={() => handleProgramClick("Go-to-Market Strategy")}
            />
            <h4>Go-to-Market Strategy</h4>
          </div>
          <div className="program">
            <img
              src={Plus}
              alt="plus"
              onClick={() => handleProgramClick("Email Marketing")}
            />
            <h4>Email Marketing</h4>
          </div>
          <div className="program">
            <img
              src={Plus}
              alt="plus"
              onClick={() =>
                handleProgramClick(
                  "Embedding Digital Marketing Strategy in UX UI   Design"
                )
              }
            />
            <h4>Embedding Digital Marketing Strategy in UX UI Design</h4>
          </div>
          <div className="program">
            <img
              src={Plus}
              alt="plus"
              onClick={() => handleProgramClick("Google Advertising")}
            />
            <h4>Google Advertising </h4>
          </div>
          <div className="program">
            <img
              src={Plus}
              alt="plus"
              onClick={() => handleProgramClick("Digital Marketing KPI’s ")}
            />
            <h4>Digital Marketing KPI’s </h4>
          </div>
        </div>
      </div>
      <div className="program-right">
        <div className="program-img">
          <img src={Team} className="blueimageright" alt="team" />
        </div>
      </div>
      <Modal isOpen={showModal} onRequestClose={closeModal}>
        <div className="modal-header">
          <h2>{selectedProgram}</h2>
          <img src={CloseCircle} onClick={closeModal} alt="closecircle" />
        </div>
        <div className="modal-body">{renderProgramContent()}</div>
      </Modal>
    </div>
  );
};

export default ProgramComponent;
