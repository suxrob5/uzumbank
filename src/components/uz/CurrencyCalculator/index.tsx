"use client";

import { useState } from "react";
import leftAndRight from "@/assets/leftAndRight.webp";
import Image from "next/image";

const CurrencyCalculator = () => {
  const [element, setElement] = useState(false);
  const [usd, setUsd] = useState("");
  const [uzs, setUzs] = useState("");

  const handleElement = () => {
    if (element == false) {
      setElement(true);
    } else if (element == true) {
      setElement(false);
    }
  };

  return (
    <div className="mt-[150px]">
      <header>
        <h1 className="text-[32px] font-[700] text-[#7000FFFF]">
          Valyuta kalkulyatori
        </h1>
        <p className="mt-8 text-[24px] font-[400] text-[#383838FF]">
          Uzum Bankda biz hamisha qulay kursdan foydalanamiz
        </p>
      </header>
      <main className="relative mt-10 grid grid-cols-2 gap-5 p-5">
        {/* 1- main */}
        <div className={`${element == false ? "hidden" : "grid"} `}>
          <div className="p-10">
            <div className="flex items-center justify-between p-5">
              <h1 className="text-[20px]">Menda bor</h1>
              <p className="text-[18px] text-[#383838FF]">So‘m</p>
            </div>
            {/* input */}
            <div className="mt-5 flex items-center justify-between">
              <input
                type="text"
                value={uzs}
                placeholder="0"
                onChange={(e) => setUzs(e.target.value)}
                className="border-#C9B8FFFF border-b-2 border-[#C9B8FFFF] py-6 pl-5 text-3xl text-[#7000FFFF] placeholder:text-[#C9B8FFFF] focus:border-[#7000FFFF] focus:outline-none"
              />
              <div className="flex items-center justify-between">
                <h1 className="ml-5 cursor-pointer border-b-2 border-[#C9B8FFFF] px-3 py-5 text-2xl hover:border-[#7000FFFF]">
                  UZS
                </h1>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-xl ">
                The exchange rate is automatically updated <br /> press F5 if
                the rate is not updated
              </h1>
            </div>
          </div>
        </div>
        {/* 2-element */}
        <div className={`${element == true ? "hidden" : "grid"}`}>
          <div className="p-10">
            <div className="flex items-center justify-between p-5">
              <h1 className="text-[20px]">Men qabul qilaman</h1>
              <p className="text-[18px] text-[#383838FF]">AQSh dollari</p>
            </div>
            {/* input */}
            <div className="mt-5 flex items-center justify-between">
              <input
                type="text"
                value={usd}
                onChange={(e) => setUsd(e.target.value)}
                placeholder="0"
                className="border-#C9B8FFFF border-b-2 border-[#C9B8FFFF] py-6 pl-5 text-3xl text-[#7000FFFF] placeholder:text-[#C9B8FFFF] focus:border-[#7000FFFF] focus:outline-none"
              />
              <div className="flex items-center justify-between">
                <h1 className="ml-5 cursor-pointer border-b-2 border-[#C9B8FFFF] px-3 py-5 text-2xl hover:border-[#7000FFFF]">
                  USD
                </h1>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-xl ">
                The exchange rate is automatically updated <br /> press F5 if
                the rate is not updated
              </h1>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 flex w-[100%] items-center justify-center">
          <button onClick={handleElement} className="w-[50px]">
            <Image src={leftAndRight} alt="uimg" />
          </button>
        </div>

        {/* 2 main */}
        <div className={`${element == false ? "hidden" : "grid"} bg-gray-100`}>
          <div className="p-10">
            <div className="flex items-center justify-between p-5">
              <h1 className="text-[20px]">Men qabul qilaman</h1>
              <p className="text-[18px] text-[#383838FF]">AQSh dollari</p>
            </div>
            {/* input */}
            <div className="mt-5 flex items-center justify-between">
              <input
                type="text"
                placeholder="0"
                value={usd}
                onChange={(e) => setUsd(e.target.value)}
                className="border-#C9B8FFFF border-b-2 border-[#C9B8FFFF] bg-gray-100 py-6 pl-5 text-3xl text-[#7000FFFF] placeholder:text-[#C9B8FFFF] focus:border-[#7000FFFF] focus:outline-none"
              />
              <div className="flex items-center justify-between">
                <h1 className="ml-5 cursor-pointer border-b-2 border-[#C9B8FFFF] px-3 py-5 text-2xl hover:border-[#7000FFFF]">
                  USD
                </h1>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-xl opacity-0">
                The exchange rate is automatically updated <br /> press F5 if
                the rate is not updated
              </h1>
            </div>
          </div>
        </div>
        {/* 2-element */}
        <div className={`${element == true ? "hidden" : "grid"} bg-gray-100`}>
          <div className="p-10">
            <div className="flex items-center justify-between p-5">
              <h1 className="text-[20px]">Menda bor</h1>
              <p className="text-[18px] text-[#383838FF]">So‘m</p>
            </div>
            {/* input */}
            <div className="mt-5 flex items-center justify-between">
              <input
                type="text"
                value={uzs}
                onChange={(e) => setUzs(e.target.value)}
                placeholder="0"
                className="border-#C9B8FFFF border-b-2 border-[#C9B8FFFF] bg-gray-100 py-6 pl-5 text-3xl text-[#7000FFFF] placeholder:text-[#C9B8FFFF] focus:border-[#7000FFFF] focus:outline-none"
              />
              <div className="flex items-center justify-between">
                <h1 className="ml-5 cursor-pointer border-b-2 border-[#C9B8FFFF] px-3 py-5 text-2xl hover:border-[#7000FFFF]">
                  UZS
                </h1>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-xl opacity-0">
                The exchange rate is automatically updated <br /> press F5 if
                the rate is not updated
              </h1>
            </div>
          </div>
        </div>
      </main>
      <div className="relative">
        <a
          target="blank"
          href="http://cbu.uz/ru/arkhiv-kursov-valyut/index.php"
          className="absolute right-0 mt-20 decoration-slice text-[16px] font-[500] text-[#7000FFFF] underline"
        >
          Valyutalar kurslari arxivi
        </a>
      </div>
    </div>
  );
};

export default CurrencyCalculator;
