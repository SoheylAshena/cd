import React, { useState } from "react";

const CombinedApp = () => {
  const [activeTab, setActiveTab] = useState("EF");

  const formatNumber = (num) => num.toLocaleString();
  const [c, setC] = useState(0);
  const [f, setF] = useState(0);
  const [x, setX] = useState(0);
  const [customI, setCustomI] = useState("");
  const [i, setI] = useState(0);
  const [cif, setCIF] = useState(0);
  const [resultX, setResultX] = useState(0);
  const [helal, setHelal] = useState(0);
  const [valueAddedTask, setValueAddedTask] = useState(0);
  const [municipalWaste, setMunicipalWaste] = useState(0);
  const [totalSum, setTotalSum] = useState(0);

  const resetResults = () => {
    setI(0);
    setCIF(0);
    setResultX(0);
    setHelal(0);
    setValueAddedTask(0);
    setMunicipalWaste(0);
    setTotalSum(0);
  };

  const calculateResults = (e) => {
    e.preventDefault();
    let calculatedI = 0;
    let calculatedCIF = 0;

    if (activeTab === "EF") {
      calculatedI = customI ? Number(customI) : 0.005 * (Number(c) + Number(f));
      calculatedCIF = Number(c) + calculatedI + Number(f);
    } else if (activeTab === "CD") {
      calculatedI = customI ? Number(customI) : 0.005 * Number(c);
      calculatedCIF = Number(c) + calculatedI;
    } else if (activeTab === "CCC") {
      calculatedCIF = Number(c);
    }

    const calculatedResultX = calculatedCIF * (Number(x) / 100);
    const calculatedHelal = calculatedResultX * 0.01;
    const calculatedValueAddedTask = (calculatedCIF + calculatedResultX) * 0.1;
    const calculatedMunicipalWaste = 0.001 * calculatedCIF;
    const calculatedTotalSum =
      calculatedResultX +
      calculatedHelal +
      calculatedValueAddedTask +
      calculatedMunicipalWaste;

    setI(calculatedI);
    setCIF(calculatedCIF);
    setResultX(calculatedResultX);
    setHelal(calculatedHelal);
    setValueAddedTask(calculatedValueAddedTask);
    setMunicipalWaste(calculatedMunicipalWaste);
    setTotalSum(calculatedTotalSum);
  };

  return (
    <div className="app-container">
      <div className="tab-container">
        <button
          onClick={() => {
            setActiveTab("EF");
            resetResults();
          }}
          className={`tab-button ${activeTab === "EF" ? "active" : ""}`}
        >
          Incoterms (E&F) 2020
        </button>
        <button
          onClick={() => {
            setActiveTab("CD");
            resetResults();
          }}
          className={`tab-button ${activeTab === "CD" ? "active" : ""}`}
        >
          Incoterms (C&D) 2020
        </button>
        <button
          onClick={() => {
            setActiveTab("CCC");
            resetResults();
          }}
          className={`tab-button ${activeTab === "CCC" ? "active" : ""}`}
        >
          Incoterms (CIF & CIP) 2020
        </button>
      </div>

      <form onSubmit={calculateResults} className="calculator-form">
        <h2 className="form-title">
          {activeTab === "EF"
            ? "Incoterms (E&F) 2020"
            : activeTab === "CD"
            ? "Incoterms (C&D) 2020"
            : "Incoterms (CIF & CIP) 2020"}
        </h2>

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

        {activeTab === "EF" && (
          <div className="input-container">
            <label htmlFor="f">کرایه حمل: </label>
            <input
              type="number"
              name="f"
              value={f}
              onChange={(e) => setF(e.target.value)}
              className="input-field"
            />
          </div>
        )}

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

        {(activeTab === "EF" || activeTab === "CD") && (
          <div className="input-container">
            <label htmlFor="customI">بیمه (اختیاری): </label>
            <input
              type="number"
              name="customI"
              value={customI}
              onChange={(e) => setCustomI(e.target.value)}
              placeholder="اگر خالی باشد محاسبه می‌شود"
              className="input-field"
            />
          </div>
        )}

        <button type="submit" className="submit-btn">
          Calculate
        </button>
      </form>

      <div className="result-container">
        {activeTab !== "CCC" && (
          <p className="result">بیمه = {formatNumber(i)}</p>
        )}
        <p className="result">ارزش سیف = {formatNumber(cif)}</p>
        <p className="result">حقوق ورودی = {formatNumber(resultX)}</p>
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

export default CombinedApp;
