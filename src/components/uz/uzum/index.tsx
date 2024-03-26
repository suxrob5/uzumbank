// images
import Img from "@/assets/uzumCenter.png"
// next/images
import Image from "next/image";

const Uzum = () => {
  return (
    <div className="mt-10">
      <div>
        <h1 className="text-center text-[32px] font-[700] text-[#7000FFFF]">
          Uzum bu nima?
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <div className="mt-5">
          <Image src={Img} alt="uzum" width={600} />
        </div>
        <div>
          <p className="m-1 text-[18px] font-[400] text-[#5E5E5EFF]">
            Uzum - bu raqamli ekotizimni rivojlantiruvchi <br /> kompaniyalar
            guruhi, ushbu guruhning ichiga <br /> moliyaviy xizmat va keng
            assortimentli marketpleys <br /> hamda tezkor yetkazib berish
            xizmatlari kiradi.
          </p>
          <p className="mt-8 text-[18px] font-[400] text-[#5E5E5EFF]">
            Uzum Bank Uzum brendining uchinchi servisiga <br /> aylandi.
          </p>
          <p className="mt-8 text-[18px] font-[400] text-[#5E5E5EFF]">
            Shuningdek, hozirda ekotizimga keng assortimentli <br /> va tez
            yetkazib beriladigan “Uzum Market” <br /> marketpleysi, “Uzum
            Nasiya” muddatli to`lov servisi, <br /> “Uzum Tezkor” restoran va
            doʻkonlardan tez yetkazib <br /> berish servislari kiradi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Uzum