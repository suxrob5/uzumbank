"use client";

import { Card, CardActionArea } from "@mui/material";
import { FormEvent } from "react";

const End = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const inputElement = target.querySelector(
      'input[type="email"]',
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.value = "";
    }
  };

  return (
    <div className="mt-[100px]">
      <h1 className="text-2xl">Subscribe to our news and announcements</h1>
      <div className="flex items-center justify-between p-10">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-between"
        >
          <input
            type="email"
            placeholder="Email"
            className="text-2xl mx-3 w-[300px] rounded-lg bg-gray-100 px-5 py-5 focus:outline-[#7000FFFF]"
          />
          <Card className=" bg-[#C9B8FFFF] text-2xl font-[600] text-[#7000FFFF] shadow-none">
            <CardActionArea className="px-20">
              <button type="submit" className="px-20 py-5">
                Send
              </button>
            </CardActionArea>
          </Card>
        </form>
        <div className="relative">
          <a href="tel:+998787770799" className="text-3xl">
            +998 78 777 07 99
          </a>{" "}
          <br />
          <a
            href="https://t.me/uzumbank_support"
            target="blank"
            className="absolute right-0 text-xl text-[#7000FFFF] mt-3"
          >
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
};

export default End;
