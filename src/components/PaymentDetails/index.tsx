import React, { useEffect, useState, useCallback } from "react";

import { format } from "date-fns";

import {
  FiShuffle,
  FiCalendar,
  FiArrowRight,
  FiDollarSign,
} from "react-icons/fi";

import { PaymentDetails, MoneyConverted, TransactionInfos } from "./styles";

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
interface radioButtonProps {
  wichRadio: string;
  plan: string;
}

interface Props {
  radioButtonProps: radioButtonProps;
  dateChoose?: Date;
  allData: DataCountryConvertMoney;
}

/**
 * Container of Payment Details
 * @constructor
 * @param {radioButtonProps} radioButtonProps -  Know wich Radio Button was selected
 * @param {Date} dateChoose - Know what day was selected at calendar
 * @param {DataCountryConvertMoney} allData - All data formatted to show at PaymentDetails and confirm button
 */
const PaymentDetailsContainer: React.FC<Props> = ({
  radioButtonProps,
  dateChoose,
  allData,
}) => {
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

  const [radioButtonInfo, setRadioButtonInfo] = useState({
    wichRadio: "option1",
    plan: "Express",
  });

  const [detailDateText, setDetailDateText] = useState("");
  const [datePayInfo, setDatePayInfo] = useState("");

  useEffect(() => {
    setRadioButtonInfo(radioButtonProps);

    if (dateChoose !== undefined) setDatePayInfo(format(dateChoose, "dd MMMM"));

    setData(allData);
  }, [allData, dateChoose, radioButtonInfo, radioButtonProps]);

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

  /**
   * Action of button confirm clicked
   * @function
   */
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
  );
};

export default PaymentDetailsContainer;
