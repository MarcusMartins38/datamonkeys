import React from "react";

import { NavLink } from "react-router-dom";

import {
  FiGrid,
  FiRepeat,
  FiShuffle,
  FiCreditCard,
  FiDatabase,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

import { LeftSideContainer, ProfileInfo, ServicesButtons } from "./styles";

const LeftSideRouteButtons: React.FC = () => {
  return (
    <LeftSideContainer>
      <ProfileInfo>
        <img
          src="https://avatars0.githubusercontent.com/u/57776263?s=460&u=0492ca374347582300b38a8665c05574b329fec6&v=4"
          alt="perfil"
        />
        <h2>Marcus Martins</h2>
        <p>1231T233</p>
      </ProfileInfo>

      <ServicesButtons>
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
    </LeftSideContainer>
  );
};

export default LeftSideRouteButtons;
