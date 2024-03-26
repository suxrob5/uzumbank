"use client";
import { Card, CardActionArea } from "@mui/material";
// next/links
import Link from "next/link";
// react-hooks    useState
import { useState } from "react";

const Navbar = () => {
  const [inputClassName, setInputClassName] = useState("hidden");

  const handleButtonClick = () => {
    if (inputClassName == "hidden") {
      setInputClassName("flex");
    } else if (inputClassName == "flex") {
      setInputClassName("hidden");
    }
  };

  return (
    <>
      <script
        src="https://kit.fontawesome.com/1d3a6012a0.js"
        crossOrigin="anonymous"
        async
      ></script>
      {/*  */}
      <nav className="mx-auto w-[80%] p-10">
        <ul className="flex items-center justify-between">
          <li className="flex items-center justify-between py-5 text-2xl font-[300] text-[#383838FF]">
            <Link className="mx-3 px-3" href="https://uzumbank.uz/en/cards">
              Продукты
            </Link>
            <Link className="mx-3 px-3" href="https://uzumbank.uz/en/transfers">
              Денежные переводы
            </Link>
            <Link className="mx-3 px-3" href="https://uzumbank.uz/en/tariffs">
              Тарифы
            </Link>
            <Link className="mx-3 px-3" href="https://uzumbank.uz/en/vacancies">
              Вакансии
            </Link>
            <Link className="mx-3 px-3" href="https://uzumbank.uz/en/tender">
              Тендер
            </Link>
            <Link className="mx-3 px-3" href="#">
              Курсы валют
            </Link>
          </li>
          <Card>
            <CardActionArea>
              <input
                type="text"
                className={`${inputClassName} rounded-md border px-5 py-3 focus:outline-blue-500`}
              />
            </CardActionArea>
          </Card>
          <Card className="rounded-full shadow-none">
            <CardActionArea>
              <button
                className="text-2xl transition-all"
                onClick={handleButtonClick}
              >
                <i className="fa-solid fa-magnifying-glass p-5"></i>
              </button>
            </CardActionArea>
          </Card>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
