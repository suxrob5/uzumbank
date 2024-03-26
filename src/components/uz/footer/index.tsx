import Link from "next/link";
import React from "react";
// images
import End from "@/assets/end.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#7000FFFF] p-10">
        <div className="mx-auto flex w-[80%] justify-between text-xl text-white">
          <ul>
            <li className="px-1 py-3 text-[18px] font-[600]">
              <Link href="#">Mahsulotlar</Link>
            </li>
            <li className="p-1">
              <Link href="#">Plastik kartalari</Link>
            </li>
            <li className="p-1">
              <Link href="#">Kreditlar</Link>
            </li>
            <li className="p-1">
              <Link href="#">Omonatlar</Link>
            </li>
            <li className="p-1">
              <Link href="#">Hisob raqamlari</Link>
            </li>
            <li className="p-1">
              <Link href="#">Hamyonlar</Link>
            </li>
            <li className="p-1">
              <Link href="#">Pul o`tkazmalari</Link>
            </li>
          </ul>
          <ul>
            <li className="px-1 py-3 text-[18px] font-[600]">
              <Link href="#">Xizmatlar</Link>
            </li>
            <li className="p-1">
              <Link href="#">Mening uyim</Link>
            </li>
            <li className="p-1">
              <Link href="#">UzASBO</Link>
            </li>
            <li className="p-1">
              <Link href="#">HUMO Pay</Link>
            </li>
            <li className="p-1">
              <Link href="#">Rekvizitlar bo`yicha o`tkazma</Link>
            </li>
            <li className="p-1">
              <Link href="#">MTTga to`lovlar</Link>
            </li>
          </ul>
          <ul>
            <li className="px-1 py-3 text-[18px] font-[600]">
              <Link href="#">Bank haqida</Link>
            </li>
            <li className="p-1">
              <Link href="#">Bank tuzilishi</Link>
            </li>
            <li className="p-1">
              <Link href="#">Rahbariyat</Link>
            </li>
            <li className="p-1">
              <Link href="#">Bank rekvizitlari</Link>
            </li>
            <li className="p-1">
              <Link href="#">Bank ustavi</Link>
            </li>
            <li className="p-1">
              <Link href="#">Davlat ramzlari</Link>
            </li>
            <li className="p-1">
              <Link href="#">Muhim faktlar</Link>
            </li>
            <li className="p-1">
              <Link href="#">Mahalliy aktlar</Link>
            </li>
            <li className="p-1">
              <Link href="#">Rivojlanish strategiyasi</Link>
            </li>
            <li className="p-1">
              <Link href="#">Bankning missiyasi</Link>
            </li>
            <li className="p-1">
              <Link href="#">Hujjatlar</Link>
            </li>
            <li className="p-1">
              <Link href="#">`Uzum Bank` AJ litsenziyasi</Link>
            </li>
            <li className="p-1">
              <Link href="#">Tadbirlar</Link>
            </li>
          </ul>
          <ul>
            <li className="px-1 py-3 text-[18px] font-[600]">
              <Link href="#">Aksiyadorlar va investorlar</Link>
            </li>

            <li className="p-1">
              <Link href="#">Aksiyadorlar yig`ilishi</Link>
            </li>
            <li className="p-1">
              <Link href="#">Audit</Link>
            </li>
            <li className="p-1">
              <Link href="#">Dividendlar haqida ma`lumot</Link>
            </li>
            <li className="p-1">
              <Link href="#">Affillangan shaxslar</Link>
            </li>
            <li className="p-1">
              <Link href="#">Qimmatli qog`ozlar emissiyasi</Link>
            </li>
            <li className="p-1">
              <Link href="#">Biznes plan</Link>
            </li>
            <li className="p-1">
              <Link href="#">Korporativ boshqaruv</Link>
            </li>
            <li className="p-1">
              <Link href="#">Moliyaviy ko`rsatkichlar</Link>
            </li>
            <li className="p-1">
              <Link href="#">Aksiyalar</Link>
            </li>
            <li className="p-1">
              <Link href="#">Axborotni ochish</Link>
            </li>
          </ul>
          <ul>
            <li className="px-1 py-3 text-[18px] font-[600]">
              <Link href="#">Elektron pochta</Link>
            </li>
            <li className="p-1">
              <Link href="#">info@uzumbank.uz</Link>
            </li>
            <li className="px-1 py-4 text-[18px] font-[600]">
              <Link href="#">Interaktiv xizmatlar</Link>
            </li>
            <li>
              <Link href="#">
                Jismoniy va yuridik shaxslarning <br /> murojaatlari
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div>
        <Image src={End} alt="" />
      </div>
    </div>
  );
};

export default Footer;
