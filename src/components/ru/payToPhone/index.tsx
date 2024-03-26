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
            Для оплаты нужен <br /> только телефон
          </h1>
          <p className="mt-10 text-[18px]">
            Удобнее и безопаснее физических банковских карт и наличных <br /> денег, и
            к тому же позволяет защитить ваши личные данные при <br /> оплате в
            магазинах.
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
