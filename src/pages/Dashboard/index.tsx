import React from "react";
import { NavLink } from "react-router-dom";

import { Select } from "antd";
import "antd/dist/antd.css";

import {
  FiGrid,
  FiRepeat,
  FiShuffle,
  FiCreditCard,
  FiDatabase,
  FiSettings,
  FiLogOut,
  FiRefreshCcw,
  FiCalendar,
} from "react-icons/fi";

import {
  Container,
  LeftSideContainer,
  ProfileInfo,
  ServicesButtons,
  MiddleSideContainer,
  MiddleHeader,
  SelectionsDiv,
  ConvertedMoneyDiv,
  CalendarHeader,
  ListOfPlans,
  InputRadio,
  RigthSideContainer,
  PaymentDetails,
} from "./styles";

const Dashboard: React.FC = () => {
  const { Option } = Select;

  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }

  return (
    <Container>
      <LeftSideContainer>
        <ProfileInfo>
          <img
            src="https://avatars0.githubusercontent.com/u/57776263?s=460&u=0492ca374347582300b38a8665c05574b329fec6&v=4"
            alt="perfil"
          />
          <h2>Julio Merisio</h2>
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

      <MiddleSideContainer>
        <MiddleHeader>
          <h1>Send Money</h1>
          <div>
            <p>
              <strong>22,124</strong> available
            </p>
          </div>
        </MiddleHeader>

        <SelectionsDiv>
          <div>
            <p>from:</p>
            <select>
              <option value="0">Brazil</option>
              <option value="0">Selecione uma Cidade</option>
            </select>
          </div>

          <div>
            <p>to:</p>
            <select>
              <option value="0">Germany</option>
              <option value="0">Selecione uma Cidade</option>
            </select>
          </div>
        </SelectionsDiv>

        <ConvertedMoneyDiv>
          <div id="div">
            <span id="p">You send</span>
            <h2 id="h2">
              <strong>22,124</strong> BRL
            </h2>
          </div>

          <FiRefreshCcw size={18} color="#f364a2" />

          <div id="div">
            <span>Recipient gets</span>
            <h2>
              <strong>4,124</strong> EUR
            </h2>
          </div>
        </ConvertedMoneyDiv>

        <CalendarHeader>
          <h2>Choose a plan:</h2>
          <div>
            <p>Choose the date:</p>
            <FiCalendar size={24} />
          </div>
        </CalendarHeader>

        <ListOfPlans>
          <InputRadio>
            <input type="radio" name="option" />
            <div>
              <p>Get 27 July 2020 till 12pm</p>
              <span>Express</span>
            </div>
            <h2>$ 0.99</h2>
          </InputRadio>

          <InputRadio>
            <input type="radio" name="option" />
            <div>
              <p>Get 27 July 2020 till 12pm</p>
              <span>Express</span>
            </div>
            <h2>$ 0.99</h2>
          </InputRadio>

          <InputRadio>
            <input type="radio" name="option" />
            <div>
              <p>Get 27 July 2020 till 12pm</p>
              <span>Express</span>
            </div>
            <h2>$ 0.99</h2>
          </InputRadio>
        </ListOfPlans>
      </MiddleSideContainer>

      <RigthSideContainer>
        <div>
          <button></button>
          <button></button>
        </div>

        <PaymentDetails>
          <div></div>
          <div></div>
        </PaymentDetails>
      </RigthSideContainer>
    </Container>
  );
};

export default Dashboard;
