// images
import Img from "@/assets/uzumCenter.png"
// next/images
import Image from "next/image";

const Uzum = () => {
  return (
    <div className="mt-10">
      <div>
        <h1 className="text-center text-[32px] font-[700] text-[#7000FFFF]">
          Что такое Uzum?
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <div className="mt-5">
          <Image src={Img} alt="uzum" width={600} />
        </div>
        <div>
          <p className="m-1 text-[18px] font-[400] text-[#5E5E5EFF]">
            Uzum — группа компаний, развивающая цифровую <br /> экосистему, куда
            входят финансовые сервисы и <br /> маркетплейс с широким
            ассортиментом и <br /> быстрой доставкой.
          </p>
          <p className="mt-8 text-[18px] font-[400] text-[#5E5E5EFF]">
            Uzum Bank стал третьим сервисом под брендом <br /> Uzum.
          </p>
          <p className="mt-8 text-[18px] font-[400] text-[#5E5E5EFF]">
            Также в экосистему уже входят маркетплейс с <br /> широким ассортиментом и
            быстрой доставкой <br /> Uzum Market, сервис рассрочки Uzum Nasiya, <br /> сервис
            экспресс-доставки из ресторанов и <br /> магазинов Uzum Tezkor
          </p>
        </div>
      </div>
    </div>
  );
}

export default Uzum