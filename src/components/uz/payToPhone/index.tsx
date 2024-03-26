import PayPay from "@/assets/payPay.png";
import Hpay from "@/assets/hPay.svg";
import Visa from "@/assets/visa.svg";
import Image from "next/image";

const PayToPhone = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[48px] font-[700] text-[#7000FFFF]">
            To’lov uchun faqat <br /> telefon yetarli
          </h1>
          <p className="mt-10 text-[18px]">
            Jismoniy bank kartalari va naqd pul mablag’laridan ko’ra qulay va
            <br />
            xavfsizroq, bundan tashqari Sizning shaxsiy ma’lumotlaringizni
            <br />
            do’konlarda to’lov jarayonida himoyalashga yordam beradi.
          </p>
          <div className="mt-[50px] flex items-center justify-start">
            <button>
              <Image src={Hpay} alt="btn icon Hpay" />
            </button>
            <button className="ml-10">
              <Image src={Visa} alt="btn icon VISA" />
            </button>
          </div>
        </div>
        <div>
          <Image src={PayPay} alt="Pay Pay" />
        </div>
      </div>
    </div>
  );
};

export default PayToPhone;
