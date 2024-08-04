import React, { useState, useEffect } from "react";
import { Slider } from "@mui/material";

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTaxes, setPropertyTaxes] = useState(265);
  const [homeInsurance, setHomeInsurance] = useState(132);
  const [hoaFees, setHoaFees] = useState(132);
  const [utilities, setUtilities] = useState(100);

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [segments, setSegments] = useState({});

  useEffect(() => {
    calculateMonthlyPayment();
  }, [
    homePrice,
    downPayment,
    interestRate,
    loanTerm,
    propertyTaxes,
    homeInsurance,
    hoaFees,
    utilities,
  ]);

  const calculateMonthlyPayment = () => {
    const loanAmount = homePrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const principalAndInterest = (
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))
    ).toFixed(2);

    const totalMonthlyPayment = (
      parseFloat(principalAndInterest) +
      parseFloat(propertyTaxes) +
      parseFloat(homeInsurance) +
      parseFloat(hoaFees) +
      parseFloat(utilities)
    ).toFixed(2);

    setMonthlyPayment(totalMonthlyPayment);

    setSegments({
      principalAndInterest: parseFloat(principalAndInterest),
      propertyTaxes: parseFloat(propertyTaxes),
      homeInsurance: parseFloat(homeInsurance),
      hoaFees: parseFloat(hoaFees),
      utilities: parseFloat(utilities),
    });
  };

  const total = Object.values(segments).reduce((acc, val) => acc + val, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Mortgage Calculator</h1>
      <p className="mb-8">
        Use our mortgage calculator to get an estimate for your monthly mortgage
        payments.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <label className="block mb-2">Home Price</label>
          <input
            type="number"
            className="w-full p-2 border"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
          />
        </div>
        <div className="col-span-3 flex gap-10 justify-around items-center">
          <div>
            <label htmlFor="monthly-payment">Monthly Payment</label>
            <div id="monthly-payment" className="text-3xl font-semibold">
              ${monthlyPayment}/mo
            </div>
          </div>
          <div className="bg-backgroundInverseSecondary text-white text-md px-7 py-3 rounded-full">
            Get pre-approved
          </div>
        </div>
        <div className="col-span-4">
          <Slider
            min={50000}
            max={300000}
            color="black"
            step={100}
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
            value={homePrice}
            onChange={(e, value) => setHomePrice(value)}
          />
        </div>
        <div>
          <label className="block mb-2">Zip code</label>
          <input
            type="number"
            className="w-full p-2 border"
            value={148661}
            onChange={(e) => setDownPayment(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block mb-2">Down Payment</label>
          <input
            type="number"
            className="w-full p-2 border"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block mb-2">Interest Rate (%)</label>
          <input
            type="number"
            step="0.01"
            className="w-full p-2 border"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block mb-2">Loan Term (years)</label>
          <select
            className="w-full p-2 border"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
          >
            <option value="15">15 years</option>
            <option value="20">20 years</option>
            <option value="30">30 years</option>
          </select>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="flex">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Monthly Payment Breakdown
            </h2>
            <p className="text-4xl font-bold">${monthlyPayment}/mo</p>
            <div className="flex mt-4 w-1/2">
              {Object.entries(segments).map(([key, value], index) => (
                <div
                  key={key}
                  style={{
                    width: `${(value / total) * 100}%`,
                    backgroundColor: [
                      "#4caf50",
                      "#3f51b5",
                      "#ff9800",
                      "#f44336",
                      "#e91e63",
                    ][index],
                    textAlign: "center",
                    borderRadius: "100px",
                    fontSize: "12px",
                    height: "40px",
                    fontWeight: "bold",
                    lineHeight: "1.5",
                    display: "inline-block",
                    color: "white",
                    padding: "10px 0",
                    marginRight:
                      index < Object.keys(segments).length - 1 ? "2px" : "0",
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div></div>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-green-600">Principal & Interest</span>
                  <span>
                    ${((homePrice - downPayment) * interestRate) / 100 / 12}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600">Property Taxes</span>
                  <input
                    type="number"
                    className="w-1/5 p-1 rounded-lg border"
                    value={propertyTaxes}
                    onChange={(e) => setPropertyTaxes(Number(e.target.value))}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-600">Home Insurance</span>
                  <input
                    type="number"
                    className="w-1/5 p-1 rounded-lg border"
                    value={homeInsurance}
                    onChange={(e) => setHomeInsurance(Number(e.target.value))}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-red-600">HOA Fees</span>
                  <input
                    type="number"
                    className="w-1/5 p-1 rounded-lg border"
                    value={hoaFees}
                    onChange={(e) => setHoaFees(Number(e.target.value))}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-pink-600">Utilities</span>
                  <input
                    type="number"
                    className="w-1/5 p-1 rounded-lg border"
                    value={utilities}
                    onChange={(e) => setUtilities(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="mt-4 px-4 py-2 bg-gray-300 rounded-md">
        Copy estimate link
      </button>
    </div>
  );
};

export default MortgageCalculator;
