import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import {
  FiAlignRight,
  FiGrid,
  FiRepeat,
  FiShuffle,
  FiCreditCard,
  FiDatabase,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

import { LeftSideContainer, ProfileInfo, ServicesButtons } from "./styles";

export interface Props {
  showNav?: boolean;
  onClick?: () => void;
}

/**
 * Perfil on leftTop and List of NavButtons
 * @constructor
 * @param {boolean} showNav -  Responsive Layout: show the list of NavButtons
 * @param {() => void} onClick - Just to know if this container was clicked (To close the calendar)
 */
const LeftSideRouteButtons: React.FC<Props> = ({ showNav, onClick }) => {
  const [showNavButtons, setShowNavButtons] = useState(true);

  return (
    <LeftSideContainer showNav={showNavButtons} onClick={onClick}>
      <ProfileInfo>
        <img
          src="https://avatars0.githubusercontent.com/u/57776263?s=460&u=0492ca374347582300b38a8665c05574b329fec6&v=4"
          alt="perfil"
        />
        <div>
          <h2>Marcus Martins</h2>
          <p>1231T233</p>
        </div>
      </ProfileInfo>

      <ServicesButtons showNav={showNavButtons}>
        <div>
          <NavLink to="/">
            <FiGrid size={18} />
            Services
          </NavLink>
          <NavLink to="/">
            <FiRepeat size={18} />
            Transaction
          </NavLink>
          <NavLink
            activeStyle={{
              color: "#E8368F",
              borderCollapse: "separate",
              borderSpacing: "115px 0",
              borderLeft: "3px solid #E8368F",
            }}
            to="/"
          >
            <FiShuffle size={18} />
            Send Money
          </NavLink>
          <NavLink to="/">
            <FiCreditCard size={18} />
            Cards
          </NavLink>
          <NavLink to="/">
            <FiDatabase size={18} />
            History
          </NavLink>
        </div>

        <div>
          <NavLink to="/">
            <FiSettings size={18} />
            Settings
          </NavLink>
          <NavLink to="/">
            <FiLogOut size={18} />
            Log Out
          </NavLink>
        </div>
      </ServicesButtons>

      <button onClick={() => setShowNavButtons(!showNavButtons)}>
        <FiAlignRight size={32} />
      </button>
    </LeftSideContainer>
  );
};

export default LeftSideRouteButtons;
