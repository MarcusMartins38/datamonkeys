import React, { useEffect, useState, useCallback, ChangeEvent } from "react";

import fx from "../../services/money";
import api from "../../services/api";

import { FiRefreshCcw } from "react-icons/fi";

import { SelectionsDiv, ConvertedMoneyDiv } from "./styles";

import Axios from "axios";

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

interface Props {
  countryAndConvertedMoney: (data: DataCountryConvertMoney) => void;
}

const SelectCountryConvertMoney: React.FC<Props> = ({
  countryAndConvertedMoney,
}) => {
  const [countries, setCountries] = useState<CountryData[]>([]);

  const [selectedCountryFrom, setSelectedCountryFrom] = useState<CountryData>({
    label: "Canada",
    id: "CAD",
    value: "CAD",
    flag: "https://www.countryflags.io/ca/flat/64.png",
  });

  const [selectedCountryTo, setSelectedCountryTo] = useState<CountryData>({
    label: "Canada",
    id: "CAD",
    value: "CAD",
    flag: "https://www.countryflags.io/ca/flat/64.png",
  });

  const [valueToBeConverted, setValueToBeConverted] = useState(0);
  const [convertedValue, setConvertedValue] = useState(0);

  useEffect(() => {
    api.get("/currencies").then((response) => {
      setCountries(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get(
      "https://openexchangerates.org/api/latest.json?app_id=f2d55242a75a4a8685d5c1c4c3c40bef"
    ).then((response) => {
      fx.rates = response.data.rates;
      fx.base = response.data.base;
    });
  }, []);

  useEffect(() => {
    try {
      setConvertedValue(
        fx
          .convert(valueToBeConverted, {
            from: selectedCountryFrom?.value,
            to: selectedCountryTo?.value,
          })
          .toFixed(2)
      );
    } catch (err) {}
  }, [selectedCountryFrom, selectedCountryTo, valueToBeConverted]);

  useEffect(() => {
    countryAndConvertedMoney({
      selectedCountryFrom,
      selectedCountryTo,
      valueToBeConverted,
      convertedValue,
    });
  }, [
    convertedValue,
    countryAndConvertedMoney,
    selectedCountryFrom,
    selectedCountryTo,
    valueToBeConverted,
  ]);

  const handleSelectedCountryFrom = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const country = event.target.value;

      api
        .get("/currencies", { params: { label: country } })
        .then((response) => {
          setSelectedCountryFrom(response.data[0]);
        });
    },
    []
  );

  const handleSelectedCountryTo = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const country = event.target.value;

      api
        .get("/currencies", { params: { label: country } })
        .then((response) => {
          setSelectedCountryTo(response.data[0]);
        });
    },
    []
  );

  const handleInputValueSent = useCallback((e) => {
    if (e.target.value < 0) {
      setValueToBeConverted(0);
    } else setValueToBeConverted(e.target.value);
  }, []);

  return (
    <>
      <SelectionsDiv>
        <div>
          <p>from:</p>
          <div>
            {selectedCountryFrom && (
              <img src={selectedCountryFrom.flag} alt="flag" />
            )}
            <select onChange={handleSelectedCountryFrom}>
              {countries.map((country) => (
                <option key={country.id} value={country.label}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <p>to:</p>
          <div>
            {selectedCountryTo && (
              <img src={selectedCountryTo.flag} alt="flag" />
            )}
            <select onChange={handleSelectedCountryTo}>
              {countries.map((country) => (
                <option key={country.id} value={country.label}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </SelectionsDiv>

      <ConvertedMoneyDiv>
        <div>
          <span>You send</span>
          <h2>
            <input
              placeholder="22,124"
              type="number"
              min={0}
              onChange={handleInputValueSent}
              value={valueToBeConverted}
            />
            {selectedCountryFrom.value}
          </h2>
        </div>

        <FiRefreshCcw size={18} color="#f364a2" />

        <div>
          <span>Recipient gets</span>
          <h2>
            <input readOnly value={convertedValue}></input>{" "}
            {selectedCountryTo.value}
          </h2>
        </div>
      </ConvertedMoneyDiv>
    </>
  );
};

export default SelectCountryConvertMoney;
