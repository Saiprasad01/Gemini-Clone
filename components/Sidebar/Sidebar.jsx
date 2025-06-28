import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
const Sidebar = () => {
  const [extended, seteExtended] = useState(false);

  return (
    <>
      <div className="sidebar">
        <div className="top">
          <img
            onClick={() => seteExtended((prev) => !prev)}
            className="menu"
            src={assets.menu_icon}
            alt="menu Icon"
          />
          <div className="new-chat">
            <img src={assets.plus_icon} alt="plus_icon" />
            {extended ? <p>New Chat</p> : null}
          </div>
          <div className="recent">
            {extended ? <p className="recent-title">Recent</p> : null}
            {extended ? (
              <div className="recet-entry">
                <img
                  src={assets.message_icon}
                  alt="message-Icon"
                  className="message-icon"
                />
                <p>What is React....</p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-item recet-entry">
            <img src={assets.question_icon} alt="question-icon" />
            {extended ? <p>Help</p> : null}
          </div>
          <div className="bottom-item recet-entry">
            <img src={assets.history_icon} alt="question-icon" />
            {extended ? <p>Activity</p> : null}
          </div>
          <div className="bottom-item recet-entry">
            <img src={assets.setting_icon} alt="question-icon" />
            {extended ? <p>Setting</p> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
