import Link from "next/link";
import React from "react";
// images
import End from "@/assets/end.png"
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#7000FFFF] p-10">
        <div className="mx-auto flex w-[80%] justify-between text-xl text-white">
          <ul>
            <li className="px-1 py-3 text-[18px] font-[600]">
              <Link href="#">Products</Link>
            </li>
            <li className="p-1">
              <Link href="#">Cards</Link>
            </li>
            <li className="p-1">
              <Link href="#">Credits</Link>
            </li>
            <li className="p-1">
              <Link href="#">Deposits</Link>
            </li>
            <li className="p-1">
              <Link href="#">Accounts</Link>
            </li>
            <li className="p-1">
              <Link href="#">Wallets</Link>
            </li>
            <li className="p-1">
              <Link href="#">Money transfers</Link>
            </li>
          </ul>
          <ul>
            <li className="px-1 py-3 text-[18px] font-[600]">
              <Link href="#">Services</Link>
            </li>
            <li className="p-1">
              <Link href="#">My home</Link>
            </li>
            <li className="p-1">
              <Link href="#">UzASBO</Link>
            </li>
            <li className="p-1">
              <Link href="#">HUMO Pay</Link>
            </li>
            <li className="p-1">
              <Link href="#">Transfer to requisites</Link>
            </li>
            <li className="p-1">
              <Link href="#">Kindergarten payments</Link>
            </li>
          </ul>
          <ul>
            <li className="px-1 py-3 text-[18px] font-[600]">
              <Link href="#">About the bank</Link>
            </li>
            <li className="p-1">
              <Link href="#">Bank structure</Link>
            </li>
            <li className="p-1">
              <Link href="#">Management</Link>
            </li>
            <li className="p-1">
              <Link href="#">Bank details</Link>
            </li>
            <li className="p-1">
              <Link href="#">Bank charter</Link>
            </li>
            <li className="p-1">
              <Link href="#">State symbols</Link>
            </li>
            <li className="p-1">
              <Link href="#">Essential facts</Link>
            </li>
            <li className="p-1">
              <Link href="#">Local acts</Link>
            </li>
            <li className="p-1">
              <Link href="#">Development strategy</Link>
            </li>
            <li className="p-1">
              <Link href="#">Bank mission</Link>
            </li>
            <li className="p-1">
              <Link href="#">Documents</Link>
            </li>
            <li className="p-1">
              <Link href="#">License of JS &quot;Uzum Bank&quot;</Link>
            </li>
            <li className="p-1">
              <Link href="#">Events</Link>
            </li>
          </ul>
          <ul>
            <li className="px-1 py-3 text-[18px] font-[600]">
              <Link href="#">
                Shareholders and <br /> investors
              </Link>
            </li>

            <li className="p-1">
              <Link href="#">Meeting of shareholders</Link>
            </li>
            <li className="p-1">
              <Link href="#">Auditing</Link>
            </li>
            <li className="p-1">
              <Link href="#">Information about dividends</Link>
            </li>
            <li className="p-1">
              <Link href="#">Affiliates</Link>
            </li>
            <li className="p-1">
              <Link href="#">Emission</Link>
            </li>
            <li className="p-1">
              <Link href="#">Business plan</Link>
            </li>
            <li className="p-1">
              <Link href="#">Corporate governance</Link>
            </li>
            <li className="p-1">
              <Link href="#">Financial data</Link>
            </li>
            <li className="p-1">
              <Link href="#">Stocks</Link>
            </li>
            <li className="p-1">
              <Link href="#">Information disclosure</Link>
            </li>
          </ul>
          <ul>
            <li className="px-1 py-3 text-[18px] font-[600]">
              <Link href="#">Email</Link>
            </li>
            <li className="p-1">
              <Link href="#">info@uzumbank.uz</Link>
            </li>
            <li className="px-1 py-4 text-[18px] font-[600]">
              <Link href="#">Interactive services</Link>
            </li>
            <li>
              <Link href="#">
                Appeals of individuals and legal <br /> entities
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
