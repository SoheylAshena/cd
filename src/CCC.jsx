import React, { useState } from "react";

const CCC = () => {
  // State variables for inputs
  const [c, setC] = useState(0);
  const [x, setX] = useState(0);
  const [customI, setCustomI] = useState(""); // New state for custom بیمه

  // State variables for results
  const [cif, setCIF] = useState(0);
  const [resultX, setResultX] = useState(0);
  const [helal, setHelal] = useState(0);
  const [valueAddedTask, setValueAddedTask] = useState(0);
  const [municipalWaste, setMunicipalWaste] = useState(0);
  const [totalSum, setTotalSum] = useState(0);

  // Function to reset the results
  const resetResults = () => {
    setCIF(0);
    setResultX(0);
    setHelal(0);
    setValueAddedTask(0);
    setMunicipalWaste(0);
    setTotalSum(0);
  };

  // Function to format numbers with thousands separators
  const formatNumber = (num) => {
    return num.toLocaleString(); // This will format the number with commas as thousands separators
  };

  // Handle calculations based on selected option (only E&F now)
  const calculateResults = (e) => {
    e.preventDefault();

    // E&F: Calculate I, CIF, ResultX, Helal, ValueAddedTask, MunicipalWaste, and TotalSum

    const calculatedCIF = Number(c);
    const calculatedResultX = calculatedCIF * (Number(x) / 100);
    const calculatedHelal = calculatedCIF * (Number(x) / 100) * 0.01;
    const calculatedValueAddedTask =
      (calculatedCIF + (Number(x) / 100) * calculatedCIF) * 0.1;
    const calculatedMunicipalWaste = 0.001 * calculatedCIF;
    const calculatedTotalSum =
      calculatedResultX +
      calculatedHelal +
      calculatedValueAddedTask +
      calculatedMunicipalWaste;

    // Set results
    setCIF(calculatedCIF);
    setResultX(calculatedResultX);
    setHelal(calculatedHelal);
    setValueAddedTask(calculatedValueAddedTask);
    setMunicipalWaste(calculatedMunicipalWaste);
    setTotalSum(calculatedTotalSum);
  };

  return (
    <div className="app-container">
      <form onSubmit={calculateResults} className="calculator-form">
        <h2 className="form-title">Incoterms (C&D) 2020 </h2>

        {/* Input for C */}
        <div className="input-container">
          <label htmlFor="c">قیمت خرید کالا در مبدا: </label>
          <input
            type="number"
            name="c"
            value={c}
            onChange={(e) => setC(e.target.value)}
            className="input-field"
          />
        </div>

        {/* Input for X */}
        <div className="input-container">
          <label htmlFor="x">درصد حقوق ورودی: </label>
          <input
            type="number"
            name="x"
            value={x}
            onChange={(e) => setX(e.target.value)}
            className="input-field"
          />
        </div>

        <button type="submit" className="submit-btn">
          Calculate
        </button>
      </form>

      {/* Result Display */}
      <div className="result-container">
        <p className="result">ارزش سیف = {formatNumber(cif)}</p>
        {resultX !== null && (
          <p className="result">حقوق ورودی = {formatNumber(resultX)}</p>
        )}
        <p className="result">هلال احمر = {formatNumber(helal)}</p>
        <p className="result">
          مالیات بر ارزش افزوده = {formatNumber(valueAddedTask)}
        </p>
        <p className="result">
          پسماند شهرداری = {formatNumber(municipalWaste)}
        </p>
        <p className="result">
          مجموع حقوق و عوارض گمرکی برابر است با = {formatNumber(totalSum)}
        </p>
      </div>
    </div>
  );
};
export default CCC;
