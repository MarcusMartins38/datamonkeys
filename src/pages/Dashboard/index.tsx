import React, { useEffect, useState, useCallback, ChangeEvent } from "react";

import api from "../../services/api";
import fx from "../../services/money";

import { format } from "date-fns";

import {
  FiShuffle,
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
  MiddleSideContainer,
  MiddleHeader,
  SelectionsDiv,
  ConvertedMoneyDiv,
  ListOfPlans,
  InputRadio,
  RightSideContainer,
  RightSideButtons,
  PaymentDetails,
  MoneyConverted,
  TransactionInfos,
} from "./styles";
import Axios from "axios";

import Calendar from "../../components/Calendar";
import LeftSideRouteButtons from "../../components/LeftSideRouteButtons";
import SelectCountryConvertMoney from "../../components/SelectCountryConvertMoney";

interface CountryData {
  label: string;
  id: string;
  value: string;
  flag: string;
}

interface DataCountryConvertMoney {
  selectedCountryFrom: CountryData;
  selectedCountryTo: CountryData;
  valueToBeConverted: number;
  convertedValue: number;
}

const Dashboard: React.FC = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [dateText, setDateText] = useState("");
  const [detailDateText, setDetailDateText] = useState("");
  const [radioButtonInfo, setRadioButtonInfo] = useState({
    wichRadio: "option1",
    plan: "Express",
  });
  const [datePayInfo, setDatePayInfo] = useState("");

  const defaultCountry = {
    label: "Canada",
    id: "CAD",
    value: "CAD",
    flag: "https://www.countryflags.io/ca/flat/64.png",
  };

  const [data, setData] = useState<DataCountryConvertMoney>({
    selectedCountryFrom: defaultCountry,
    selectedCountryTo: defaultCountry,
    valueToBeConverted: 0,
    convertedValue: 0,
  });

  useEffect(() => {
    if (radioButtonInfo.wichRadio === "option1") {
      setDetailDateText(datePayInfo + " till 12pm");
    }
    if (radioButtonInfo.wichRadio === "option2") {
      setDetailDateText(datePayInfo + " till 6pm");
    }
    if (radioButtonInfo.wichRadio === "option3") {
      setDetailDateText("Today till 8pm");
    }
  }, [datePayInfo, radioButtonInfo]);

  const countryAndConvertedMoney = useCallback(
    (data: DataCountryConvertMoney) => {
      setData(data);
    },
    []
  );

  const toggleModal = useCallback((): void => {
    // setOpenCalendar(!openCalendar);
    if (openCalendar === true) {
      setOpenCalendar(false);
    }
  }, [openCalendar]);

  const selectedDateText = useCallback((dateChoose: Date) => {
    setDateText(format(dateChoose, "dd MMMM yyyy"));
    setDatePayInfo(format(dateChoose, "dd MMMM"));
  }, []);

  const handleRadioButton = useCallback((e) => {
    if (e.target.value === "option1") {
      setRadioButtonInfo({ wichRadio: "option1", plan: "Express" });
    }
    if (e.target.value === "option2") {
      setRadioButtonInfo({ wichRadio: "option2", plan: "Standard" });
    }
    if (e.target.value === "option3") {
      setRadioButtonInfo({
        wichRadio: "option3",
        plan: "Only on working days from 11am to 8pm",
      });
    }
  }, []);

  const handleButtonConfirm = useCallback(() => {
    const timeSent = new Date(Date.now());

    const sentAt = timeSent.toISOString();

    const dataConfirmed = ` sentAt: "${sentAt}",
    plan: "${radioButtonInfo.plan}",
    sent: ${data.valueToBeConverted},
    received: ${data.convertedValue},
    from: "${data.selectedCountryFrom.value}",
    to: "${data.selectedCountryTo.value}",`;

    window.alert(dataConfirmed);
  }, [
    data.convertedValue,
    data.selectedCountryFrom.value,
    data.selectedCountryTo.value,
    data.valueToBeConverted,
    radioButtonInfo.plan,
  ]);

  return (
    <Container onClick={() => toggleModal()}>
      <LeftSideRouteButtons />

      <MiddleSideContainer>
        <MiddleHeader>
          <h1>Send Money</h1>
          <div>
            <p>
              <strong>22,124</strong> available
            </p>
          </div>
        </MiddleHeader>

        <SelectCountryConvertMoney
          countryAndConvertedMoney={countryAndConvertedMoney}
        />

        <Calendar
          isOpen={openCalendar}
          setIsOpen={toggleModal}
          selectedDateText={selectedDateText}
        />

        <ListOfPlans onChange={handleRadioButton}>
          <InputRadio>
            <input
              type="radio"
              name="option"
              id="option1"
              value="option1"
              defaultChecked
            />
            <label htmlFor="option1">
              <FiCheck />

              <div>
                <p>Get {dateText} till 12pm</p>
                <span>Express</span>
              </div>

              <strong>$ 0.99</strong>
            </label>
          </InputRadio>

          <InputRadio>
            <input type="radio" name="option" id="option2" value="option2" />
            <label htmlFor="option2">
              <FiCheck />

              <div>
                <p>Get {dateText} till 6pm</p>
                <span>Standard</span>
              </div>

              <strong>$ 1.00</strong>
            </label>
          </InputRadio>

          <InputRadio>
            <input type="radio" name="option" id="option3" value="option3" />
            <label htmlFor="option3">
              <FiCheck />

              <div>
                <p>Get today till 8pm</p>
                <span>Only on working days from 11am to 8pm</span>
              </div>

              <strong>$ 1.00</strong>
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
              <p>{data.valueToBeConverted}</p>
              <span>
                <img src={data.selectedCountryFrom.flag} alt="flag" />
                {data.selectedCountryFrom.value}
              </span>
            </div>
            <button>
              <FiArrowRight size={24} color="#1F2933" />
            </button>
            <div>
              <p>{data.convertedValue}</p>
              <span>
                <img src={data.selectedCountryTo.flag} alt="flag" />
                {data.selectedCountryTo.value}
              </span>
            </div>
          </MoneyConverted>

          <TransactionInfos>
            <div>
              <p>
                <FiCalendar size={24} /> Delivery
              </p>
              <strong>{detailDateText}</strong>
            </div>
            <div>
              <p>
                <FiDollarSign size={24} /> Conversion rate
              </p>
              <strong>{data.valueToBeConverted}</strong>
            </div>
            <div>
              <p>
                <FiShuffle size={24} /> Recipient gets
              </p>
              <strong>{data.convertedValue}</strong>
            </div>

            <button onClick={handleButtonConfirm}>Confirm</button>
          </TransactionInfos>
        </PaymentDetails>
      </RightSideContainer>
    </Container>
  );
};

export default Dashboard;
