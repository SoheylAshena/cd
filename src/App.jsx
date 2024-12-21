import React, { useState } from "react";
import Sider from "./Sider";

const CombinedApp = () => {
  const openSider = () => {
    isOpen((prev) => !prev);
  };

  const [activeTab, setActiveTab] = useState("EF");
  const [open, isOpen] = useState(false);

  const formatNumber = (num) => {
    // Convert number to locale string format with commas as thousand separators
    const nini = num.toFixed();
    return Number(nini).toLocaleString();
  };

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
  const [exchangeRate, setExchangeRate] = useState("");

  const resetResults = () => {
    setI(0);
    setCIF(0);
    setResultX(0);
    setHelal(0);
    setValueAddedTask(0);
    setMunicipalWaste(0);
    setTotalSum(0);
  };

  const convertToIRR = (value) => {
    if (exchangeRate.trim() === "") {
      return value;
    } else {
      return value * exchangeRate;
    }
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

    setI(convertToIRR(calculatedI));
    setCIF(convertToIRR(calculatedCIF));
    setResultX(convertToIRR(calculatedResultX));
    setHelal(convertToIRR(calculatedHelal));
    setValueAddedTask(convertToIRR(calculatedValueAddedTask));
    setMunicipalWaste(convertToIRR(calculatedMunicipalWaste));
    setTotalSum(convertToIRR(calculatedTotalSum));
  };

  return (
    <>
      {open === true && <Sider openSider={openSider} />}

      <div className="bg-gradient-to-tr from-blue-500 to-cyan-500 min-h-screen flex justify-center items-center p-4 rtl">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md sm:max-w-lg xl:max-w-xl p-6 lg:p-8">
          <div className="flex space-x-4 mb-6 md:mb-8 justify-center">
            <button
              onClick={() => {
                setActiveTab("EF");
                resetResults();
              }}
              className={`w-28 sm:w-32 py-2 text-lg font-semibold rounded-lg focus:outline-none transition-all duration-300 ${
                activeTab === "EF"
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
              }`}
            >
              Incoterms <br /> (E & F) 2020
            </button>
            <button
              onClick={() => {
                setActiveTab("CD");
                resetResults();
              }}
              className={`w-28 sm:w-32 py-2 text-lg font-semibold rounded-lg focus:outline-none transition-all duration-300 ${
                activeTab === "CD"
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
              }`}
            >
              Incoterms <br /> (C & D) 2020
            </button>
            <button
              onClick={() => {
                setActiveTab("CCC");
                resetResults();
              }}
              className={`w-28 sm:w-32 py-2 text-lg font-semibold rounded-lg focus:outline-none transition-all duration-300 ${
                activeTab === "CCC"
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
              }`}
            >
              Incoterms <br /> (CIF & CIP) 2020
            </button>
          </div>

          <form onSubmit={calculateResults} className="space-y-6">
            <div>
              <label
                htmlFor="c"
                className="block text-lg sm:text-xl font-medium text-gray-800"
              >
                قیمت خرید کالا در مبدا
              </label>
              <input
                type="number"
                name="c"
                value={c}
                onChange={(e) => setC(e.target.value)}
                className="w-full p-4 mt-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {activeTab === "EF" && (
              <div>
                <label
                  htmlFor="f"
                  className="block text-lg sm:text-xl font-medium text-gray-800"
                >
                  کرایه حمل
                </label>
                <input
                  type="number"
                  name="f"
                  value={f}
                  onChange={(e) => setF(e.target.value)}
                  className="w-full p-4 mt-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="x"
                className="block text-lg sm:text-xl font-medium text-gray-800"
              >
                تعرفه ورودی
              </label>
              <input
                type="number"
                name="x"
                value={x}
                onChange={(e) => setX(e.target.value)}
                className="w-full p-4 mt-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {(activeTab === "EF" || activeTab === "CD") && (
              <div>
                <label
                  htmlFor="customI"
                  className="block text-lg sm:text-xl font-medium text-gray-800"
                >
                  بیمه
                </label>
                <input
                  type="number"
                  name="customI"
                  value={customI}
                  onChange={(e) => setCustomI(e.target.value)}
                  placeholder="اگر خالی باشد با فرمول پنج هزارم محاسبه می‌شود"
                  className="w-full p-4 mt-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="exchangeRate"
                className="block text-lg sm:text-xl font-medium text-gray-800"
              >
                نرخ تبدیل دلار به ریال
              </label>
              <input
                type="number"
                name="exchangeRate"
                value={exchangeRate}
                onChange={(e) => setExchangeRate(e.target.value)}
                className="w-full p-4 mt-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                min="1"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-xl text-white bg-blue-600 rounded-xl mt-6 focus:outline-none hover:bg-blue-700 transition-all duration-300"
            >
              محاسبه
            </button>
          </form>

          <div className="mt-8 text-center space-y-4">
            {activeTab !== "CCC" && (
              <p className="text-lg sm:text-xl text-gray-700">
                بیمه = <span className="text-blue-700">{formatNumber(i)}</span>
              </p>
            )}
            <p className="text-lg sm:text-xl text-gray-700">
              ارزش سیف ={" "}
              <span className="text-blue-700">{formatNumber(cif)}</span>
            </p>
            <p className="text-lg sm:text-xl text-gray-700">
              حقوق ورودی ={" "}
              <span className="text-blue-700">{formatNumber(resultX)}</span>
            </p>
            <p className="text-lg sm:text-xl text-gray-700">
              هلال احمر ={" "}
              <span className="text-blue-700">{formatNumber(helal)}</span>
            </p>
            <p className="text-lg sm:text-xl text-gray-700">
              مالیات بر ارزش افزوده ={" "}
              <span className="text-blue-700">
                {formatNumber(valueAddedTask)}
              </span>
            </p>
            <p className="text-lg sm:text-xl text-gray-700">
              پسماند شهرداری ={" "}
              <span className="text-blue-700">
                {formatNumber(municipalWaste)}
              </span>
            </p>
            <p className="text-lg sm:text-xl text-gray-700">
              مجموع حقوق و عوارض گمرکی ={" "}
              <span className="text-blue-700">{formatNumber(totalSum)}</span>
            </p>
            <button
              className="w-[300px] py-3 text-xl text-blue-600 bg-blue-200 rounded-xl mt-6 focus:outline-none  transition-all duration-300"
              onClick={openSider}
            >
              اصطلاحات بازرگانی خارجی
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CombinedApp;
