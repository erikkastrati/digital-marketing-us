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
              <h3>По завршување на модулот:</h3>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Студентите ќе знаат како да постават Facebook Pixel и да
                  креираат реклами кои ќе следат како конвертираат со користење
                  на Facebook Ads Manager
                </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Ќе знаеш да оптимизираш и тестираш реклами</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Ќе го верификуваш бизнисот во Business Manager и ќе започнеш
                  да пушташ реклами
                </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Ќе го измериш перформансот на рекламите</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Ќе ги научиш различните фази во процесот на креирање на
                  реклами
                </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Ќе научиш таргетинг и ретаргетинг стратегии</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Ќе работиш со различни ad sets и ads</p>
              </div>
            </div>
            <hr />
            <div className="section-3">
              <h3>Овие вештини ќе ти помогнат да работиш како:</h3>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Facebook Ads Specialist</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Social Media Specialist</p>
              </div>
            </div>
          </div>
        );
      case "Content Marketing & Copywriting":
        return (
          <div className="program-content">
            <hr />
            <div className="section-2">
              <h3>По завршување на модулот:</h3>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Ќе научиш се што е Content Marketing и ќе дефинираш Buyer
                  Persona
                </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Ќе научиш како да читаш и разбираш бриф</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Ќе научиш што е Facebook Content Marketing</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Ќе научиш што е Influencer Marketing</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Ќе научиш што е Spotify Content Marketing</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Ќе научиш да дефинираш USG ( User-Generated-Content )</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Ќе научиш да менаџираш Social Media Crisis</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Ќе научиш стратегии и основи на Копирајтинг</p>
              </div>
            </div>
            <hr />
            <div className="section-3">
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
            </div>
          </div>
        );
      case "Account Management & Client Relations":
        return (
          <div className="program-content">
            <hr />
            <div className="section-2">
              <h3>По завршување на модулот:</h3>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Ќе разберете разлики помеѓу B2B & B2C стратегија</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Ќе изработите стратегија за Conversion & Retention</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Ќе можете да правите Client Onboarding</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Ќе креирате Емаил маркетинг стратегија</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Ќе можете да направите Линкедин стратегија</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Ќе можете да креирате самостојно презентација пред клиенти (
                  Pitch ){" "}
                </p>
              </div>
            </div>
            <hr />
            <div className="section-3">
              <h3>Овие вештини ќе ти помогнат да работиш како:</h3>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Account Executive </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Sales Development</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>B2B Business Development</p>
              </div>
            </div>
          </div>
        );
      case "Cold Email Marketing Outreach & Lead Generation":
        return (
          <div className="program-content">
            <hr />
            <div className="section-2">
              <h3>По завршување на модулот:</h3>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Ќе разберете што е Lead Generation (responsibilities, types,
                  broad overview)
                </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Концепти на добра емаил кампања </p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>
                  Ќе разберете што е Cold email outreach - значење на product /
                  pain points / prompts for using Chat GPT{" "}
                </p>
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
                <p>Scraping and extraction</p>
              </div>
              <div className="description-modaltick">
                <img src={TickModal} alt="tickmodal" />
                <p>Чистење на Email листи за ефективни кампањи - Scrubby</p>
              </div>
            </div>
            <hr />
            <div className="section-3">
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
            </div>
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
              onClick={() => handleProgramClick("Search Engine Optimization")}
            />
            <h4>Search Engine Optimization</h4>
          </div>
          <div className="program">
            <img
              src={Plus}
              alt="plus"
              onClick={() =>
                handleProgramClick("Content Marketing & Copywriting")
              }
            />
            <h4>Content Marketing & Copywriting </h4>
          </div>
          <div className="program">
            <img
              src={Plus}
              alt="plus"
              onClick={() => handleProgramClick("WordPress & Google Analytics")}
            />
            <h4>WordPress & Google Analytics </h4>
          </div>
          <div className="program">
            <img
              src={Plus}
              alt="plus"
              onClick={() =>
                handleProgramClick("Account Management & Client Relations")
              }
            />
            <h4>Account Management & Client Relations</h4>
          </div>
          <div className="program">
            <img
              src={Plus}
              alt="plus"
              onClick={() => handleProgramClick("Public Relations ( PR )")}
            />
            <h4>Public Relations ( PR ) </h4>
          </div>
          <div className="program">
            <img
              src={Plus}
              alt="plus"
              onClick={() =>
                handleProgramClick(
                  "Cold Email Marketing Outreach & Lead Generation"
                )
              }
            />
            <h4>Cold Email Marketing Outreach & Lead Generation</h4>
          </div>
          <div className="program">
            <img
              src={Plus}
              alt="plus"
              onClick={() =>
                handleProgramClick(
                  "Marketing Management & Digital Marketing Strategy"
                )
              }
            />
            <h4>Marketing Management & Digital Marketing Strategy</h4>
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
                handleProgramClick("Графички дизајн за маркетери ( Canva )")
              }
            />
            <h4>Графички дизајн за маркетери ( Canva ) </h4>
          </div>
          <div className="program">
            <img
              src={Plus}
              alt="plus"
              onClick={() => handleProgramClick("Google Advertising")}
            />
            <h4>Google Advertising </h4>
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
