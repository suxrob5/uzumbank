// images
import Img from "@/assets/uzumCenter.png"
// next/images
import Image from "next/image";

const Uzum = () => {
  return (
    <div className="mt-10">
      <div>
        <h1 className="text-center text-[32px] font-[700] text-[#7000FFFF]">
          What is Uzum?
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <div className="mt-5">
          <Image src={Img} alt="uzum" width={600} />
        </div>
        <div>
          <p className="text-[18px] font-[400] text-[#5E5E5EFF] m-1">
            Uzum is a group of companies developing a digital <br /> ecosystem
            that includes financial services and a <br /> marketplace with a
            wide range of products and fast <br /> delivery.
          </p>
          <p className="text-[18px] font-[400] text-[#5E5E5EFF] mt-8">
            Uzum Bank became the third service under the <br /> Uzum brand.
          </p>
          <p className="text-[18px] font-[400] text-[#5E5E5EFF] mt-8">
            Also, the ecosystem already includes a marketplace <br /> with a wide range
            and fast delivery Uzum Market, <br /> installment service Uzum Nasiya,
            express delivery <br /> service from restaurants and shops Uzum Tezkor
          </p>
        </div>
      </div>
    </div>
  );
}

export default Uzum