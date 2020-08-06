import React, { useState, useCallback } from "react";

import { format } from "date-fns";

import { FiFileText, FiHelpCircle, FiCheck } from "react-icons/fi";

import {
  Container,
  MiddleSideContainer,
  MiddleHeader,
  ListOfPlans,
  InputRadio,
  RightSideContainer,
  RightSideButtons,
} from "./styles";

import Calendar from "../../components/Calendar";
import LeftSideRouteButtons from "../../components/LeftSideRouteButtons";
import SelectCountryConvertMoney from "../../components/SelectCountryConvertMoney";
import PaymentDetailsContainer from "../../components/PaymentDetails";

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

const SendMoney: React.FC = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [dateText, setDateText] = useState("");
  const [radioButtonInfo, setRadioButtonInfo] = useState({
    wichRadio: "option1",
    plan: "Express",
  });
  const [dateChooseCalendar, setDateChooseCalendar] = useState<Date>();

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

  const countryAndConvertedMoney = useCallback(
    (dataFromChild: DataCountryConvertMoney) => {
      setData(dataFromChild);
    },
    []
  );

  const toggleModal = useCallback((calendarOpened: boolean): void => {
    setOpenCalendar(calendarOpened);
  }, []);

  const handleClickOnContainer = useCallback(() => {
    if (openCalendar === true) {
      setOpenCalendar(false);
    }
  }, [openCalendar]);

  const selectedDateText = useCallback((dateChoose: Date) => {
    setDateText(format(dateChoose, "dd MMMM yyyy"));
    setDateChooseCalendar(dateChoose);
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

  return (
    <Container>
      <LeftSideRouteButtons onClick={handleClickOnContainer} />

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
          onClick={handleClickOnContainer}
          countryAndConvertedMoney={countryAndConvertedMoney}
        />

        <Calendar
          isOpen={openCalendar}
          toggleModal={toggleModal}
          selectedDateText={selectedDateText}
        />

        <ListOfPlans
          onChange={handleRadioButton}
          onClick={handleClickOnContainer}
        >
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

      <RightSideContainer onClick={handleClickOnContainer}>
        <RightSideButtons>
          <button>
            <FiFileText size={24} color="#1F2933" />
          </button>
          <button>
            <FiHelpCircle size={24} color="#1F2933" />
          </button>
        </RightSideButtons>

        <PaymentDetailsContainer
          radioButtonProps={radioButtonInfo}
          dateChoose={dateChooseCalendar}
          allData={data}
        />
      </RightSideContainer>
    </Container>
  );
};

export default SendMoney;
