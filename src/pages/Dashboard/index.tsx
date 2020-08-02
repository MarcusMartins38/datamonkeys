import React from "react";
import { NavLink } from "react-router-dom";

// import { Select } from "antd";

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
  FiArrowRight,
  FiFileText,
  FiHelpCircle,
  FiDollarSign,
  FiCheck,
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
  RightSideContainer,
  RightSideButtons,
  PaymentDetails,
  MoneyConverted,
  TransactionInfos,
} from "./styles";

const Dashboard: React.FC = () => {
  // const { Option } = Select;

  // function handleChange(value: string) {
  //   console.log(`selected ${value}`);
  // }

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
            <input type="radio" name="option" id="option1" />
            <label htmlFor="option1">
              <FiCheck />

              <div>
                <p>Get 27 July 2020 till 12pm</p>
                <span>Express</span>
              </div>

              <strong>$ 0.99</strong>
            </label>
          </InputRadio>

          <InputRadio>
            <input type="radio" name="option" id="option2" />
            <label htmlFor="option2">
              <FiCheck />

              <div>
                <p>Get 27 July 2020 till 12pm</p>
                <span>Express</span>
              </div>

              <strong>$ 0.99</strong>
            </label>
          </InputRadio>

          <InputRadio>
            <input type="radio" name="option" id="option3" />
            <label htmlFor="option3">
              <FiCheck />

              <div>
                <p>Get 27 July 2020 till 12pm</p>
                <span>Express</span>
              </div>

              <strong>$ 0.99</strong>
            </label>
          </InputRadio>
        </ListOfPlans>
      </MiddleSideContainer>

      <RightSideContainer>
        <RightSideButtons>
          <button>
            <FiFileText size={24} color="#1F2933" />
          </button>
          <button>
            <FiHelpCircle size={24} color="#1F2933" />
          </button>
        </RightSideButtons>

        <PaymentDetails>
          <h2>Payment Details</h2>

          <MoneyConverted>
            <div>
              <p>22,124</p>
              <span>
                <img
                  src="https://avatars0.githubusercontent.com/u/57776263?s=460&u=0492ca374347582300b38a8665c05574b329fec6&v=4"
                  alt="flag"
                />
                BRL
              </span>
            </div>
            <button>
              <FiArrowRight size={24} color="#1F2933" />
            </button>
            <div>
              <p>4,124</p>
              <span>
                <img
                  src="https://avatars0.githubusercontent.com/u/57776263?s=460&u=0492ca374347582300b38a8665c05574b329fec6&v=4"
                  alt="flag"
                />
                EUR
              </span>
            </div>
          </MoneyConverted>

          <TransactionInfos>
            <div>
              <p>
                <FiCalendar size={24} /> Delivery
              </p>
              <strong>27 July till 12pm</strong>
            </div>
            <div>
              <p>
                <FiDollarSign size={24} /> Conversion rate
              </p>
              <strong>22,124</strong>
            </div>
            <div>
              <p>
                <FiShuffle size={24} /> Recipient gets
              </p>
              <strong>4,124</strong>
            </div>

            <button>Confirm</button>
          </TransactionInfos>
        </PaymentDetails>
      </RightSideContainer>
    </Container>
  );
};

export default Dashboard;
