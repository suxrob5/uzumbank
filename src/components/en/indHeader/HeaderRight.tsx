"use client";
/* eslint-disable @next/next/no-sync-scripts */
// next
import Image from "next/image";
//images
import Koz from "@/assets/kor.png";

import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const HeaderRight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(1);
  const router = useRouter();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "Русский") {
      router.push("/ru");
    }
    if (event.target.value === "English") {
      router.push("/en");
    }
    if (event.target.value === "O`zbek") {
      router.push("/uz");
    }
  };

  
  const handlePlus = () => {
    if (isOpen == false) {
      setIsOpen(true);
    } else if (isOpen == true) {
      setIsOpen(false);
    }
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="relative">
          <Card
            onClick={handlePlus}
            className="w-[50px] rounded-full shadow-none"
          >
            <CardActionArea>
              <Image src={Koz} alt="ko'rlar uchun" width={50} />
            </CardActionArea>
          </Card>
          <div
            className={`${isOpen == false ? "hidden" : "grid"} absolute grid w-[200px] grid-cols-3 bg-gray-200 p-5`}
          >
            <button
              className="rounded-xl bg-[#7000FFFF] p-5 text-xl text-white transition-all active:scale-95"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
            <div className="flex items-center justify-center">
              <h1 className="text-3xl">{count}</h1>
            </div>
            <button
              className="rounded-xl bg-[#7000FFFF] p-5 text-xl text-white transition-all active:scale-95"
              onClick={() => setCount(count - 1)}
            >
              -
            </button>
          </div>
        </div>

        <select
          className="mx-5 w-[180px] border-none text-2xl text-[#888888FF]"
          onChange={handleSelectChange}
        >
          <option value="English" className="text-2xl text-[#888888FF]">
            English
          </option>
          <option value="Русский" className="text-2xl text-[#888888FF]">
            Русский
          </option>
          <option value="O`zbek" className="text-2xl text-[#888888FF]">
            O`zbek
          </option>
        </select>
        <Link href="en/login" target="blank">
          <button className="rounded-lg bg-[#7000FFFF] px-10 py-4 text-2xl text-white hover:bg-[#6f00fff1]">
            Sign in account
          </button>
        </Link>
      </div>
    </>
  );
};

export default HeaderRight;
